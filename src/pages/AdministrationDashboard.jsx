/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";
import { adminAsideList } from "../data";

const AdministrationDashboard = () => {
  adminAsideList;
  return (
    <div className="flex w-full bg min-h-screen">
      <div className=" w-[250px] h-screen ">
        <AsideBar data={adminAsideList} baseURL="/administration" />
      </div>
      <div className="flex-1 p-6 m-10">
        <h1>Welcome Back!</h1>
        {/* Nested Routes Render Here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdministrationDashboard;
