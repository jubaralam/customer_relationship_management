/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../css/table.css";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Table = ({ data, loading, error, title, bashURL, url }) => {
  const navigate = useNavigate();
  const redirectToDetailPage = (id) => {
    navigate(`/dashboard/${bashURL}/${id}`);
  };
  return (
    <div className="table ">
      <section className="table_header flex justify-between bg-[#2684ff] text-white">
        <h1 className="text-xl">{title ? title : "Customers"} </h1>
        <button className="font-bold text-xl hover:bg-white hover:text-[#2684ff] px-5 py-2 rounded-2xl">
          <Link to={`/dashboard/${url}`}>Add + </Link>
        </button>
      </section>
      <section className="table_body ">
        <table className="w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone No</th>
              <th> Role</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
            ) : loading ? (
              <tr>
                <td colSpan="5" className="loading-spinner">
                  <LoadingPage />
                </td>
              </tr>
            ) : (
              data?.map((data) => {
                return (
                  <tr
                    className="capitalize"
                    key={data.name}
                    onClick={() => redirectToDetailPage(data._id)}
                  >
                    <td>{data.name}</td>
                    <td>{data.company}</td>
                    <td>{data.email}</td>
                    <td>{data.phone_no}</td>
                    <td>{data.role.split("_").join(" ")}</td>
                    {/* <td>{data._id}</td> */}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
