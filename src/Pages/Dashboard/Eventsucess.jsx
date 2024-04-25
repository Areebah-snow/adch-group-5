import React from "react";
import Sidebar from "../../Components/Sidebar";
import Nav from "../../Components/Nav";
import successicon from "../../assets/Rectangle 5083.png";
import { FaLink } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
const Eventsucess = () => {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[15%]">
        <Nav />
        <div className="bg-[#F9FAFB]">
          <div className="md:p-10 p-4 min-h-[90vh] max-w-[664px] flex-col flex items-center mx-auto px-6 text-center">
            <h1 className="font-bold text-[24px]">
              Event successfully created!
            </h1>
            <p className="font-[500] text-16px">
              You can now share the link with your guests
            </p>
            <img className="mt-12" src={successicon} alt="" />
            <p className="font-[500] text-16px mt-4">
              Queen Arit’s birthday on February 28th, 2025 1:00PM at the Lion’s
              Club Event Center
            </p>
            <button className="w-full border-2 py-2 rounded-lg mt-6 flex justify-center items-center gap-4 text-primary border-primary font-[600]">
              Copy RSVP Link <FaLink size={20} />
            </button>
            <button className="w-full border-2 py-2 rounded-lg mt-6 flex justify-center items-center gap-4 text-white bg-primary border-primary font-[600]">
              Share RSVP link via email <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventsucess;
