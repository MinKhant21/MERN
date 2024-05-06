import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFoundPage from "../components/NotFoundPage";


export default function Routes(){
  const {isAuthenticated} = useAuth();
  let routes = [
          {
            path: "/",
            element: isAuthenticated ? <Layout /> : <Login />,
            children:[
              {
                path: "",
                element:isAuthenticated ?  <Home />: <Login />,
              },
            ]
          },
          {
            path: "/login",
            element: !isAuthenticated ? <Login /> : <Layout />,
          },
          {
            path: "*",
            element: <NotFoundPage/>,
          }
          
        ]
  const router = createBrowserRouter(routes);

  return   <RouterProvider router={router} />;
}
