/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "../../Components/Nav";
import Mona from "../../assets/default.png";
import Sidebar from "../../Components/Sidebar";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalendarComponent from "../../Components/CalendarComponent";
// import EventTable from "../../Components/EventTable";
import Mobilesidebar from "../../Components/Mobilesidebar";
import { Link } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import axios from "../Auth/axios";
import ClockLoader from "react-spinners/ClipLoader";
const Dashboard = () => {
  const [loading, isLoading] = useState(false);
  const [EventsCreated, setEventsCreated] = useState([]);
  const [upcommingEvent, setupcommingEvent] = useState([]);
  const [RSVP, SetRSVP] = useState([]);
  const [eventTable, setEventTable] = useState([]);
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });
  const formatday = (dateTimeString) => {
    const formattedDateTime = new Date(dateTimeString).toDateString("en-GB");
    return formattedDateTime;
  };
  useEffect(() => {
    isLoading(true);
    instance
      .get("/api/event/getEvents/1")
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
      .get("/api/event/getEvents/2")
      .then((res) => {
        console.log(res.data);
        setupcommingEvent(res.data);
        isLoading(false);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
    instance
      .get("/api/event/getEvents/0")
      .then((res) => {
        console.log(res.data);
        setEventTable(res.data);
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
  // const mores = [
  //   {
  //     id: 3,
  //     title: 3,
  //     details: "Shared links",
  //     BackgroundColor: "#847CF5",
  //   },
  // ];

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
                    <div className="border border-[#AAA5F8] rounded-xl w-full bg-[#AAA5F8]">
                      <h3 className="font-bold p-5 text-[2rem]">
                        {loading && <ClockLoader color="black" />}
                        {upcommingEvent.length}
                      </h3>
                      <p className="px-5 pb-12 text-base text-[#1D2739] font-semibold whitespace-break-spaces">
                        Upcoming Events
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <h1 className="text-dark font-semibold text-lg mt-5 over">
                    Created Events
                  </h1>
                  {/* <EventTable /> */}
                  <table className="text-left w-full whitespace-nowrap border border-[#E4E7EC] rounded-full">
                    <thead>
                      <tr>
                        <th className="p-4">Recent Events</th>
                        <th className="p-4">Created</th>
                        <th className="p-4">Event Day</th>
                        <th className="p-4">Stats</th>
                      </tr>
                    </thead>
                    {eventTable.length === 0 && "No events created"}
                    {loading && <ClockLoader color="blue" />}
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
                  </table>
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
