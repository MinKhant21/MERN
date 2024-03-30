import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import useSignIn from "../hooks/useSignIn";
// import {redirect} from 'react-router-dom'
export default function Login() {
  let {SignIn} = useSignIn();
  let {register,handleSubmit} = useForm({
    defaultValues:{
      email:"",
      password :""
    }
  });
  const onSubmit = async (data) => {
    let result = await SignIn(data)
//     return redirect('/gggg')
  }
  return (
    <div class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">Login </h1>
        <form onSubmit={handleSubmit(onSubmit)} class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              class="w-full input input-bordered"
            />
          </div>
          <a
            href="#"
            class="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <input type="submit" className="btn btn-block" value="Login" />
            {/* <input type="submit"  >
              Login
            </input> */}
        </form>
      </div>
    </div>
  );
}
