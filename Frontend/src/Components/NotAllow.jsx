import { Link } from "react-router-dom";
import Button from "./Button";


export default function NotAllow({ text }) {
    return (
        <div className="not_allow">
            <p>{text}</p>
            <div className='w-80'>
                <Link to="/">
                    <Button name={'Back to home'} classStyle={'btn_secondary'} />
                </Link>
            </div>
        </div>
    );
}