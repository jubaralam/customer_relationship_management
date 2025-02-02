/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import Table from "../components/Table";

const Users = () => {
  const { role } = useParams();
  console.log("role from users", role);
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  const getUsers = async () => {
    let url = role
      ? `https://wisdomcrm.onrender.com/api/users/?role=${role}&limit=${10}&page=${page}`
      : `https://wisdomcrm.onrender.com/api/users/?limit=${10}&page=${page}`;

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsersData(res.data.data);
      setPagination(res.data.meta);
      setFlag(false);
    } catch (error) {
      setFlag(false);
      setError(error.message);
    }
  };

  const increasePageNo = () => {
    setPage((prev) => prev + 1);
  };

  const decresePageNo = () => {
    alert("working");
    if (page > 1) {
      setPage((prev) => prev - 1); // Decrease the page number only when it is greater than 1
    } else {
      console.warn("You are already on the first page.");
    }
  };
  useEffect(() => {
    getUsers();
  }, [role, page]);
  return (
    <>
      <div>
        {flag ? (
          <LoadingPage />
        ) : (
          <Table
            data={usersData}
            loading={flag}
            error={error}
            title="Users"
            url="user-register"
            bashURL="user-details"
          />
        )}
      </div>
      <div className="flex justify-center items-center py-3">
        <button
          onClick={decresePageNo}
          disabled={page == 1 || loading}
          className={`${
            page == 1 ? "hover:bg-gray-400" : ""
          } py-2 px-4 text-white font-semibold bg-[#0052cc] rounded-md hover:bg-[#003c99] transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mx-auto" />
          ) : (
            "- Prev "
          )}
        </button>
        <p className=" px-6 font-semibold text-[#0052cc]">{page}</p>
        <button
          onClick={increasePageNo}
          disabled={pagination.totalPages == page}
          className={` py-2 px-4 text-white font-semibold bg-[#0052cc] rounded-md hover:bg-[#003c99] transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          } ${pagination.totalPages == page ? "bg-gray-500" : ""}`}
        >
          {loading ? (
            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mx-auto" />
          ) : (
            "Next +"
          )}
        </button>
      </div>
    </>
  );
};

export default Users;
