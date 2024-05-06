import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFoundPage from "../components/NotFoundPage";


export default function Routes(){
  let routes = [
          {
            path: "/",
            element: <Layout />,
            children:[
              {
                path: "",
                element: <Home />,
              },
            ]
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "*",
            element: <NotFoundPage/>,
          }
          
        ]
  const router = createBrowserRouter(routes);

  return   <RouterProvider router={router} />;
}
