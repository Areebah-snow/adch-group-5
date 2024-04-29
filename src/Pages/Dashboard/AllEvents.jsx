/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Sidebar from "../../Components/Sidebar";
import Nav from "../../Components/Nav";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Mobilesidebar from "../../Components/Mobilesidebar";
import axios from "axios";
import { auth } from "../../../firebaseConfig";
import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const AllEvents = () => {
  const [showEvents, setShowEvents] = useState([]);
  const [loading, isLoading] = useState(false);
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
        isLoading(false);
        console.log(res.data);
        setShowEvents(res.data);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, []);
  const handleDelete = (event) => {
    const eventId = event.currentTarget.getAttribute("eventId");
    instance
      .delete(`/api/event/`, { data: { _id: eventId } })
      .then((res) => {
        console.log(res.data);
        setShowEvents(showEvents.filter((item) => item._id != eventId));
        toast.success("Event deleted successfully");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div>
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB] min-h-[90vh] overflow-x-auto p-4">
            <table className="text-left w-full whitespace-nowrap">
              <thead>
                <tr>
                  <th className="p-2">Recent Events</th>
                  <th className="p-4">Created</th>
                  <th className="p-4">Event Day</th>
                  <th className="p-4">Stats</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              {showEvents.length === 0 && "No events created"}
              {loading && <ClockLoader color="blue" />}
              <tbody>
                {showEvents.map((item, index) => (
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
                    <td className="flex items-center p-4 gap-4">
                      <Link to={`/allevents/${item._id}`}>
                        <LuEye size={25} color="#667185" />
                      </Link>
                      <RiDeleteBin6Fill
                        size={25}
                        color="red"
                        role="button"
                        onClick={handleDelete}
                        eventId={item._id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ToastContainer transition={Zoom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
