import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Img from "../assets/chickenbiriani.jpg";
import { Link, NavLink, Outlet } from "react-router";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const MealDetails = () => {
    const [favoriteBtn, setFavoriteBtn] = useState(false)

    // const handleFavorite = () => {
    //     setFavoriteBtn(!favoriteBtn)
    // }
    return (
        <div className="max-w-5xl mx-auto my-10 p-5">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <img
                        src={Img}
                        alt="Food"
                        className="rounded-3xl shadow-md w-full"
                    />
                </div>
                <div className="space-y-2 border-l-3 border-gray-400 pl-4">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold">Chicken Biriyani</h1>
                        <button onClick={()=>setFavoriteBtn(!favoriteBtn) } className="flex items-center justify-center p-3 hover:cursor-pointer">
                            {
                                favoriteBtn ? <MdFavorite className="text-red-500" size={30} /> : <MdFavoriteBorder size={30} />
                            }
                        </button>
                    </div>
                    <p className="text-gray-500">
                        Cooked by <span className="font-semibold">Nur-Ahad</span> (ID: Ch-203)
                    </p>
                    <div>
                        <p className="text-sm text-gray-500">Chef Experience</p>
                        <span className="py-1 text-sm font-semibold">
                            4+ Years Experience
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <span className="text-sm ml-2 text-gray-500">(29 reviews)</span>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <p className="text-sm text-gray-500">Delivery Area</p>
                            <span className="py-1 text-sm font-semibold">
                                Mirpur, Dhanmondi, Gulshan
                            </span>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <p className="text-xl font-bold">Tk. 250</p>
                    </div>
                    <Link to={'/order-page'} className="btn w-full bg-[#FF6700] hover:bg-[#f06000] hover:cursor-pointer text-white rounded-2xl font-semibold mt-4">
                        Order Now
                    </Link>
                </div>
            </div>
            <div className="flex gap-8 mt-10 border-b border-gray-400">

                <NavLink
                    to="details"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-3 font-semibold text-black"
                            : "pb-3 text-gray-500 hover:text-black"
                    }
                >
                    Details
                </NavLink>

                <NavLink
                    to="ingredients"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-3 font-semibold text-black"
                            : "pb-3 text-gray-500 hover:text-black"
                    }
                >
                    Ingredients
                </NavLink>

                <NavLink
                    to="review-section"
                    className={({ isActive }) =>
                        isActive
                            ? "pb-3 font-semibold text-black"
                            : "pb-3 text-gray-500 hover:text-black"
                    }
                >
                    Customer Reviews
                </NavLink>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MealDetails;
