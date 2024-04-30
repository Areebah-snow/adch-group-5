import { useEffect } from "react";
import Woman from "../assets/default.png";
import { IoIosSearch } from "react-icons/io";
import { auth } from "../../firebaseConfig.js";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="w-full my-3 flex items-center justify-between px-2 py-2 md:px-10 md:py-1 bg-white mx-auto">
      <div className="w-full hidden lg:block">
        <form className="flex items-center">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IoIosSearch size={20} color="gray" />
            </div>
            <input
              type="text"
              className="bg-[#F9FAFB] border-2 border-[#F9FAFB] text-dark-100 text-sm rounded-md block w-full pl-10 p-2.5 outline-none"
              placeholder="Search reference"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex flex-row items-center justify-center">
        <span className=" cursor-pointer flex items-center gap-2 text-dark text-sm">
          <Link to="/profile">
            <img
              className="w-12 rounded-full"
              src={auth.currentUser?.photoURL || Woman}
              alt="profile-pic"
            />
          </Link>
          {auth.currentUser?.displayName}
        </span>
      </div>
    </div>
  );
};

export default Nav;
