import { useState } from "react";
import Noti from "../assets/noti.svg";
import Prof from "../assets/prof.svg";
import Woman from "../assets/face.svg";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
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
        <span className="mr-5 cursor-pointer">
          <img src={Noti} alt="Notification" />
        </span>
        <span className=" cursor-pointer flex items-center gap-2 text-dark text-sm">
          <img src={Woman} alt="profile-pic" />
          Anita Monalisa
        </span>
      </div>
    </div>
  );
};

export default Nav;
