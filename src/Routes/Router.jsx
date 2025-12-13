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
import Details from "../Pages/Details";
import Ingredients from "../Pages/Ingredients";
import ReviewSection from "../Pages/ReviewSection";
import OrderPage from "../Pages/OrderPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyOrders from "../Pages/PageForDashboard/MyOrders";
import MyProfile from "../Pages/PageForDashboard/MyProfile";
import MyReviews from "../Pages/PageForDashboard/MyReviews";
import FavoriteMeals from "../Pages/PageForDashboard/FavoriteMeals";

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
            // {
            //     path: '/dashboard',
            //     element: <PrivateRoutes>
            //         <Dashboard></Dashboard>
            //     </PrivateRoutes>
            // },
            {
                path: '/meals-details',
                element: <PrivateRoutes>
                    <MealsDetails></MealsDetails>
                </PrivateRoutes>,
                children: [
                    {
                        path: 'details',
                        element: <Details></Details>
                    },
                    {
                        path: 'ingredients',
                        element: <Ingredients></Ingredients>
                    },
                    {
                        path: 'review-section',
                        element: <ReviewSection></ReviewSection>
                    }
                ]
            },
            {
                path: '/order-page',
                element: <PrivateRoutes>
                    <OrderPage></OrderPage>
                </PrivateRoutes>
            }
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
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
        children:[
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: 'my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: 'favorite-meals',
                element: <FavoriteMeals></FavoriteMeals>
            }
        ]
    }
]);