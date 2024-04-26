import AuthLogo from "../../assets/auth_logo.svg";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-1/2 overflow-hidden">
        <img className="object-cover h-full w-full" src={AuthLogo} alt="Logo" />
      </div>
      <div className="w-full md:w-1/2 flex md:px-16 bg-white overflow-y-auto justify-center max-md:items-center flex-col">
        <div className="p-6 md:mt-12">
          <h2 className="text-center text-dark font-bold mb-1 text-2xl">
            Forgot Password
          </h2>

          <div className="pt-6 space-y-6 ">
            <div className="space-y-2 relative">
              <label
                htmlFor="email"
                className="text-sm font-normal text-dark-100"
              >
                Email Address
              </label>
              <br />
              <div className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center pointer-events-none">
                <CiMail className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="email"
                type="text"
                className="rounded-md px-4 py-3 w-full border border-gray outline-none"
                name="email"
                autoComplete="off"
                autoFocus
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-6 text-white bg-primary"
          >
            Send password reset link
          </button>
        </div>
        <ToastContainer transition={Zoom} />
      </div>
    </div>
  );
};

export default Resetpassword;
