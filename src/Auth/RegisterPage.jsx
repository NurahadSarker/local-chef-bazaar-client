import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { registerUser, signInWithGoogle, updateUser } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const handleRegister = (data) => {
        registerUser(data.email, data.password)
            .then(async () => {

                await updateUser({
                    displayName: data.name,
                    photoURL: data.photo
                });

                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photo,
                    address: data.address,
                    createdAt: new Date()
                };

                const res = await axiosSecure.post("/users", userInfo);

                if (res.data.insertedId || res.data.message === "User already exists") {
                    toast.success("Register successful");
                    navigate('/');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(async (result) => {
                const user = result.user;

                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    createdAt: new Date()
                };

                const res = await axiosSecure.post("/users", userInfo);

                if (res.data.insertedId || res.data.message === "User already exists") {
                    toast.success("Login successful");
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='max-w-[1200px] mx-auto p-15'>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="flex items-center justify-center px-4 py-10">
                    <div className="max-w-2xl w-full bg-base-100 shadow-xl rounded-md">
                        <div className="p-6 md:p-10">
                            <h2 className="text-[22px] font-bold text-center mb-2">Create Your Chef Bazaar Account</h2>
                            <p className="text-gray-500 text-[14px] text-center mb-6">
                                Order fresh homemade meals or become a chef and sell your dishes easily.
                            </p>

                            {/* Google */}
                            <button onClick={handleGoogleLogin}
                                type='button'
                                className="w-full flex items-center justify-center gap-2 border rounded-md py-2 transition btn">
                                <FcGoogle size={20} /> Register with Google
                            </button>

                            {/* Divider */}
                            <div className="flex items-center gap-2 my-3">
                                <div className="bg-gray-300 w-full"></div>
                                <span className="text-gray-400">OR</span>
                                <div className="bg-gray-300 w-full"></div>
                            </div>

                            <div className='flex items-start justify-between gap-2'>
                                {/* Email */}
                                <div className='flex-1'>
                                    <label className="text-sm font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        {...register('email', { required: true })}
                                        placeholder="Enter your email"
                                        className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-[#089916]"
                                    />
                                    {
                                        errors.email?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3'>Please enter your email</p>
                                    }
                                </div>


                                {/* Name */}
                                <div className='flex-1'>
                                    <label className="text-sm font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        {...register('name', { required: true })}
                                        placeholder="Enter your full name"
                                        className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-[#089916]"
                                    />
                                    {
                                        errors.name?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3'>Please write your name</p>
                                    }
                                </div>
                            </div>

                            {/* Photo */}
                            <label className="text-sm font-medium">Photo URL</label>
                            <input
                                type="text"
                                {...register('photo', { required: true })}
                                placeholder="Enter your photo url"
                                className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-[#089916]"
                            />
                            {/* <div>
                                <label className="text-sm font-medium">
                                    Upload Your Image
                                </label>

                                <input
                                    type="file"
                                    {...register('photo', { required: true })}
                                    placeholder="Enter your photo url"
                                    className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-[#089916]"
                                />
                            </div> */}

                            {
                                errors.photo?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3'>Give your photo url</p>
                            }

                            {/* Address */}
                            <label className="text-sm font-medium">Address</label>
                            <input
                                type="text"
                                {...register('address', { required: true })}
                                placeholder="Enter your address"
                                className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-[#089916]"
                            />
                            {
                                errors.address?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3'>Please write your address</p>
                            }

                            <div className='flex items-start justify-between gap-2'>
                                {/* Password */}
                                <div className='flex-1'>
                                    <label className="text-sm font-medium">Password</label>
                                    <input
                                        type="password"
                                        {...register('password', {
                                            required: true,
                                            minLength: 6,
                                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                                        })}
                                        placeholder="At least 6 characters"
                                        className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-[#089916]"
                                    />
                                    {
                                        errors.password?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3 mb-3'>Give a strong password</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <p className='text-red-500 text-[12px] -mt-3 mb-3'>Password must be 6 characters or longer</p>
                                    }
                                    {
                                        errors.password?.type === 'pattern' && <p className='text-red-500 text-[12px] -mt-3 mb-3'>At least one uppercase <br /> At least one lowercase <br /> At least one number <br /> At least one special characters</p>
                                    }
                                </div>

                                {/* Confirm Password */}
                                <div className='flex-1'>
                                    <label className="text-sm font-medium">Confirm Password</label>
                                    <input
                                        type="password"
                                        {...register('confirmPassword', { required: true, minLength: 6 })}
                                        placeholder="At least 6 characters"
                                        className="w-full text-[14px] mt-1 mb-4 border rounded-lg px-4 py-2 focus:outline-[#089916]"
                                    />
                                    {
                                        errors.confirmPassword?.type === 'required' && <p className='text-red-500 text-[12px] -mt-3 mb-3'>Give your confirm password</p>
                                    }
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-[#FF6700] text-white py-3 rounded-lg font-medium hover:bg-[#e76006] transition hover:cursor-pointer flex items-center justify-center">
                                Register Your Account →
                            </button>

                            <p className="text-sm text-gray-500 mt-4">
                                Already have an account?{" "}
                                <Link to={'/auth/login'} className="text-[#FF6700] cursor-pointer">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;