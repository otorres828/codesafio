import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RedirectPanel = ({  children,redirectTo = "/panel",}) => {
  const token = localStorage.getItem("token_codesafio");

  if ( token) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export const RedirectLogin = ({ children, redirectTo = "/login",}) => {
  
  const token = localStorage.getItem("token_codesafio");
  if (!token) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};

