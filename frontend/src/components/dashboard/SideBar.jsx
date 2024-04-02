import React from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import SideBarList from "./SideBarList";
import { SlSocialDropbox } from "react-icons/sl";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
export default function SideBar() {
  return (
    <div className=" w-[250px]  bg-[#F5F5F5] h-full shadow-md rounded-3xl px-2">
      <div className=" flex gap-4 items-center py-10 mx-4 mb-8">
        <div className=" p-3 rounded-lg bg-[#29DE98]">
          <FaArrowUpRightDots style={{color:"white"}} />
        </div>
        <p>GrowthView</p>
      </div>
      <SideBarList />
      <div className=" p-7 bg-[#29DE98] mx-4 rounded-3xl mt-7">
        <div className=" flex justify-center items-center mb-2">
          <SlSocialDropbox className="h-8 w-8 " />
        </div>
        <p className=" text-[16px] min-w-max text-white">
          New Update available
        </p>
        <p className=" text-[16px] min-w-max text-white mx-1 text-center">
          click to update
        </p>
        <div className="flex justify-center items-center mt-3">
          <p className=" py-1 px-7 text-[17px]  text-center rounded-lg text-[#54E3AE] bg-white">
            Update
          </p>
        </div>
      </div>
      <ul className="menu  w-56 rounded-box mt-5">
        <li className=" gap-10 rounded-lg ">
          <a>
            <RiLogoutBoxRLine className="h-5 w-5" />
            <p className=" text-md ml-4">Log Out</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
