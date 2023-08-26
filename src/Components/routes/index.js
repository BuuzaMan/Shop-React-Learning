import { createBrowserRouter } from "react-router-dom";
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
        element: <Catalog />,
        },
        {
        path: "catalog/bustier",
        element: <Bustier /> 
        }
      ]
    }
  ]);

  export default router;