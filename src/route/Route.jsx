import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LayoutHomePage } from "../layout/LayoutHomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHomePage/>,
    children:[
        {
            path:"/",
            element: <HomePage/>
        }
    ]
  },
]);