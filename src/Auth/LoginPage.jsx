import React, { useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
// import toast from 'react-hot-toast';
// import { AuthContext } from '../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const LoginPage = () => {
    // const { signUser, setUser, signInWithGoogle } = use(AuthContext);
    // const [error, setError] = useState("");
    // const emailRef = useRef();
    // const location = useLocation();
    // const navigate = useNavigate();

    // const handleSignIn = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     setError("");

    //     signUser(email, password)
    //         .then((result) => {
    //             const user = result.user;
    //             setUser(user);
    //             toast.success('Login Successfully')
    //             e.target.reset();
    //             navigate(location.state || "/");

    //         })
    //         .catch((error) => {
    //             setError(error.message)
    //         })
    // };



    // const handleGoogleSignin = () => {
    //     signInWithGoogle()
    //         .then((result) => {
    //             const user = result.user;
    //             setUser(user);
    //             toast.success('Login with google Successfully')
    //             navigate(location.state || '/')
    //         })
    //         .catch((error) => {
    //             toast.error(error)
    //         })
    // };

    // const handleForgotPassword = () => {
    //     const email = emailRef.current.value;
    //     navigate('/forgot-password', { state: { email: email } })
    // };

    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signInUser, signInWithGoogle } = useAuth()
    const emailRef = useRef("");
    const navigate = useNavigate();

    const handleShowPasswordBtn = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleLogin = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(result => {
                toast.success('Login successfully')
                navigate(location?.state || '/')
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                toast.success('Login with google successfully')
                navigate(location?.state || '/')
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleForgotPassword = () => {
        const email = emailRef.current;
        navigate('/auth/forgot-password', { state: { email: email } })
    };

    return (
        <div className='max-w-[1200px] mx-auto p-15'>
            <div className="flex items-center justify-center px-4 py-10">
                <div className="max-w-2xl w-full bg-base-100 shadow-xl rounded-md p-6 md:p-10">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="">
                            <h2 className="text-[22px] font-bold text-center mb-2">Sign In Your Chef Bazaar Account</h2>
                            <p className="text-gray-500 text-[14px] text-center mb-6">
                                Order fresh homemade meals or become a chef and sell your dishes easily.
                            </p>

                            {/* Google */}
                            <button onClick={handleGoogleLogin}
                                type='button' className="w-full flex items-center justify-center gap-2 border rounded-md py-2 transition btn">
                                <FcGoogle size={20} /> Login with Google
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
                                {
                                ...register('email', { required: true })
                                }
                                onChange={(e) => (emailRef.current = e.target.value)}
                                placeholder="Enter your email"
                                className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-[#089916]"
                            />
                            {
                                errors.email?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3'>Please enter your email</p>
                            }

                            <label className="text-sm font-medium">Password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {
                                    ...register('password', { required: true, minLength: 6 })
                                    }
                                    placeholder="At least 6 characters"
                                    className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-[#089916]"
                                />
                                <button onClick={handleShowPasswordBtn} className='top-[15px] right-4 text-[18px] absolute hover:cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                            {
                                errors.password?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3'>Please write your password</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500 text-[12px] -mt-3 mb-3'>Password must be 6 characters or longer</p>
                            }
                            <div><a onClick={handleForgotPassword} className="link link-hover text-sm">Forgot password?</a></div>

                            {/* Submit Button */}
                            <button className="w-full bg-[#FF6700] text-white py-3 rounded-lg font-medium hover:bg-[#e76006] transition hover:cursor-pointer flex items-center justify-center mt-3">
                                Login Your Account →
                            </button>
                        </div>
                    </form>
                    <p className="text-sm text-gray-500 mt-4">
                        Don't have an Account{" "}
                        <Link to={'/auth/registration'} className="text-[#FF6700] cursor-pointer">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
