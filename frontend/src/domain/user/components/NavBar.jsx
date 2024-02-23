import { React, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import BtnGroup from "./BtnGroup";

export default function NavBar() {
  let { user } = useContext(AuthContext);
  return (
    <>
      <div className="w-full shadow-md">
        <div className=" h-[60px] flex justify-between mx-10 items-center">
          <p>Home</p>
          <div className=" w-full flex justify-center">
            <input
              type="text"
              placeholder="search"
              className="border w-1/2 p-1 rounded-xl"
            />
          </div>
          <div className="flex items-center space-x-5">
            <BtnGroup/>
          </div>
        </div>
      </div>
    </>
  );
}
