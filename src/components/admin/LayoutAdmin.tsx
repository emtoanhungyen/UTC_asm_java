import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
