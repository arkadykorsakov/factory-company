import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" Component={Main} />
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="/users/:userId?/:edit?"
                                Component={Users}
                            />
                        </Route>
                        <Route path="/login/:type?" Component={Login} />
                        <Route path="/logout" Component={LogOut} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
