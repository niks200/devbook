import React from "react";
import { useSelector } from "react-redux";
import {Outlet, Navigate } from "react-router-dom";

import "./admin.css";
import Sidebar from "./Sidebar";

const Admin = () => {
  const _user = useSelector(state => state.auth?.user?.role) 

  if(_user !== "admin"){
    return <Navigate to='/' />;
  }
  return (
    <section className="container-admin">
      <div className="admin-wrapper">
        <Sidebar />
        <div className="main-content">

          <Outlet />

          
        </div>
      </div>
    </section>
  );
};
export default Admin;
