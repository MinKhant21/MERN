import {
     createBrowserRouter,
   } from "react-router-dom";
//User
import Login from '../domain/user/pages/Login'
import Layout from "../domain/user/pages/Layout";
import Home from "../domain/user/pages/Home";
//Dashboard
import AdminLogin from '../domain/dashboard/pages/Login'


const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout/>,
          children:[
               {
                    path:'',
                    element:<Home/>,
               },
               
          ]
     },
     {
          path:'/login',
          element:<Login/>,
     },
    
     {
          path:'/dashboard/login',
          element:<AdminLogin/>,
     }
])


export default router