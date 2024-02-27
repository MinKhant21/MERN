import React, { useState } from 'react'
import useSignIn from '../../../hooks/useSignIn'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
export default function Login() {
  let [email,SetEmail] = useState("")
  let [password,SetPassword] = useState("")
  let {messages,SignIn} = useSignIn();
  let navigate = useNavigate();

  let HandleSignIn = async()=>{
    let role = 'admin'
    let data = await SignIn({email,password},role)
    console.log(data)
    if(data.status == '200'){
      toast(messages);
      navigate('/dashboard')
    }else{
      toast(messages);
      navigate('/dashboard/login')
    }
  }
  return (
    <div className=' h-screen flex justify-center items-center'>
      <ToastContainer />
      <div className=' p-10 shadow-md border rounded-xl w-1/2 '>
          <h1 className=' text-center text-2xl font-bold border-b-4 pb-5'>Admin Dashboard Login</h1>
          <div className=' mt-10 mx-10 space-y-5'>
          <div className='flex flex-col space-y-5' >
            <label htmlFor="" className=' text-md font-bold'>Email </label>
            <input type="email" onChange={(e)=>SetEmail(e.target.value)} className='border p-2 ' placeholder='Enter Your Email' />
          </div>
          <div className='flex flex-col space-y-5 ' >
            <label htmlFor="" className=' text-md font-bold'>Password </label>
            <input type="password" onChange={(e)=>SetPassword(e.target.value)} className='border p-2 ' placeholder='Enter Your Password' />
          </div>
         <br />
            <button onClick={HandleSignIn} className=' p-4 w-full bg-gradient-to-r rounded-md text-md text-white font-bold from-cyan-500 to-blue-500' >
              Login
            </button>
          </div>
      </div>
    </div>
  )
}
