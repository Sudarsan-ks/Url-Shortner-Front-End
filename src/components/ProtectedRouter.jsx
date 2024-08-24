import React from 'react'
import { Navigate} from 'react-router-dom'

export const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = () => {
        const token = localStorage.getItem("Token");
        return !!token;

    }
    if (!isAuthenticated()) {
        alert('You are not authenticated. Please log in to Continue.');
        return <Navigate to="/" />;
    }

    return <Component />;

};

