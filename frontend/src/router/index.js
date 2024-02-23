import React, { useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Login from "../domain/user/components/Login.jsx";
import Layout from "../domain/user/pages/Layout.jsx";
import Home from "../domain/user/pages/Home.jsx";
import AdminLogin from "../domain/dashboard/pages/Login.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Register from "../domain/user/components/Register.jsx";

export default function Routes() {
  let { authReady, user } = useContext(AuthContext);
  let isAuthenticated = Boolean(user);

  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element:isAuthenticated ? <Home /> : <Navigate to={"/login"}/>,
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
      path: "/dashboard/login",
      element: <AdminLogin />,
    },
  ];
  const router = createBrowserRouter(routes);

  return  <RouterProvider router={router} />;
}
