import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Home/Meals";
import Dashboard from "../Pages/Home/Dashboard";
import MealsDetails from "../Pages/MealsDetails";
import AuthLayout from "../Layouts/AuthLayout";
import LoginPage from "../Auth/LoginPage";
import RegisterPage from "../Auth/RegisterPage";
import ForgotPassword from "../Components/ForgotPassword";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
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
                element: <PrivateRoutes>
                    <Dashboard></Dashboard>
                </PrivateRoutes>
            },
            {
                path: '/meals-details',
                element: <MealsDetails></MealsDetails>
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/auth/registration',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/auth/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            }
        ]
    }
]);