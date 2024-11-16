import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import AuthLayout from "../Component/LayoutComponent/AuthLayout";
import Login from "../Component/LayoutComponent/Login";
import Regiester from "./Regiester";
import NewsDetails from "../Pages/NewsDetails";


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
        path: '/news/:id',
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    }
    ,
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