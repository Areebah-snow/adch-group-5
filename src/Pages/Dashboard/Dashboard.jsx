/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "../../Components/Nav";
import Mona from "../../assets/default.png";
import Sidebar from "../../Components/Sidebar";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalendarComponent from "../../Components/CalendarComponent";
import EventTable from "../../Components/EventTable";
import Mobilesidebar from "../../Components/Mobilesidebar";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import axios from "../Auth/axios";
import ClockLoader from "react-spinners/ClipLoader";
const Dashboard = () => {
  const [loading, isLoading] = useState(false);
  const [EventsCreated, setEventsCreated] = useState(false);
  const [RSVP, SetRSVP] = useState(false);
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });
  useEffect(() => {
    isLoading(true);
    instance
      .get("/api/event/getEvents")
      .then((res) => {
        console.log(res.data);
        setEventsCreated(res.data);
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
    instance
      .get("/api/rsvp")
      .then((res) => {
        console.log(res.data);
        SetRSVP(res.data);
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, []);
  const mores = [
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
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
        <div className="bg-[#F9FAFB]">
          <Nav />
          <div className="px-6 lg:px-14 py-6 mt-3">
            <div className="flex items-center justify-between">
              <h2 className="text-dark text-xl md:text-3xl font-semibold">
                Dashboard
              </h2>
              <Link to="/createevent">
                <button className="flex items-center gap-2 bg-primary text-sm md:text-base font-normal text-white py-2 px-2 md:py-4 md:px-3 rounded-lg">
                  Create Event
                  <AiOutlinePlusCircle size={25} />
                </button>
              </Link>
            </div>

            <div className="lg:flex-row flex flex-col gap-6 mt-12">
              <div className="lg:w-[70%]">
                <div className="bg-[#EDEBFE] shadow-md rounded-lg w-[full] lg:p-5 flex items-center gap-5">
                  <img
                    width={70}
                    src={auth.currentUser?.photoURL || Mona}
                    alt="profilepic"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-black text-base md:text-[2rem] font-semibold">
                      Hello, {auth.currentUser?.displayName?.split(" ")[0]}
                    </h1>
                    <p className="text-sm md:text-base text-black font-normal">
                      Hava a great day
                    </p>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-dark font-semibold text-lg mt-10">
                    Do more with Will Be There
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-4">
                    <div className="border border-[#AAA5F8] rounded-xl w-full bg-[#AAA5F8]">
                      <h3 className="font-bold p-5 text-[2rem]">
                        {loading && <ClockLoader color="black" />}
                        {EventsCreated.length}
                      </h3>
                      <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">
                        Events Created
                      </p>
                    </div>
                    <div className="border border-[#AAA5F8] rounded-xl w-full bg-[#847CF5]">
                      <h3 className="font-bold p-5 text-[2rem]">
                        {loading && <ClockLoader color="black" />}
                        {RSVP.length}
                      </h3>
                      <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">
                        Previous RSVP
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-dark font-semibold text-lg mt-5 over">
                    Created Events
                  </h1>
                  <EventTable />
                </div>
              </div>

              <div className="lg:w-[30%] mt-[-30px]">
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
