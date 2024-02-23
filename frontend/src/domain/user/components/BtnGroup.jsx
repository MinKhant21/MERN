import React from "react";

import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
export default function BtnGroup() {
  return (
    <>
      <Link
        to={"/login"}
        className=" bg-purple-500 text-white px-4 py-2 rounded-2xl font-semibold font-sans"
      >
        Login
      </Link>
      <Link
        to={"/register"}
        className=" bg-red-500 text-white px-4 py-2 rounded-2xl font-semibold font-sans"
      >
        Register
      </Link>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" p-1 rounded-full shadow-md">
          <CiSettings size={35} />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <a>My Account</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}
