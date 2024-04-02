import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineAudio } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Myanamr from '../../assets/myanamr.jpeg'
import My from '../../assets/passportPhoto.jpeg'
import { FaAngleDown } from "react-icons/fa";
export default function Header() {
  return (
    <>
     <div className=" w-full bg-white py-5 rounded-3xl px-5 flex justify-around gap-5 items-center">
        <div>
          <p>Hello Kaung Min Khant</p>
          <p className=" text-[12px]">Welcome Back!</p>
        </div>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="h-5 w-5 text-gray-500" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <AiOutlineAudio className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="text-sm border border-[#4DE3AD] rounded-2xl py-4 pl-10 pr-10 w-[380px]"
            placeholder="Search here..."
          />
        </div>
        <div>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <p className=" text-center text-[10px] mt-1">Light Mode</p>
        </div>
        <div className=" bg-[#EBEEFC]  p-3 rounded-lg">
          <BiMessageDots className=" h-6 w-6 " style={{ color: "#3DA6F8" }} />
        </div>
        <div className="relative">
          <div className="bg-[#EAF5EE] p-3 rounded-lg relative">
            <IoIosNotificationsOutline
              className="h-6 w-6"
              style={{ color: "#2DE09E" }}
            />
            <span className="absolute top-3 right-3 bg-red-500 text-white rounded-full px-1 py-1 text-xs">
            </span>
          </div>
        </div>
        <div className=" flex items-center gap-3">
         <img src={Myanamr} alt="" className=" w-10 h-10 rounded-full" />
         <p>Eng(MM)</p>
         <FaAngleDown />
        </div>
        <div className=" flex items-center gap-3">
         <img src={My} alt="" className=" w-10 h-10 rounded-full" />
         <FaAngleDown />
        </div>
      </div>
    </>
  )
}
