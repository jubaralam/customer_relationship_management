/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthDetailsContext } from "../contexts/UserAuthDetails";

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn } = useContext(UserAuthDetailsContext);
  console.log("is logged in from protecteRoutes", isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
