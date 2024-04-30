/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Nav from "../../Components/Nav";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Mobilesidebar from "../../Components/Mobilesidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../../firebaseConfig";
import ClockLoader from "react-spinners/ClipLoader";

const Rsvp = () => {
  const [RSVP, SetRSVP] = useState([]);
  const [loading, setLoading] = useState(false);
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });
  const formatDate = (dateTimeString) => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // hour: "numeric",
      // minute: "numeric",
    };
    const formattedDateTime = new Date(dateTimeString).toLocaleDateString(
      "en-GB",
      options
    );
    return formattedDateTime;
  };

  useEffect(() => {
    setLoading(true);
    instance
      .get("/api/rsvp")
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        SetRSVP(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const notAttendingRSVP = RSVP.filter((item) => item.isAttending === false);
  const attendingRSVP = RSVP.filter((item) => item.isAttending === true);

  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
        <>
          <Nav />
          <div className="bg-[#F9FAFB] p-5 lg:p-10 min-h-[90vh]">
            <div className="flex justify-between items-center">
              <h1 className="text-[28px] font-[600]">RSVP's</h1>
              <Link to="/createevent">
                <button className="w-[161px] h-[56px] bg-primary rounded-xl text-white flex justify-center items-center gap-4">
                  Create Event
                  <AiOutlinePlusCircle size={25} />
                </button>
              </Link>
            </div>
            <div className="flex gap-6 justify-between mt-12 lg:flex-nowrap flex-wrap">
              <div className="rounded-xl w-full lg:w-[236px] bg-[#FCD2C2]">
                <h3 className="font-bold p-5 text-[2rem]">
                  {loading ? (
                    <ClockLoader color="black" size={50} />
                  ) : (
                    RSVP.length
                  )}
                </h3>
                <p className="px-5 pb-12 text-[#1D2739] font-semibold">
                  Total RSVPs
                </p>
              </div>
              <div className="rounded-xl w-full lg:w-[236px] bg-[#FBE2B7]">
                <h3 className="font-bold p-5 text-[2rem]">
                  {loading ? (
                    <ClockLoader color="black" size={50} />
                  ) : (
                    attendingRSVP.length
                  )}
                </h3>
                <p className="px-5 pb-12 text-[#1D2739] font-semibold">Yes</p>
              </div>
              <div className="rounded-xl w-full lg:w-[236px] bg-[#B5E3C4]">
                <h3 className="font-bold p-5 text-[2rem]">
                  {loading ? (
                    <ClockLoader color="black" size={50} />
                  ) : (
                    notAttendingRSVP.length
                  )}
                </h3>
                <p className="px-5 pb-12 text-[#1D2739] font-semibold">NO</p>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto">
              <h1 className=" font-[600] text-[18px]">Previous RSVP list</h1>
              <table className="text-left w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="py-2">Name</th>
                    <th className="p-4">RSVP Status</th>
                    <th className="p-4">Event Location</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Additional People</th>
                  </tr>
                </thead>
                <tbody className="">
                  {loading ? (
                    <ClockLoader color="black" size={50} />
                  ) : RSVP.length === 0 ? (
                    "No prvious RSVPs found"
                  ) : (
                    RSVP.map((item) => (
                      <tr
                        key={item._id}
                        className="border-t-[1px] border-[#E4E7EC] font-semibold text-sm lg:text-base capitalize text-wrap"
                      >
                        <td className="py-4">{item.event.name}</td>{" "}
                        <td
                          className={`p-4 ${
                            item.isAttending === false
                              ? "text-red-500"
                              : "text-[#00C68D]"
                          }`}
                        >
                          {item.isAttending === false ? "NO" : "YES"}
                        </td>
                        <td className="p-4">{item.event.location}</td>
                        <td className="p-4">
                          {formatDate(item.event.startDate)}
                        </td>
                        <td className="p-4">
                          {item.plusOnes.length > 0
                            ? item.plusOnes.join(", ")
                            : "None"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Rsvp;
