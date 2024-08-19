import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login/login";
import { RouterLayout } from "./common/router-layout";

export const AppRouter: React.FC = ()=>{
    return (
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/" element={<HomePage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}