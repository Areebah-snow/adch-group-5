import { useState } from "react";
import logo from "../assets/Logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const togglemenu = () => {
    setshowmenu(!showmenu);
  };
  const [showmenu, setshowmenu] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="md:w-[224px] h-[50px]">
          <img src={logo} alt="" />
        </div>
        <ul className="md:flex hidden gap-8">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="">Events</Link>
          <Link to="">Support</Link>
        </ul>
        <div className="md:flex gap-4 hidden">
          <Link
            to="/login"
            className="w-[104px] flex items-center justify-center h-[40px] border-2 rounded-[24px] text-blue-500 border-blue-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="w-[104px] h-[40px] flex items-center justify-center border-2 rounded-[24px] bg-blue-500 text-white"
          >
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <CiMenuBurger
            role="button"
            onClick={togglemenu}
            size={35}
            color="#473BF0"
          />
        </div>
      </div>
      <div
        className={`md:hidden fixed flex items-end flex-col px-4 gap-6 top-0 pt-[30px] right-0 w-1/2 bottom-0 bg-white z-[100] translate-x-[100%] ${
          showmenu ? "translate-x-[0%]" : "translate-x-[100%]"
        } transition-transform ease-in`}
      >
        <MdOutlineCancel
          role="button"
          onClick={togglemenu}
          size={35}
          color="#473BF0"
        />
        <div className="w-full">
          <ul className="flex flex-col gap-4">
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">Events</Link>
            <Link to="">Support</Link>
          </ul>
          <div className="flex my-6 flex-col gap-4">
            <Link
              to="/login"
              className="w-full flex items-center justify-center h-[40px] border-2 rounded-[24px] text-blue-500 border-blue-500"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="w-full h-[40px] flex items-center justify-center border-2 rounded-[24px] bg-blue-500 text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
