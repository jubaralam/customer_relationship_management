/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdministrationDashboard from "../pages/AdministrationDashboard";
import CustomerDelete from "../pages/CustomerDelete";
import CustomerDetails from "../pages/CustomerDetails";
import CustomerList from "../pages/CustomerList";
import CustomerRegistration from "../pages/CustomerRegistration";
import Dashboard from "../pages/Dashboard";
import UserDelete from "../pages/UserDelete";
import UserLogin from "../pages/UserLogin";
import UserRegistration from "../pages/UserRegistration";
import UserUpdate from "../pages/UserUpdate";
import ProtectedRoutes from "./ProtectedRoutes";
import { useState } from "react";
import RoutesProtectorForDashboardUser from "./RoutesProtectorForDashboardUser";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route
        path="/administration/*"
        element={
          <AdminProtectedRoutes>
            <AdministrationDashboard />
          </AdminProtectedRoutes>
        }
      >
        <Route path="delete-customer" element={<CustomerDelete />} />
        <Route path="customer-details" element={<CustomerDetails />} />
        <Route path="customer-list" element={<CustomerList />} />
        <Route path="register" element={<CustomerRegistration />} />
        <Route path="update" element={<UserUpdate />} />
      </Route>
      ;
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      >
        <Route path="delete-customer" element={<CustomerDelete />} />
        <Route path="customer-details" element={<CustomerDetails />} />
        <Route path="customer-list" element={<CustomerList />} />
        <Route path="register" element={<CustomerRegistration />} />
        <Route path="update" element={<UserUpdate />} />
      </Route>
    </Routes>
  );
};

export default Router;
