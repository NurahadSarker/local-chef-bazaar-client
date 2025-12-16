import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import avatar from '../assets/user-avatar.png'
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logOutUser } = useAuth()

    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    const handleLogOut = () => {
        logOutUser()
            .then(result => {
                toast.success('Log out successfully')
                console.log(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

    const links = <>
        <li><NavLink className={({ isActive }) =>
            isActive
                ? "pb-3 font-semibold text-[#FF6700] bg-base-100 hover:bg-base-100 text-[16px]"
                : "pb-3 text-gray-500 hover:text-[#FF6700] hover:bg-base-100 text-[16px]"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive
                ? "pb-3 font-semibold text-[#FF6700] bg-base-100 hover:bg-base-100 text-[16px]"
                : "pb-3 text-gray-500 hover:text-[#FF6700] hover:bg-base-100 text-[16px]"} to={'/meals'}>Meals</NavLink></li>
        {
            user ? <li><NavLink className={({ isActive }) =>
                isActive
                    ? "pb-3 font-semibold text-[#FF6700] bg-base-100 hover:bg-base-100 text-[16px]"
                    : "pb-3 text-gray-500 hover:text-[#FF6700] hover:bg-base-100 text-[16px]"} to={'dashboard'}>Dashboard</NavLink></li> : ""
        }

    </>
    return (
        <div className='bg-base-100'>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <img className='w-40' src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="toggle text-base-content mr-2">
                        <input onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"} className="theme-controller mr-2" />

                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                    </label>

                    <div>
                        <img className='w-10 rounded-full mr-2' src={user?.photoURL || avatar} alt="Image" />
                    </div>

                    {
                        user ? <Link onClick={handleLogOut} to={'/auth/login'} className="button2">Log Out</Link> : <Link to={'/auth/login'} className="button2">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;