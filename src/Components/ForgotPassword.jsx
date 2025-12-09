import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const { forgotPassword } = useAuth();
    const location = useLocation();
    const transferEmail = location.state?.email || '';
    const [email, setEmail] = useState(transferEmail);
    const [message, setMessage] = useState("");

    const handleForgotPassword = (e) => {
        e.preventDefault();

        setMessage("")

        if (!email) {
            toast.success("Please enter your email address");
            return
        }

        forgotPassword(email)
            .then(() => {
                alert("Please check your email");
                e.target.reset();
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setMessage("No user found with this email");
                }
                else if (error.code === "auth/invalid-email") {
                    setMessage("Please provide valid email")

                }
                else {
                    alert(error.message);
                }
            })
    };
    return (
        <form
            onSubmit={handleForgotPassword}
            className="min-h-screen flex items-center justify-center px-6"
        >
            <div className="bg-base-100 shadow-xl p-10 rounded-2xl border border-base-200">
                <div className="w-full max-w-[350px]">
                    <h2 className="text-[22px] font-bold mb-2">Forgot Password</h2>
                    <p className="text-gray-400 text-sm mb-6">
                        Enter your e-mail address and we will send you password reset instructions.
                    </p>

                    <fieldset>

                        <label className="label text-sm font-medium text-gray-500">Email Address</label>

                        <input
                            type="email"
                            name="email"
                            className="w-full text-[14px] mt-1 mb-4 border rounded-md px-4 py-2 focus:outline-[#089916]"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="w-full mt-4 bg-[#FF6700] hover:bg-[#e76006] hover:cursor-pointer text-white font-semibold py-2.5 rounded-lg shadow-md transition"
                        >
                            Reset Password
                        </button>

                        <p className="text-red-500 text-sm mt-2">{message}</p>

                        <Link to={'/auth/login'} className="text-center text-sm text-gray-500 hover:text-[#FF6700] cursor-pointer">
                            ← Back to Login
                        </Link>
                    </fieldset>
                </div>
            </div>
        </form>

    );
};
export default ForgotPassword;