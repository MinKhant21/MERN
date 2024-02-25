import React from 'react'

export default function Login() {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className=' p-10 shadow-md border rounded-xl w-1/2 '>
          <h1 className=' text-center text-2xl font-bold border-b-4 pb-5'>Admin Dashboard Login</h1>
          <div className=' mt-10 mx-10 space-y-5'>
          <div className='flex flex-col space-y-5' >
            <label htmlFor="" className=' text-md font-bold'>Email </label>
            <input type="email" className='border p-2 ' placeholder='Enter Your Email' />
          </div>
          <div className='flex flex-col space-y-5 ' >
            <label htmlFor="" className=' text-md font-bold'>Password </label>
            <input type="password" className='border p-2 ' placeholder='Enter Your Password' />
          </div>
         <br />
            <button className=' p-4 w-full bg-gradient-to-r rounded-md text-md text-white font-bold from-cyan-500 to-blue-500' >
              Login
            </button>
          </div>
      </div>
    </div>
  )
}
