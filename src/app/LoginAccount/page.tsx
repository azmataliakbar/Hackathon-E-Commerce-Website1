"use client";

import Image from 'next/image';
import { useState } from 'react';
import Header1 from '../components/Header1';
import Last from '../components/Footer';

function LoginForm() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div>
      <Header1 />
      {/* Login Account section - 1 */}
      <div className="relative">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-12 md:ml-28 lg:ml-28'/>
          <h1 className="text-3xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">My Account</h1>
          <p className="text-sm sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; My Account</p>
        </div>
      </div>

      {/* Shop section - 2 */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black hover:text-red-500 hover:scale-y-150">
            {isLoginMode ? 'Log In' : 'Register'}
          </h2>

          {isLoginMode ? (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block md:text-xl lg:text-lg  text-sm text-gray-700 font-bold hover:text-blue-500 hover:scale-y-125"
                >
                  Username or Email Address
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label
                  htmlFor="rememberMe"
                  className="text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150"
                >
                  Remember me
                </label>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between">
                <button
                  type="submit"
                  className="bg-blue-200 text-black px-4 py-2 font-bold rounded hover:bg-blue-400 hover:scale-110 mb-2 md:mb-0"
                >
                  Log In
                </button>
                <a
                  href="#"
                  className="text-gray-700 hover:underline font-bold hover:text-blue-500 hover:scale-125 text-center"
                >
                  Lost Your Password?
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold hover:scale-y-150 hover:text-blue-500"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 p-2 w-full rounded"
                />
              </div>
              <p className="text-gray-500 hover:scale-y-125 hover:text-black text-sm md:text-base">
                A link to set a new password will be sent to your email address.
                <br />
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-300 text-black px-4 py-2 rounded w-full hover:scale-y-150 font-bold hover:bg-red-400"
                >
                  Register
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 text-center">
            <p className="text-gray-700 hover:scale-110 font-bold hover:text-blue-500">
              {isLoginMode
                ? "Don't have an account? "
                : "Already have an account? "}
            </p>
            <button
              className="text-blue-500 hover:underline hover:scale-125 font-bold hover:text-red-500"
              onClick={handleToggleMode}
            >
              {isLoginMode ? 'Register' : 'Log In'}
            </button>
          </div>
        </div>
      </div>

      {/* Shop section - 3 */}
      <div className="bg-[#FAF4F4] p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-24">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">
              Free Delivery
            </h3>
            <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">
              90 Days Return
            </h3>
            <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">
              Secure Payment
            </h3>
            <p className="text-sm text-gray-500 hover:text-blue-600 hover:scale-110">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <Last />
    </div>
  );
}

export default LoginForm;
