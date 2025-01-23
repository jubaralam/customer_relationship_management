/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthDetailsContext } from "../contexts/UserAuthDetails";
import { administrationRoles } from "../data";

const AdminProtectedRoutes = ({ children }) => {
  const { isLoggedIn, userAuthDetails } = useContext(UserAuthDetailsContext);
  console.log(
    "is logged in from AdminprotecteRoutes",
    isLoggedIn,
    userAuthDetails.role
  );

  if (!userAuthDetails) {
    return <Navigate to="/login" />;
  }
  if (!administrationRoles.includes(userAuthDetails.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default AdminProtectedRoutes;
