import React, { use, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const { signUser, setUser, signInWithGoogle } = use(AuthContext);
    const [error, setError] = useState("");
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError("");

        signUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Login Successfully')
                e.target.reset();
                navigate(location.state || "/");

            })
            .catch((error) => {
                setError(error.message)
            })
    };

    const handleShowPasswordBtn = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('Login with google Successfully')
                navigate(location.state || '/')
            })
            .catch((error) => {
                toast.error(error)
            })
    };

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        navigate('/forgot-password', { state: { email: email } })
    };
    return (
        <div className='max-w-[1200px] mx-auto p-15'>
            <div className="flex items-center justify-center px-4 py-10">
                <div className="max-w-2xl w-full bg-base-100 shadow-xl rounded-md">

                    {/* LEFT SIDE - SIGNUP FORM */}
                    <div className="p-6 md:p-10">
                        <h2 className="text-[22px] font-bold text-center mb-2">Sign In Your Chef Bazaar Account</h2>
                        <p className="text-gray-500 text-[14px] text-center mb-6">
                            Order fresh homemade meals or become a chef and sell your dishes easily.
                        </p>

                        {/* Google */}
                        <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 transition btn">
                            <FcGoogle size={20} /> Sign In with Google
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-2 my-3">
                            <div className="bg-gray-300 w-full"></div>
                            <span className="text-gray-400">OR</span>
                            <div className="bg-gray-300 w-full"></div>
                        </div>

                        <label className="text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-primary"
                        />

                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="At least 8 characters"
                            className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-primary"
                        />

                        {/* Submit Button */}
                        <button className="w-full bg-[#FF6700] text-white py-3 rounded-lg font-medium hover:bg-[#e76006] transition hover:cursor-pointer flex items-center justify-center">
                            Create Account →
                        </button>

                        <p className="text-sm text-gray-500 mt-4">
                            Don't Have An Account{" "}
                            <Link to={'/auth/registration'} className="text-[#FF6700] cursor-pointer">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
