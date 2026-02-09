import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Components/Button';

export default function LogDetails() {
    const { id } = useParams();
    const [log, setLog] = useState(null);

    useEffect(() => {
        const fetchLog = async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_BACKEND_BASEURL}/logs/${id}`
                );
                setLog(data.data);
                // console.log(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (id) fetchLog();
    }, [id]);

    if (!log) return <p className="text-center mt-10">Loading...</p>;

    const date = new Date(log.date);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return (
        <div className="LogDetails_container">
            <div className="p-8 bg-white shadow-md rounded-xl p-6 w-full max-w-200  ">

                <p className="text-gray-500 text-xs flex gap-2 justify-center items-center mb-4">
                    <i className="fa-regular fa-clock"></i>
                    {formattedDate}
                </p>

                <div className="mb-4">
                    <strong className='text-[var(--primary-color)]'>Work:</strong>
                    <div className="mt-2 space-y-1">
                        {log.tasks?.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>

                <div>
                    <strong className='text-[var(--primary-color)]'>Notes:</strong>
                    <div className="mt-2 space-y-1">
                        {log.notes?.split('\n').map((line, index) => (
                            <p key={index}>{line ? line : `...`}</p>
                        ))}
                    </div>
                </div>
            </div>
                {/* <div className='flex gap-4'>
                    <Button
                        disabled={log.tasks.trim() === '' && log.notes.trim() === ''}
                        classStyle={`btn_primary `}
                        name="Edit"
                    />
                    <Button
                        disabled={log.tasks.trim() === '' && log.notes.trim() === ''}
                        classStyle={`btn_dangery `}
                        name="Delete"
                    />
                </div> */}
        </div>
    );
}
