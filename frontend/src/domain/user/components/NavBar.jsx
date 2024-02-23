import { React, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import BtnGroup from "./BtnGroup";

export default function NavBar() {
  let { user } = useContext(AuthContext);
  return (
    <>
      <div className="w-full shadow-md">
        <div className=" h-[80px] flex justify-between mx-10 items-center">
          <p>Home</p>
          <div className=" w-full flex justify-center">
            <label className="input w-1/2 input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex items-center space-x-5">
       
            <BtnGroup />
          </div>
        </div>
      </div>
    </>
  );
}
