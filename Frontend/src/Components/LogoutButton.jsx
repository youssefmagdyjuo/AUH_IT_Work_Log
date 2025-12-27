import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 1️⃣ مسح token و user
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // 2️⃣ redirect للـ Login
        navigate("/login");
    }

    return (
        <div onClick={handleLogout} className="logout_button">
            Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
    );
}
