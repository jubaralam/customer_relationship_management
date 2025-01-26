/* eslint-disable no-unused-vars */
import React from "react";
import { navLists } from "../data";
import { Link } from "react-router-dom";
import logo from "../assets/crm_logo.png";

const Navbar = () => {
  return (
    <div className="primary ">
      <div className="w-7xl mx-auto flex justify-between primary px-4">
        <div className="w-[230px] bg-white py-2 px-2 rounded-2xl">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex p-3">
            {navLists?.map((item) => (
              <li
                key={item.link}
                className={`py-3 px-5 mx-2 text-white font-semibold  rounded-md  transition duration-200 ${
                  item.link == "login"
                    ? "bg-[#003c99] hover:bg-white hover:text-[#0052cc]"
                    : "hover:bg-[#003c99]"
                }`}
              >
                <Link to={`/${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
