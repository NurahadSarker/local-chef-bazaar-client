import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Home/Meals";
import Dashboard from "../Pages/Home/Dashboard";
import MealsDetails from "../Pages/MealsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/meals',
            element: <Meals></Meals>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path: '/meals-details',
            element: <MealsDetails></MealsDetails>
        }
    ]
  },
]);