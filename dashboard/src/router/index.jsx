import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";


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
          
        ]
  const router = createBrowserRouter(routes);

  return   <RouterProvider router={router} />;
}
