import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet>
          <Layout/>
      </Outlet>
    </div>
  );
}
