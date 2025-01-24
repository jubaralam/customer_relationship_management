/* eslint-disable react/prop-types */
// import React from 'react'

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import { asideBarList } from "../data";

const AsideBar = ({ data, baseURL }) => {
  const [flag, setFlag] = useState(false);
  const logout = () => {
    alert("You are Logged out");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setFlag(true);
  };

  if (flag) {
    return <Navigate to="/login" />;
  }
  console.log(baseURL);
  return (
    <>
      <div className="h-screen overflow-hidded box bg-[#0052CC] secondary-hover flex flex-col">
        <ul className="h-screen overflow-y-scroll py-10 px-3">
          {data?.map((item, idx) => {
            return (
              <li
                key={idx}
                className="py-3  px-4 hover:bg-[#f4f5f7]  text-[#f4f5f7] rounded-2xl  secondary-hover "
              >
                <Link to={`${baseURL}${item.url}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="">
          <button
            onClick={logout}
            className={`w-full py-2 px-4 text-white font-semibold bg-[#0052cc] rounded-md hover:bg-[#003c99] transition duration-200`}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AsideBar;
