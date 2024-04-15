import React, { useState } from 'react'
import AuthLogo from '../../assets/auth_logo.svg'
import ggle from '../../assets/google.svg';
import Twitter from '../../assets/twitter.svg';
import { CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-1/2 overflow-hidden">
        <img className='object-cover h-full w-full' src={AuthLogo} alt="Logo" />
      </div>
      <div className="w-full md:w-1/2 flex items-center md:px-16 bg-white overflow-y-auto">
        <div className="max-w-md p-6">
          <h2 className="text-3xl font-semibold pt-48 mb-2">Create Your Account</h2>
          <p>Sign Up to enjoy all of the features in the app</p>
          <form className='mt-5'>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-normal text-dark-100">
                Name
              </label>
              <input
                id="username"
                type="text"
                className="rounded-md px-4 py-3 w-full border border-gray outline-none"
                name="username"
                autoComplete="off"
                autoFocus
                placeholder="Enter your name"
                required
                />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="email" className="text-sm font-normal text-dark-100">
                Email Address
              </label>
              <div className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center pointer-events-none">
                    <CiMail className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
              <input
                id="username"
                type="text"
                className="rounded-md px-4 py-3 w-full border border-gray outline-none"
                name="username"
                autoComplete="off"
                autoFocus
                placeholder="Enter your email"
                required
                />
            </div>
            <div className="mb-2 relative">
              <label htmlFor="password" className="text-sm font-normal text-dark-100">
                Password
              </label>
              <div className="absolute inset-y-0 right-0 pr-3 top-5 flex items-center">
                    {showPassword ? (
                    <IoEyeOutline
                        className="h-4 w-4 text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                        aria-hidden="true"
                    />
                    ) : (
                    <IoEyeOffOutline
                        className="h-4 w-4 text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                        aria-hidden="true"
                    />
                    )}
                </div>
              <input
                id="password-input"
                type={showPassword ? 'text' : 'password'}
                className="rounded-md px-4 py-3 w-full border border-gray outline-none"
                name="password"
                required
                autoComplete="off"
                placeholder="Password"
                />
            </div>
            <p className='text-dark-100 text-sm font-normal'>Must be at least 8 characters</p>
            <button
              type="submit"
              className="w-full py-3 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700"
            >
              Create Account
            </button>
            </form>
                <div className='flex items-center justify-center space-x-4 mt-4 mb-4'>
                    <div className='border-b border-[#F0F2F5] w-16 lg:w-36 h-2'></div>
                        <p className='text-center text-sm mt-3 mb-3 cursor-pointer'>or</p>
                    <div className='border-b border-[#F0F2F5] w-16 lg:w-36 h-2'></div>
                </div>
               <div className='space-y-4'>
                    <button className="w-full p-2.5 text-dark-200 font-semibold border border-gray outline-none rounded-md bg-brand-white text-base font-600 flex items-center justify-center cursor-pointer"> 
                    <img src={ggle} alt="Google-icon"  className="mr-2 w-5"/>Sign up with Google
                    </button>
                    <button className="w-full p-2.5 text-dark-200 font-semibold border border-gray outline-none rounded-md bg-brand-white text-base font-600 flex items-center justify-center cursor-pointer"> 
                    <img src={Twitter} alt="Google-icon"  className="mr-2 w-5"/>Sign up with Twitter
                    </button>
               </div>
               <p className='text-grey text-sm mt-4 text-center'>Already have an account?
               <Link to='/login' className='text-sm text-primary pl-2'>Log in here</Link>
               </p>
        </div>
      </div>
    </div>
  )
}

export default Register