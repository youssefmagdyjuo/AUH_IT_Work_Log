import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/auth/login`, {
                username,
                password
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            // optional: redirect to home/dashboard
            window.location.href = "/";

        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Login failed");
        }
    }

    return (
        <div className="form_container">
            <form className="loginForm" onSubmit={handleLogin}>
                <h2>Login</h2>
                <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button name="Login" classStyle="btn_primary" type="submit" />
            </form>
        </div>
    )
}
