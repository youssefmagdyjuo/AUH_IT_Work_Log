import React from "react";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

const NavBar = () => {
const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav>
            <div className="links_container">
                <div className={`links ${isOpen ? 'nav_active' : ''}`}>
                    <Link onClick={() => setIsOpen(false)} to="/daily-log">
                        <i class="fa-solid fa-plus"></i>
                        Daily Log
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/">
                        <i class="fa-solid fa-folder"></i>
                        Logs
                        </Link >
                </div>
                <div className="flex gap-4">
                    <div className="user">
                        <span><i class="fa-solid fa-user"></i></span>
                        {user?.username}
                    </div>
                    <LogoutButton />
                </div>
                <span
                    onClick={() => setIsOpen(!isOpen)}
                    className='bar'>{isOpen
                        ? <i class="fa-solid fa-xmark"></i>
                        : <i class="fa-solid fa-bars"></i>}</span>
            </div>
        </nav>
    );
}
export default NavBar;