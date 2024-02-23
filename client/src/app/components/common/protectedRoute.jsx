import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const ProtectedRoute = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const location = useLocation();
    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};

export default ProtectedRoute;
