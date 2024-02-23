import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return (
        <div className="container m-5">
            <h1> Main Page</h1>
            <h3>Инициализация данных Firebase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error:</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                Инициализация данных
            </button>
        </div>
    );
};

export default Main;
