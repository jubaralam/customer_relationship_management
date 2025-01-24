/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../css/table.css";

const Table = ({ data, loading, error }) => {
  return (
    <div className="table">
      <section className="table_header">
        <h1>Customers </h1>
      </section>
      <section className="table_body">
        <table>
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
                  <div className="w-10 h-10 border-t-3 border-black border-solid rounded-full animate-spin mx-auto   spinner" />
                </td>
              </tr>
            ) : (
              data?.map((data) => {
                return (
                  <tr key={data.name}>
                    <td>{data.name}</td>
                    <td>{data.company}</td>
                    <td>{data.email}</td>
                    <td>{data.phone_no}</td>
                    <td>{data.role}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
      <p>next</p>
    </div>
  );
};

export default Table;
