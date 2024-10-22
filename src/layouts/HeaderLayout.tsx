import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Sidebar from "../components/navigation/SideBar";

const HeaderLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="w-full h-16 bg-white  ">
        <Header />
      </div>

      <div className="flex flex-1">
        <div className="h-full bg-white ">
          <Sidebar />
        </div>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HeaderLayout;
