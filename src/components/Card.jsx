/* eslint-disable react/prop-types */
// import React from "react";

import { useNavigate } from "react-router-dom";

const Card = ({ title, value, icon, url }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/dashboard${url}`)}
      className="surface-card shadow p-3 border-round  border border-gray-300 rounded-2xl m-2 bg-white w-[350px] cursor-pointer  "
    >
      <div className="flex justify-between mb-3 mx-5">
        <div className="">
          <span className="block text-500 font-medium mb-3 capitalize">
            {title}
          </span>
          <div className="text-900 text-green-500 font-medium text-xl">
            {value}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center bg-blue-100 rounded-2xl w-[2.5rem] h-[2.5rem]">
            <i className={`pi pi-${icon} text-blue-500 text-xl`}></i>{" "}
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between my-2 mx-2 ">
        <p className="text-green-500 font-medium">34 new</p>
        <p className="text-500">Since Last Visit</p>
      </div>
    </div>
  );
};

export default Card;
