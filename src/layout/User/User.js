import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const User = () => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default User;
