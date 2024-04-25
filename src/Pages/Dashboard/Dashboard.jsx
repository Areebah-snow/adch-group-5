import React, { useState } from "react";
import Nav from "../../Components/Nav";
import Mona from "../../assets/mona.svg";
import Sidebar from "../../Components/Sidebar";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalendarComponent from "../../Components/CalendarComponent";
import EventTable from "../../Components/EventTable";

const Dashboard = () => {

  const mores = [
    {
      id: 0,
      title: 2,
      details: "Events Created",
      BackgroundColor: "#AAA5F8",
    },
    {
      id: 1,
      title: 20,
      BackgroundColor: '#847CF5',
      details: "Previous RSVPs",
    },
    {
      id: 2,
      title: 5,
      details: "Upcoming Events",
      BackgroundColor: "#AAA5F8",
    },
    {
      id: 3,
      title: 3,
      details: "Shared links",
      BackgroundColor: "#847CF5",
    },
  ];


  return (
    <div className="">
      <Sidebar />
      <div className="lg:ml-[15%]">
        <div className="bg-[#F9FAFB]">
          <Nav />
          <div className="px-6 lg:px-14 py-6 mt-3">
            <div className="flex items-center justify-between">
              <h2 className="text-dark text-3xl font-semibold">Dashboard</h2>
              <button className="flex items-center gap-2 bg-primary text-base font-normal text-white py-4 px-3 rounded-lg">
                Create Event
                <AiOutlinePlusCircle size={25} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-64 mt-12">
              <div className="w-full max-w-[602px]">
                <div className="bg-[#EDEBFE] shadow-md rounded-lg w-[675px] lg:p-5 flex items-center gap-5">
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
                <div className=''>
                  <h1 className="text-dark font-semibold text-lg mt-10">Do more with Will Be There</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-4 w-[632px] gap-14 py-4">
                    {mores.map((more) => {
                    return (
                    <div className="border border-[#AAA5F8] rounded-xl w-[162px]"
                    style={{ backgroundColor: more.BackgroundColor }}
                     key={more.id}>
                      <h3 className="font-bold p-5 text-[2rem]">{more.title}</h3>
                      <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">{more.details} </p>
                    </div>
                    );
                    })}
                  </div>
                </div>
                <div className="w-[680px]">
                <h1 className="text-dark font-semibold text-lg mt-5">Created Events</h1>
                <EventTable />
                </div>
              </div>

              <div className="w-screen mt-[-30px]">
                
                <CalendarComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
