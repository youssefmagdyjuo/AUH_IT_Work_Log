// Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        // لو مفيش توكن → ريديركت للـ Login
        return <Navigate to="/login" replace />;
    }

    return children;
}
