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

const Rsvp = () => {
  const events = [
    {
      id: 0,
      title: 20,
      details: "Total RSVPs",
      BackgroundColor: "#FCD2C2",
    },
    {
      id: 1,
      title: 13,
      BackgroundColor: "#FBE2B7",
      details: "Yes",
    },
    {
      id: 2,
      title: 2,
      details: "Maybe",
      BackgroundColor: "#B5E3C4",
    },
    {
      id: 3,
      title: 5,
      details: "No",
      BackgroundColor: "#FCD2C2",
    },
  ];

  const [RSVP, SetRSVP] = useState([]);
  const [loading, isLoading] = useState(false);
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });

  useEffect(() => {
    isLoading(true);
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
              {events.map((rsvp) => {
                return (
                  <div
                    className="rounded-xl w-full lg:w-[236px]"
                    style={{ backgroundColor: rsvp.BackgroundColor }}
                    key={rsvp.id}
                  >
                    <h3 className="font-bold p-5 text-base lg:text-[2rem]">
                      {rsvp.title}
                    </h3>
                    <p className="px-5 pb-12 text-[#1D2739] font-semibold">
                      {rsvp.details}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 overflow-x-auto">
              <h1 className=" font-[600] text-[18px]">
                Queen Arit's Birthday RSVP list
              </h1>
              <table className="text-left w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="">Name</th>
                    <th className="p-2">Email Address</th>
                    <th className="">RSVP Status</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold text-sm lg:text-base">
                    <td>Muhammed M.</td>
                    <td className="px-2 py-4">muhammed@yahoo.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Ernest E.</td>
                    <td className="px-2 py-4">lolaol@gmail.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Aishat J.</td>
                    <td className="px-2 py-4">kiol@gmail.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Emmanuel O.</td>
                    <td className="px-2 py-4">ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Solomon P.</td>
                    <td className="px-2 py-4">ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Hritik H.</td>
                    <td className="px-2 py-4">ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Uthman U.</td>
                    <td className="px-2 py-4">ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td>Huncho O.</td>
                    <td className="px-2 py-4">ol@gmail.com</td>
                    <td>No</td>
                  </tr>
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
