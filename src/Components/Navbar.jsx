import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Support</li>
        </ul>
        <div className="flex gap-4">
          <Link to='/login' className="w-[104px] flex items-center justify-center h-[40px] border-2 rounded-[24px] text-blue-500 border-blue-500">
            Login
          </Link >
          <button className="w-[104px] h-[40px] border-2 rounded-[24px] bg-blue-500 text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
