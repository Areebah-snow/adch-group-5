/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../../assets/image 2.png";
import icon from "../../assets/Logo.png";
import { useState } from "react";

const Invitation = () => {
  const [checkedbox, setcheckedbox] = useState("");
  console.log(checkedbox);
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="hidden md:w-[15%] bg-primary h-screen fixed left-0 top-0 bottom-0 md:flex items-center">
        <img src={logo} alt="" />
      </div>
      <div className="md:ml-[15%]">
        <div className="flex items-center justify-between p-6">
          <div className="md:w-[224px] h-[50px]">
            <img src={icon} alt="" />
          </div>
          <div className="flex gap-4">
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
        </div>
        <div className="lg:px-24 px-6">
          <h1 className="font-[700] text-center text-[24px]">
            You are invited!
          </h1>
          <p className="font-[500] text-center">
            It’s Queen Arit’s birthday. Please confirm your attendance below
          </p>
          <form onSubmit={handlesubmit}>
            <div className="flex flex-col w-full mt-9">
              <label className="font-[500] text-[14px]" htmlFor="">
                Guest Name
              </label>
              <input
                className="p-2 border-gray border-2 outline-none shadow-md rounded-xl"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col w-full mt-9">
              <label className="font-[500] text-[14px]" htmlFor="">
                Guest Email Address
              </label>
              <input
                className="p-2 border-gray border-2 outline-none shadow-md rounded-xl"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-6 mt-6 text-[#101928] font-[500]">
              <label htmlFor="">
                <input
                  type="checkbox"
                  value="present"
                  checked={checkedbox === "present"}
                  onChange={() => setcheckedbox("present")}
                />
                {""} Yes, I will be there
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  value="absent"
                  checked={checkedbox === "absent"}
                  onChange={() => setcheckedbox("absent")}
                />
                {""} Sadly, I can't be there
              </label>
            </div>
            <div className="flex flex-col w-full mt-9">
              <label className="font-[500] text-[14px]" htmlFor="">
                Message
              </label>
              <textarea
                className="p-2 border-gray border-2 outline-none shadow-md rounded-xl"
                name=""
                id=""
                rows="3"
                placeholder="Write a congratulatory message"
                required
              ></textarea>
            </div>
            <button
              className="text-center bg-primary w-full my-6 py-4 text-white font-[600] rounded-lg"
              type="submit"
            >
              Send RSVP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
