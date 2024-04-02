import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import Header from "../../components/dashboard/Header";
export default function Dashboard() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <div
      className=" h-screen p-5 flex gap-5 "
      style={{ backgroundcolor: " #DADADA" }}
    >
      <SideBar />
      <div className=" h-full w-full">
        <Header />
        <Outlet />
        {/* <SalesSummary />
      <StatusBlock />
      <StatusChart /> */}
      </div>
    </div>
  );
}
