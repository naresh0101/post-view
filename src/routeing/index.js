import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../accounts/login';
import Home from '../pages/home'
import ProtectedRoutes from '../protectedRoute';

const Routeing = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    {/* Protected routes here  */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routeing;