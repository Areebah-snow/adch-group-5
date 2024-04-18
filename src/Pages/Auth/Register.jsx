import { useState } from "react";
import AuthLogo from "../../assets/auth_logo.svg";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { GooggleAuth } from "./Login";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../.././../firebaseConfig";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      setLoading(false);
      alert("Your account has been created");
    } catch (error) {
      setLoading(false);
      console.error(error.message);
      if (error.code === "auth/email-already-in-use") {
        alert("User with this email already exists. Please log in.");
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-1/2 overflow-hidden">
        <img className="object-cover h-full w-full" src={AuthLogo} alt="Logo" />
      </div>
      <div className="w-full md:w-1/2 flex md:px-16 bg-white overflow-y-auto justify-center flex-col max-md:items-center">
        <div className="max-w-md p-6 mt-44 md:mt-32">
          <h2 className="text-3xl text-center font-semibold mb-2">
            Create Your Account
          </h2>
          <p className="text-center text-dark font-normal text-base">
            Sign Up to enjoy all of the features in the app
          </p>
          <form className="mt-5">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm font-normal text-dark-100"
              >
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
              <label
                htmlFor="email"
                className="text-sm font-normal text-dark-100"
              >
                Email Address
              </label>
              <div className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center pointer-events-none">
                <CiMail className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="email"
                type="text"
                className="rounded-md px-4 py-3 w-full border border-gray outline-none"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2 relative">
              <label
                htmlFor="password"
                className="text-sm font-normal text-dark-100"
              >
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
                type={showPassword ? "text" : "password"}
                className="rounded-md px-4 py-3 w-full border border-gray outline-none"
                name="password"
                required
                autoComplete="off"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-dark-100 text-sm font-normal">
              Must be at least 8 characters
            </p>
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full py-3 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700"
            >
               {loading ? "Loading" : "Create Account"}
            </button>
          </form>
          <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
            <div className="border-b border-[#F0F2F5] w-16 lg:w-36 h-2"></div>
            <p className="text-center text-sm mt-3 mb-3 cursor-pointer">or</p>
            <div className="border-b border-[#F0F2F5] w-16 lg:w-36 h-2"></div>
          </div>
          <GooggleAuth />
          <p className="text-grey text-sm mt-4 text-center">
            Already have an account?
            <Link to="/login" className="text-sm text-primary pl-2">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
