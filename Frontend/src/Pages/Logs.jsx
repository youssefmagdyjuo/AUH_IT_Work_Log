import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllLogs } from '../features/all logs/allLogsSlice.js';
export default function Logs() {
    const dispatch = useDispatch();
    const allLogs = useSelector((state) => state.allLogs);
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/logs`);
                dispatch(setAllLogs(data.data));

            }
            catch (error) {
                console.log(error);
            }
        }
        fetchLogs();
    }
        , []);
    return (
        <>
            <h1>All Logs</h1>
            <div className='logs_container'>
                {
                    allLogs.logs.map((log) => {
                        const date = new Date(log.date);
                        const options = { weekday: 'long', day: 'numeric', month: 'long' };
                        const formattedDate = date.toLocaleDateString(undefined, options);
                        return (
                            <div key={log._id} className='log_card'>
                                <p className='text-gray-500 text-xs flex gap-4 justify-center items-center'>
                                    <i class="fa-regular fa-clock"></i>
                                    {formattedDate}</p>
                                <p><strong>Tasks:</strong> {log.tasks}</p>
                                <p><strong>Notes:</strong> {log.notes}</p>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}