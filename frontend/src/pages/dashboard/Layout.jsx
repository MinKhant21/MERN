import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from '../../components/dashboard/SideBar'
export default function DashBoardLayout() {
    //  useEffect(() => {
    //       const handleContextmenu = e => {
    //           e.preventDefault()
    //       }
    //       document.addEventListener('contextmenu', handleContextmenu)
    //       return function cleanup() {
    //           document.removeEventListener('contextmenu', handleContextmenu)
    //       }
    //   }, [ ])
        return (
          <div className=" h-screen p-5 flex gap-5">
                <SideBar/>
                <Outlet/>
          </div>
        );
}
