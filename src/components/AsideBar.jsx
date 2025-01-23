/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";
// import { asideBarList } from "../data";

const AsideBar = ({ data, baseURL }) => {
  console.log(baseURL);
  return (
    <div className="h-screen overflow-hidded box bg-[#0052CC] secondary-hover">
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
    </div>
  );
};

export default AsideBar;
