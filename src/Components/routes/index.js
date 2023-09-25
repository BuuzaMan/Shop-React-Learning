import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Catalog from "./catalog";
import Bustier from "./Bustier";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
        path: "/catalog",
        element: <Outlet />,
        children: [
           {
            path: "",
            element: <Catalog />,
           },
           {
            path: "bustier",
            element: <Bustier />
           }
           
        ]}
      ]
    }
  ]);

  export default router;