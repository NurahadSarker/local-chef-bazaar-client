import React, { useEffect } from 'react';
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite, MdReviews } from "react-icons/md";
import Logo from '../assets/logo.png'
import { Link, Outlet } from 'react-router';

const DashboardLayout = () => {

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.querySelector("html").setAttribute("data-theme", savedTheme);
    }, []);
    return (
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
                <div className='bg-base-300 py-15 min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 shadow-lg">
                    {/* Sidebar content here */}
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
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;