import React from "react";
import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Mainlayout,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            }
        ]
    },
]);
