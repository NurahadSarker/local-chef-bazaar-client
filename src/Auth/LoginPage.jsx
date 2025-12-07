import React, { use, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

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

    const handleShowPasswordBtn = (e) =>{
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

    const handleForgotPassword = () =>{
        const email = emailRef.current.value;
        navigate('/forgot-password', {state: {email: email}})
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <fieldset className="fieldset">
                        <h1 className='text-center text-[20px] font-bold mb-2 text-[#29B467]'>Login Your Account</h1>
                        <div className='border-b border-gray-400 mb-2'></div>
                        {/* email */}
                        <label className="label">Email</label>
                        <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" required />

                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input name='password' type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" required />
                            <button onClick={handleShowPasswordBtn} className='top-3 right-7 text-[18px] absolute hover:cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                        </div>
                        <div><a onClick={handleForgotPassword} className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4 text-white bg-[#29B467] border-0">Login</button>

                        <h1 className='py-1 text-[18px] font-semibold text-center'>Or</h1>

                        {/* login-with-google */}
                        <button onClick={handleGoogleSignin} type='button' className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <div className='flex justify-center mt-2'>
                            <div className='flex items-center gap-1 font-semibold'>
                                <p>Don't have an account</p>
                                <Link to={`/auth/registration`} className="link link-hover underline text-[#29B467]">Register</Link>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
