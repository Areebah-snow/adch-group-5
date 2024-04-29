/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import Nav from "../../Components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FaArrowLeftLong } from "react-icons/fa6";

const Event = () => {
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
  const formatTime = (dateTimeString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = new Date(dateTimeString).toLocaleTimeString(
      "en-GB",
      options
    );
    return formattedDateTime;
  };
  const { id } = useParams();
  const [loading, isLoading] = useState(false);
  const [event, setEvent] = useState([]);
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });

  useEffect(() => {
    isLoading(true);
    instance
      .get(`/api/event/${id}`)
      .then((res) => {
        isLoading(false);
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, [id]);
  const [eventName, seteventName] = useState(event.name);
  const [eventDescription, seteventDescription] = useState(event.description);
  const [eventStartTime, seteventStartTime] = useState("");
  const [eventStartDate, seteventStartDate] = useState("");
  const [eventEndTime, seteventEndTime] = useState("");
  const [eventEndDate, seteventEndDate] = useState([]);
  const [eventLocation, seteventLocation] = useState("");
  const [eventotherInfo, seteventotherInfo] = useState("");
  const [photourl, setphotourl] = useState(event.photoURL);

  return (
    <div>
      <div>
        <Sidebar />
        <Mobilesidebar />
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB] min-h-screen pt-12 px-6 lg:px-24">
            {loading && <ScaleLoader color="black" />}
            <h1 className="text-center font-bold text-2xl items-center flex justify-between capitalize">
              <div
                className="flex gap-2 items-center"
                onClick={goBack}
                role="button"
              >
                <FaArrowLeftLong />
                Go Back
              </div>
              {event.name} Event Details
            </h1>
            <div className="mt-6">
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Event Name</h1>
                {editMode ? (
                  <input
                    value={event.name}
                    onChange={(e) => seteventName(e.target.value)}
                    type="text"
                    autoFocus
                    placeholder="Name of the event"
                    className="rounded-md px-2 py-3 w-full border border-gray"
                  />
                ) : (
                  <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                    {event.name}
                  </h1>
                )}
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Event Description</h1>
                {editMode ? (
                  <input
                    value={event.description}
                    onChange={(e) => seteventDescription(e.target.value)}
                    type="text"
                    placeholder="Name of the event"
                    className="rounded-md px-2 py-3 w-full border border-gray"
                  />
                ) : (
                  <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                    {event.description}
                  </h1>
                )}
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Start Time</h1>
                {/* <input
                  value={eventName}
                  onChange={(e) => seteventName(e.target.value)}
                  type="text"
                  placeholder="Name of the event"
                  className="rounded-md px-4 py-3 w-full border border-gray shadow-md"
                /> */}
                <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                  {formatTime(event.startDate)}
                </h1>
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Event Start Date</h1>
                {/* <input
                  value={eventName}
                  onChange={(e) => seteventName(e.target.value)}
                  type="text"
                  placeholder="Name of the event"
                  className="rounded-md px-4 py-3 w-full border border-gray shadow-md"
                /> */}
                <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                  {formatDate(event.startDate)}
                </h1>
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">End Time</h1>
                {/* <input
                  value={eventName}
                  onChange={(e) => seteventName(e.target.value)}
                  type="text"
                  placeholder="Name of the event"
                  className="rounded-md px-4 py-3 w-full border border-gray shadow-md"
                /> */}
                <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                  {formatTime(event.endDate)}
                </h1>
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Event End Date</h1>
                {/* <input
                  value={eventName}
                  onChange={(e) => seteventName(e.target.value)}
                  type="text"
                  placeholder="Name of the event"
                  className="rounded-md px-4 py-3 w-full border border-gray shadow-md"
                /> */}
                <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                  {formatDate(event.endDate)}
                </h1>
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Event Location</h1>
                {editMode ? (
                  <input
                    value={event.location}
                    onChange={(e) => seteventLocation(e.target.value)}
                    type="text"
                    placeholder="Name of the event"
                    className="rounded-md px-2 py-3 w-full border border-gray"
                  />
                ) : (
                  <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                    {event.location}
                  </h1>
                )}
              </div>
              <div className="my-4 flex flex-col">
                <h1 className="font-semibold">Additional Info</h1>
                {editMode ? (
                  <input
                    value={event.additionalInfo}
                    onChange={(e) => seteventotherInfo(e.target.value)}
                    type="text"
                    placeholder="Name of the event"
                    className="rounded-md px-2 py-3 w-full border border-gray shadow-md"
                  />
                ) : (
                  <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                    {event.additionalInfo}
                  </h1>
                )}
              </div>

              <div className="">
                {editMode ? (
                  <>
                    <button className="w-full text-center text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2">
                      {saving ? (
                        <span className="Loading..."></span>
                      ) : (
                        "Save Event"
                      )}
                    </button>
                    <button className="w-full text-center text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2 my-6">
                      {saving ? (
                        <span className="Loading..."></span>
                      ) : (
                        "Save for later"
                      )}
                    </button>
                    <button
                      onClick={() => setEditMode(!editMode)}
                      className="w-full text-center text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2 my-6"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className="w-full text-center border-2 border-[#473BF0] bg-[#473BF0] text-white py-2 rounded-xl my-6"
                  >
                    Edit Event
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
