import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import { LoginPage } from "./pages/home/login";
import { RouterLayout } from "./common/router-layout";

export const AppRouter: React.FC = ()=>{
    return (
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
        </Routes>
    )
}