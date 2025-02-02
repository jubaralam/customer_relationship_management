/* eslint-disable react/prop-types */
// import React from 'react'

// import { Outlet } from "react-router-dom";

// import Card from "../components/Card";
import Statistics from "../components/Statistics";
import RevenueGenerated from "../components/RevenueGenerated";
import RecentTransactions from "../components/RecentTransactions";
import UsersStatistics from "../components/UsersStatistics";

const HomeDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("role: ", user);
  return (
    <div className="flex w-full  min-h-screen overflow-hidden">
      <div className="flex p-2 my-5 min-h-screen overflow-auto">
        <div className="min-h-screen overflow-auto">
          <Statistics />
          <UsersStatistics />
          <div className="flex flex-wrap  bg-[#ffffffbe]  my-15 p-5 rounded-2xl box-border ">
            <div className="w-[580px] mr-5 my-5 flex-grow-1">
              <RevenueGenerated />
            </div>
            <div className="w-350px] my-5 ">
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
