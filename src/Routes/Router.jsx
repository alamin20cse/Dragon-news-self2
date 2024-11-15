import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import AuthLayout from "../Component/LayoutComponent/AuthLayout";
import Login from "../Component/LayoutComponent/Login";
import Regiester from "./Regiester";


const Router = createBrowserRouter([


    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[

            {
                path: '',
                element: <Navigate to={'category/01'}></Navigate>


            },
            {
                path:'/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                
            }


        ]
    },
    {
        path:'/news',
        element: <h1>news layout</h1>
    },
    {
        path: 'auth',
        element:<AuthLayout></AuthLayout>,
        children: [

            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/regiester',
                element:<Regiester></Regiester>
            }
        ]
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])
   

export default Router;