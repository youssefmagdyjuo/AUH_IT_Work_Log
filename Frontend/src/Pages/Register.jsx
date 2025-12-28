import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import axios from 'axios';
import NotAllow from '../Components/NotAllow';

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // fetch user role from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const isOwner = user?.role === "owner"; 

    const handleRegister = async (e) => {
        e.preventDefault(); 
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/auth/register`, {
                username,
                password,
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } // لو هتحقق token في backend
            });

            alert("User registered successfully!");
            setUsername("");
            setPassword("");
            window.location.href = "/";

        } catch (error) {
            console.error("Register error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Registration failed");
        }
    }

    if (!isOwner) return <NotAllow text={"Only the owner can create new users"}/>

    return (
        <div className="form_container">
            <form className="loginForm" onSubmit={handleRegister}>
                <h2>Register</h2>
                <Input 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value.toLowerCase())} 
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button 
                    name="Register" 
                    classStyle="btn_primary" 
                    type="submit" 
                />
            </form>
        </div>
    )
}
