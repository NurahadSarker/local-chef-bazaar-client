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
import DashHomePage from "../Pages/PageForDashboard/DashHomePage";
import CreateMeals from "../Pages/ChefPage/CreateMeals";
import MyMeals from "../Pages/ChefPage/MyMeals";
import OrderReq from "../Pages/ChefPage/OrderReq";
import ManageUsers from "../Pages/AdimnPage/ManageUsers";
import ManageReq from "../Pages/AdimnPage/ManageReq";
import PlatformStatistics from "../Pages/AdimnPage/PlatformStatistics";
import Payment from "../Pages/Payment";

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
                path: '/meals-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/meals/${params.id}`),
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
        children: [
            {
                index: true,
                element: <DashHomePage></DashHomePage>
            },
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: 'favorite-meals',
                element: <FavoriteMeals></FavoriteMeals>
            },
            {
                path: 'create-meals',
                element: <CreateMeals></CreateMeals>
            },
            {
                path: 'my-meals',
                element: <MyMeals></MyMeals>
            },
            {
                path: 'order-request',
                element: <OrderReq></OrderReq>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manage-request',
                element: <ManageReq></ManageReq>
            },
            {
                path: 'platform-statistics',
                element: <PlatformStatistics></PlatformStatistics>
            }
        ]
    }
]);