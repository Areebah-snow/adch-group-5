import React, { useState } from "react";
import Nav from "../../Components/Nav";
import Mona from "../../assets/mona.svg";
import Sidebar from "../../Components/Sidebar";

const Dashboard = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="lg:ml-[15%]">
        <div className="bg-[#F9FAFB]">
          <Nav />
          <div className="px-6 lg:px-14 py-6 mt-3">
            <div className="flex items-center justify-between">
              <h2 className="text-dark text-3xl font-semibold">Dashboard</h2>
              <button className="bg-primary text-base font-normal text-white py-4 px-3 rounded-lg">
                Create Event
              </button>
            </div>

            <div className=" mt-12">
              <div className="bg-[#EDEBFE] shadow-md rounded-lg w-[702px] lg:p-5 flex items-center gap-5">
                <img src={Mona} alt="woman-face" />
                <div className="flex flex-col">
                  <h1 className="text-black text-[2rem] font-semibold">
                    Hello, Monalisa
                  </h1>
                  <p className="text-base text-black font-normal">
                    Hava a great day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
