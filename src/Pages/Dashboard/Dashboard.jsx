/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "../../Components/Nav";
import Mona from "../../assets/default.png";
import Sidebar from "../../Components/Sidebar";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalendarComponent from "../../Components/CalendarComponent";
import Mobilesidebar from "../../Components/Mobilesidebar";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import axios from "../Auth/axios";
import ClockLoader from "react-spinners/ClipLoader";
import { FaFly } from "react-icons/fa";
import { Button } from "../../Components/Hero";
const Dashboard = () => {
  const [loading, isLoading] = useState(false);
  const [EventsCreated, setEventsCreated] = useState();
  const [upcommingEvent, setupcommingEvent] = useState();
  const [RSVP, SetRSVP] = useState();
  const [eventTable, setEventTable] = useState([]);
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser?.accessToken}`,
    },
  });
  const formatday = (dateTimeString) => {
    const formattedDateTime = new Date(dateTimeString).toDateString("en-GB");
    return formattedDateTime;
  };
  useEffect(() => {
    isLoading(true);
    instance
      .get("/api/event/getDashboard")
      .then((res) => {
        console.log(res.data);
        setEventTable(res.data.event);
        setEventsCreated(res.data.totalEvents);
        setupcommingEvent(res.data.upcommingEvents);
        SetRSVP(res.data.rsvpCount);
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, []);

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
                    <p className="text-sm md:text-base text-black font-normal mt-2">
                      What does today's schedule look like?
                    </p>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-dark font-semibold text-lg mt-10">
                    Do more with Will Be There
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-4">
                    <Link to="/allevents">
                      <div className="border border-[#AAA5F8] rounded-xl w-full bg-[#AAA5F8]">
                        {loading ? (
                          <ClockLoader color="black" size={50} />
                        ) : (
                          <h3 className="font-bold p-5 text-[2rem]">
                            {EventsCreated}
                          </h3>
                        )}
                        <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">
                          Events Created
                        </p>
                      </div>
                    </Link>
                    <Link to="/rsvp">
                      <div className="border border-[#AAA5F8] rounded-xl w-full bg-[#847CF5]">
                        {loading ? (
                          <ClockLoader color="black" size={50} />
                        ) : (
                          <h3 className="font-bold p-5 text-[2rem]">{RSVP}</h3>
                        )}
                        <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">
                          Previous RSVP
                        </p>
                      </div>
                    </Link>
                    <Link to="/allevents">
                      <div className="border border-[#AAA5F8] rounded-xl w-full bg-[#AAA5F8]">
                        {loading ? (
                          <ClockLoader color="black" size={50} />
                        ) : (
                          <h3 className="font-bold p-5 text-[2rem]">
                            {upcommingEvent}
                          </h3>
                        )}
                        <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">
                          Upcoming Events
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                {eventTable.length === 0 ? (
                  <div className="text-xl font-semibold text-center my-6">
                    <h1 className="font-bold text-3xl flex justify-center gap-4 items-center my-4">
                      Get started <FaFly />
                    </h1>
                    <h1 className="my-4">
                      Create events and manage them easily
                    </h1>
                    <Button text={"Create an Event"} />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <h1 className="text-dark font-semibold text-lg mt-5 over">
                      Created Events
                    </h1>
                    <div>
                      <table className="text-left w-full whitespace-nowrap border border-[#E4E7EC] rounded-full">
                        <thead>
                          <tr>
                            <th className="p-4">Recent Events</th>
                            <th className="p-4">Created</th>
                            <th className="p-4">Event Day</th>
                            <th className="p-4">Stats</th>
                          </tr>
                        </thead>
                        {loading ? (
                          <ClockLoader color="blue" />
                        ) : (
                          <tbody>
                            {eventTable.map((item, index) => (
                              <tr
                                key={index}
                                className="border-t-[1px] border-[#E4E7EC] font-semibold text-sm lg:text-base"
                              >
                                <td className="p-4 capitalize">{item.name}</td>
                                <td className="p-4 capitalize">
                                  {formatday(item.createdAt)}
                                </td>
                                <td className="p-4 capitalize">
                                  {formatday(item.startDate)}
                                </td>
                                <td
                                  className="p-4 capitalize"
                                  style={{
                                    color:
                                      item.stats === "Open"
                                        ? "green"
                                        : item.stats === "Draft"
                                        ? "gold"
                                        : "black",
                                  }}
                                >
                                  {item.stats}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                    <Link to="/allevents">
                      <button className="text-center bg-primary text-white font-bold my-6 px-6 py-2 rounded-xl">
                        View All
                      </button>
                    </Link>
                  </div>
                )}
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
