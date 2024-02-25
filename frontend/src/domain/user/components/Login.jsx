import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { SignIn, messages, loading } = useSignIn();
  let navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    let result = await SignIn({ email, password });
  
    if (result) {
      // Navigate to the home page if sign-in is successful
      navigate('/');
    } else {
      // Navigate to the login page if sign-in fails
      navigate('/login');
      
    }
  
    // Clear the form fields
    setEmail("");
    setPassword("");
  };
  return (
    <div class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">Login </h1>
        <form class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          <div>
            <button onClick={HandleSubmit} class="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
