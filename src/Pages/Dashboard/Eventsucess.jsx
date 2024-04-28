/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import Nav from "../../Components/Nav";
import successicon from "../../assets/Rectangle 5083.png";
import { FaLink } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { auth } from "../../../firebaseConfig";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Eventsucess = () => {
  const { eventId } = useParams();
  const [buttonText, setButtonText] = useState("Copy RSVP Link");
  const [isLoading, setisLoading] = useState(true);
  const [successPage, setsuccessPage] = useState([]);
  const createdEvent = JSON.parse(localStorage.getItem("createdEvent"));

  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });
  useEffect(() => {
    // const {eventId}=user
    setisLoading(true);

    instance
      .get(`/api/event/${eventId}`)
      .then((res) => {
        console.log(res.data);
        setsuccessPage(res.data);
        setisLoading(false);
      })
      .catch((error) => {
        setisLoading(false);
        console.log(error);
      });
  }, []);
  const handleCopyLink = () => {
    const link = `adch-group-5.vercel.app/invitation/${eventId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setButtonText("Link Copied");
        setTimeout(() => {
          setButtonText("Copy RSVP Link");
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  };
  const convertDate = (dateStr) => {
    if (dateStr == undefined) return "";

    const date = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
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
              {successPage.name} on{" "}
              {isLoading == false ? convertDate(successPage.startDate) : ""} at{" "}
              {successPage.location}
            </p>
            <button
              onClick={handleCopyLink}
              className="w-full border-2 py-2 rounded-lg mt-6 flex justify-center items-center gap-4 text-primary border-primary font-[600]"
            >
              {buttonText} <FaLink size={20} />
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
