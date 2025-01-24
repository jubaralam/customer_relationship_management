/* eslint-disable react/prop-types */

// import { useContext } from "react";
// import { UserAuthDetailsContext } from "../contexts/UserAuthDetails";
import { Navigate } from "react-router-dom";
import { administrationRoles } from "../data";

const AdminProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem("user");

  
  console.log("is logged in from AdminprotecteRoutes", user);

  if (!user) {
    return <Navigate to="/login" />;
  }
  if (!administrationRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default AdminProtectedRoutes;
