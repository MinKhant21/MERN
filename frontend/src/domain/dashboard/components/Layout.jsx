import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Layout() {
  const [show, setShow] = useState(false);

  return (
    <>
      <SideBar />

      <div class=" sm:ml-64 dark:bg-gray-800 border-l-2 border-l-gray-500">
        <div className=" py-8   shadow-md"></div>
        <div className="p-4 h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}
