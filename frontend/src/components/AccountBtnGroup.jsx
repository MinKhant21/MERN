import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import useCheckUser from '../hooks/useCheckUser';
import { AuthContext } from '../contexts/AuthContext';

export default function AccountBtnGroup() {
     const navigate = useNavigate();
     const {SignOut,isExit} = useCheckUser();
     let {user} = useContext(AuthContext)
     const HandleLogOut = async () => {
        await SignOut();
          navigate('/login')

        // if(isExit){
        //   navigate('/login')
        // }else{
        //   
        // }
     }

  return (
     <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={HandleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
  )
}
