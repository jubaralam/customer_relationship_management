/* eslint-disable react/prop-types */
// import React from 'react'

import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";
import { useContext } from "react";
import {UserAuthDetailsContext} from "../contexts//UserAuthDetails";
import { asideBarList } from "../data";

const Dashboard = ({ isLoggedIn }) => {
  
  const {userAuthDetails} = useContext(UserAuthDetailsContext)
  console.log(userAuthDetails)
  console.log(isLoggedIn);
  return (
    <div className="flex w-full bg min-h-screen">
      <div className=" w-[250px] h-screen ">
        <AsideBar data={asideBarList} baseURL="/dashboard" />
      </div>
      <div className="flex-1 p-6 m-10">
        <h1>Welcome Back!</h1>
        {/* Nested Routes Render Here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
