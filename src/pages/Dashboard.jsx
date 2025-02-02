/* eslint-disable react/prop-types */
// import React from 'react'

import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";

import { asideBarList } from "../data";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("role: ", user);
  return (
    <div className="flex w-full bg min-h-screen ">
      <div className=" w-[250px] h-screen sticky top-0 left-0 z-10 ">
        <AsideBar data={asideBarList} baseURL="/dashboard" />
      </div>
      <div className="flex-1 p-6 m-4 min-h-screen overflow-hidden">
        <h1 className="text-4xl">Dashboard</h1>
        <p className="text-[13px] mb-5">Welcome to your dashboard</p>
        <div className="min-h-screen overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
