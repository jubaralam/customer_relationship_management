/* eslint-disable react/prop-types */
// import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import CustomerDelete from "../pages/CustomerDelete";
import CustomerDetails from "../pages/CustomerDetails";
import CustomerList from "../pages/CustomerList";
import CustomerRegistration from "../pages/CustomerRegistration";
import UserUpdate from "../pages/UserUpdate";
const RoutesProtectorForDashboardUser = () => {
  const token = localStorage.getItem("token");
  console.log("token from protected route user", token);
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/dashboard/delete-customer" element={<CustomerDelete />} />
      <Route path="/dashboard/customer-details" element={<CustomerDetails />} />
      <Route path="/dashboard/customer-list" element={<CustomerList />} />
      <Route path="/dashboard/register" element={<CustomerRegistration />} />
      <Route path="/dashboard/update" element={<UserUpdate />} />
    </Routes>
  );
};

export default RoutesProtectorForDashboardUser;
