import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(logOut());
        navigate("/login");
    }, []);
    return <h1>loading</h1>;
};

export default LogOut;
