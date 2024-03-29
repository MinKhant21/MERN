import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../domain/user/components/NavBar";
export default function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet />
    </>
  );
}
