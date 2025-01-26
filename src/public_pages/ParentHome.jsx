/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import PublicRouter from "../routes/PublicRouter";

const ParentHome = () => {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <div>
        <PublicRouter />
      </div>
    </div>
  );
};

export default ParentHome;
