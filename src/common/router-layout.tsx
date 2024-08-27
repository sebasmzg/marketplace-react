import React from "react";
import { NavBar } from "./navBar";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export const RouterLayout: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return isAuth ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
