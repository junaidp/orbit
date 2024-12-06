import React from "react";
import { useSelector } from "react-redux";
import TopBar from "../top-bar/TopBar";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/Sidebar";

const Layout = () => {
  let { showSidebar } = useSelector((state) => state.common);
  return (
    <React.Fragment>
      <TopBar />
      <div className="flex">
        <SideBar />
        <div
          className="row"
          id={showSidebar ? "SideComponents" : "SideComponentsFullWidth"}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
