import React, { useEffect } from 'react';
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList, FaShoppingCart } from "react-icons/fa";
import { MdAddBox, MdFavorite, MdInsights, MdManageAccounts, MdRestaurantMenu, MdReviews } from "react-icons/md";
import Logo from '../assets/logo.png'
import { Link, Outlet } from 'react-router';

const DashboardLayout = () => {

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.querySelector("html").setAttribute("data-theme", savedTheme);
    }, []);

    const role = "user"
    // const role = "chef"
    // const role = "admin"

    return (
        <div className='bg-base-300'>
            <div className="drawer lg:drawer-open poppins">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300 shadow-md">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-5.5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        {/* <img className='w-30' src={Logo} alt="Logo" /> */}
                        <h1 className='text-[18px] font-bold'>Local Chef Bazaar</h1>
                    </nav>
                    {/* Page content here */}
                    {/* <div className="p-4">Page Content</div> */}
                    <div className=''>
                        <Outlet></Outlet>
                    </div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 shadow-lg">

                        {/* ------------------user sidebar-------------- */}
                        {
                            role === "user" && (
                                <ul className="menu w-full grow mt-2">
                                    {/* List item */}
                                    <li>
                                        <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                            <FiHome size={20} />
                                            <span className="is-drawer-close:hidden">Homepage</span>
                                        </Link>
                                    </li>

                                    {/* List item */}
                                    <li>
                                        <Link to={'my-profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
                                            <CgProfile size={20} />
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'my-orders'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Orders">
                                            <FaShoppingCart size={20} />
                                            <span className="is-drawer-close:hidden">My Orders</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'my-reviews'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Reviews">
                                            <MdReviews size={20} />
                                            <span className="is-drawer-close:hidden">My Reviews</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'favorite-meals'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Favorite Meals">
                                            <MdFavorite size={20} />
                                            <span className="is-drawer-close:hidden">Favorite Meals</span>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }

                        {/* ------------------chef sidebar-------------- */}
                        {
                            role === "chef" && (
                                <ul className="menu w-full grow mt-2">
                                    {/* List item */}
                                    <li>
                                        <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                            <FiHome size={20} />
                                            <span className="is-drawer-close:hidden">Homepage</span>
                                        </Link>
                                    </li>

                                    {/* List item */}
                                    <li>
                                        <Link to={'my-profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
                                            <CgProfile size={20} />
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'create-meals'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Create Meals">
                                            <MdAddBox size={20} />
                                            <span className="is-drawer-close:hidden">Create Meals</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'my-meals'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Meals">
                                            <MdRestaurantMenu size={20} />
                                            <span className="is-drawer-close:hidden">My Meals</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'order-request'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Order Request">
                                            <FaClipboardList size={20} />
                                            <span className="is-drawer-close:hidden">Order Request</span>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }

                        {/* ------------------user admin-------------- */}
                        {
                            role === "admin" && (
                                <ul className="menu w-full grow mt-2">
                                    {/* List item */}
                                    <li>
                                        <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                            <FiHome size={20} />
                                            <span className="is-drawer-close:hidden">Homepage</span>
                                        </Link>
                                    </li>

                                    {/* List item */}
                                    <li>
                                        <Link to={'my-profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
                                            <CgProfile size={20} />
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'manage-users'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
                                            <MdManageAccounts size={20} />
                                            <span className="is-drawer-close:hidden">Manage Users</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'manage-request'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Requests">
                                            <MdReviews size={20} />
                                            <span className="is-drawer-close:hidden">Manage Requests</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'platform-statistics'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Platform Statistics">
                                            <MdInsights size={20} />
                                            <span className="is-drawer-close:hidden">Platform Statistics</span>
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;