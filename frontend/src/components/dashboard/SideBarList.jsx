import React from 'react'
import { GoHome } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";
import { MdProductionQuantityLimits ,MdOutlineAccountCircle} from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { RiMessage2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
export default function SideBarList() {
  return (
    <>
     <ul className="menu  w-56 rounded-box gap-3 ">
        <li className=" gap-10  bg-[#29DE98] rounded-lg ">
          <a>
          
            <GoHome  className="h-6 w-6"/>
            <p className=" text-md text-white ml-4">DashBoard</p>
          </a>
        </li>
        <li className=" gap-10 rounded-lg ">
          <a>
          <SiSimpleanalytics className="h-5 w-5"/>
            <p className=" text-md ml-4">Sales Analytics</p>
          </a>
        </li>
        <li className=" gap-10 rounded-lg ">
          <a>
          <MdProductionQuantityLimits  className="h-6 w-6" />
            <p className=" text-md ml-4">Products</p>
          </a>
        </li>
        <li className=" gap-10 rounded-lg ">
          <a>
          <FcSalesPerformance  className="h-6 w-6" />
            <p className=" text-md ml-4">Orders</p>
          </a>
        </li>
        <li className=" gap-10 rounded-lg ">
          <a>
          <RiMessage2Line className="h-6 w-6"/>
            <p className=" text-md ml-4">Messages</p>
          </a>
        </li>
        <li className=" gap-10 rounded-lg ">
          <a>
          <MdOutlineAccountCircle className="h-6 w-6"/>
            <p className=" text-md ml-4">Customers</p>
          </a>
        </li>
        <li className=" gap-10 rounded-lg ">
          <a>
          <IoSettingsOutline className="h-6 w-6"/>
            <p className=" text-md ml-4">Settings</p>
          </a>
        </li>
        
      </ul>
    </>
  )
}
