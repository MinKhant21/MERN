import React, { useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DLayout from '../domain/dashboard/components/Layout.jsx'
import DashBoard from '../domain/dashboard/pages/Dashboard.jsx'
import Login from "../domain/user/components/Login.jsx";
import Layout from "../domain/user/pages/Layout.jsx";
import Home from "../domain/user/pages/Home.jsx";
import AdminLogin from "../domain/dashboard/pages/Login.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Register from "../domain/user/components/Register.jsx";
import Category from "../domain/dashboard/pages/Category.jsx";

export default function Routes() {
  let { authReady, user ,role} = useContext(AuthContext);
  
  let isAuthenticated = Boolean(user);
  console.log(isAuthenticated)
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: isAuthenticated ? <Home /> : <Navigate to={"/login"}/>,
        },
        {
          path: "/login",
          element:!isAuthenticated ?  <Login />  : <Navigate to={"/"}/>,
        },
        {
          path: "/register",
          element:!isAuthenticated ?  <Register />  : <Navigate to={"/"}/>,
        },
      ],
    },

    {
      path:"/dashboard",
      element:<DLayout/>,
      children:[
          {
            path:"",
            element:<DashBoard/>
          },
          {
            path:"category",
            element:<Category/>
          },
      ]
    },
    {
      path: "/dashboard/login",
      element: <AdminLogin />,
    },
  ];
  const router = createBrowserRouter(routes);

  return   <RouterProvider router={router} />;
}
