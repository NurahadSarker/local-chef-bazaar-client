import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const RegisterPage = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-15'>
            <div className="flex items-center justify-center px-4 py-10">
                <div className="max-w-2xl w-full bg-base-100 shadow-xl rounded-md">

                    {/* LEFT SIDE - SIGNUP FORM */}
                    <div className="p-6 md:p-10">
                        <h2 className="text-[22px] font-bold text-center mb-2">Create Your Chef Bazaar Account</h2>
                        <p className="text-gray-500 text-[14px] text-center mb-6">
                            Order fresh homemade meals or become a chef and sell your dishes easily.
                        </p>

                        {/* Google */}
                        <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 transition btn">
                            <FcGoogle size={20} /> Sign up with Google
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-2 my-3">
                            <div className="bg-gray-300 w-full"></div>
                            <span className="text-gray-400">OR</span>
                            <div className="bg-gray-300 w-full"></div>
                        </div>

                        <div className='flex items-center justify-between gap-2'>
                            {/* Email */}
                            <div className='flex-1'>
                                <label className="text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-primary"
                                />
                            </div>

                            {/* Name */}
                            <div className='flex-1'>
                                <label className="text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-primary"
                                />
                            </div>
                        </div>

                        {/* Photo */}
                        <label className="text-sm font-medium">Photo URL</label>
                        <input
                            name='photo' type="text"
                            placeholder="Enter your photo url"
                            className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-primary"
                        />

                        {/* Address */}
                        <label className="text-sm font-medium">Address</label>
                        <input
                            name='photo' type="text"
                            placeholder="Enter your address"
                            className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-primary"
                        />

                        <div className='flex items-center justify-between gap-2'>
                            {/* Password */}
                            <div className='flex-1'>
                                <label className="text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    placeholder="At least 8 characters"
                                    className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-primary"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className='flex-1'>
                                <label className="text-sm font-medium">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="At least 8 characters"
                                    className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-primary"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-[#FF6700] text-white py-3 rounded-lg font-medium hover:bg-[#e76006] transition hover:cursor-pointer flex items-center justify-center">
                            Create Account →
                        </button>

                        <p className="text-sm text-gray-500 mt-4">
                            Already have an account?{" "}
                            <Link to={'/auth/login'} className="text-[#FF6700] cursor-pointer">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;