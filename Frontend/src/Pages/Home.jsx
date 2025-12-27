import axios from 'axios';
import Button from '../Components/Button';
import Textarea from '../Components/Textarea';
import { useSelector, useDispatch } from 'react-redux';
import { updateTasks, updateNotes, clearLog } from '../features/Log/logSlice.js';
import LogoutButton from '../Components/LogoutButton.jsx';
import NotAllow from '../Components/NotAllow.jsx';
export default function Home() {
    // fetch user role from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const isOwner = user?.role === "owner"; 

    const dispatch = useDispatch();
    const log = useSelector((state) => state.log);
    const handleSave = async () => {
        try {
            const { data } = await axios.post('http://localhost:3000/logs', log);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
        dispatch(clearLog());
    }
    if (!isOwner) return <NotAllow text={"Only the owner can create new logs"} />

    return (
        <div className='home_container'>
            <h1>IT Work Log Application</h1>
            <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>

            <Textarea
                value={log.tasks}
                onChange={(e) => { dispatch(updateTasks(e.target.value)) }}
                placeholder={'Tasks...'}
            />

            <Textarea
                value={log.notes}
                onChange={(e) => { dispatch(updateNotes(e.target.value)) }}
                placeholder={'Notes...'}
            />

            <div className='w-80'>
                <Button
                    disabled={log.tasks.trim() === '' && log.notes.trim() === ''}
                    onClick={handleSave}
                    classStyle={`btn_primary `}
                    name="Save it in DB"
                />
            </div>
        </div>
    )
}
