/* eslint-disable react/prop-types */
// import React from 'react'

import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";

import { asideBarList } from "../data";

const Dashboard = () => {
  return (
    <div className="flex w-full bg min-h-screen">
      <div className=" w-[250px] h-screen ">
        <AsideBar data={asideBarList} baseURL="/dashboard" />
      </div>
      <div className="flex-1 p-6 m-10 overflow-hidden">
        <h1>Welcome Back!</h1>
        {/* Nested Routes Render Here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
