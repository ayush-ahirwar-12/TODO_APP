import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import Home from '../Pages/Home'
import AuthLayout from '../Layout/AuthLayout'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/authlayout",
            element:<AuthLayout/>
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter