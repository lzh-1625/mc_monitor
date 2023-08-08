
import Login from "../page/login/index";
import Home from "../page/home/index";
import Router from "./index";
import * as React from "react";
import { useRoutes } from 'react-router-dom'
export default function App() {
    const element = useRoutes(
        [
            {
                path: '/',
                element: <Router></Router>,
                children: [
                    {
                        path: '/',
                        element: <Home />,
                    },
                ],
            },
            {
                path: 'Login',
                element: <Login />,
            }
        ]
    )
    return element
}