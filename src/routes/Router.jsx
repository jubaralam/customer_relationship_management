/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Home from "../public_pages/Home";
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
import Customers from "../public_pages/Customers";
import Products from "../public_pages/Products";
import Support from "../public_pages/Support";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import ParentHome from "../public_pages/ParentHome";
import HomeDashboard from "../pages/HomeDashboard";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<ParentHome />} />
      {/* <Route
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
      </Route> */}
      ;
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      >
        <Route path="home" element={<HomeDashboard />} />
        <Route path="delete-customer" element={<CustomerDelete />} />
        <Route path="customer/:id" element={<CustomerDetails />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="register" element={<CustomerRegistration />} />
        <Route path="update" element={<UserUpdate />} />
        <Route path="user-details/:id" element={<UserDetails />} />
        <Route path="user/:role" element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="user-register" element={<UserRegistration />} />
      </Route>
    </Routes>
  );
};

export default Router;
