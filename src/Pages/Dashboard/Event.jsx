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
import { ToastContainer, Zoom, toast } from "react-toastify";
import { FaLink } from "react-icons/fa6";

const Event = () => {
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const formatDate = (dateTimeString) => {
    const formattedDateTime = dateTimeString.split("T")[0];
    return formattedDateTime;
  };
  const dateFormat = (dateTimeString) => {
    const date = new Date(dateTimeString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return date;
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
  const [rsvp, setRsvp] = useState([]);
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
        setEventName(res.data.name);
        setEventDescription(res.data.description);
        setEventStartTime(formatTime(res.data.startDate));
        setEventStartDate(formatDate(res.data.startDate));
        setEventEndTime(formatTime(res.data.endDate));
        setEventEndDate(formatDate(res.data.endDate));
        setEventLocation(res.data.location);
        setEventOtherInfo(res.data.additionalInfo);
        setPhotoUrl(res.data.photoURL);
        setEventID(res.data._id);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
    //rsvp members
    instance
      .get(`/api/rsvp/getRsvpByEvent/${id}`)
      .then((res) => {
        isLoading(false);
        console.log(res.data);
        setRsvp(res.data);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, [id]);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventotherInfo, setEventOtherInfo] = useState("");
  const [photourl, setPhotoUrl] = useState("");
  const [eventID, setEventID] = useState("");

  const combineDateTime = (dateString, timeString) => {
    const date = new Date(dateString);
    const time = timeString.split(":").map(Number);

    date.setHours(time[0]);
    date.setMinutes(time[1]);

    return date.toISOString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);

    const combinedStartDate = combineDateTime(eventStartDate, eventStartTime);
    const combinedEndDate = combineDateTime(eventEndDate, eventEndTime);

    const updateData = {
      name: eventName,
      description: eventDescription,
      additionalInfo: eventotherInfo,
      startDate: combinedStartDate,
      endDate: combinedEndDate,
      stats: "Open",
      photoURL: photourl,
      location: eventLocation,
      _id: eventID,
    };
    console.log(updateData);

    instance
      .put(`/api/event`, updateData)
      .then(() => {
        setSaving(false);
        // localStorage.setItem("createdEvent", JSON.stringify(updateData));
        // const eventId = res.data._id;
        toast.success("Event updated successfully", {
          theme: "colored",
          autoClose: 1500,
        });
        setTimeout(() => {
          navigate(`/allevents/`);
        }, 1500);
      })
      .catch((error) => {
        setSaving(false);
        toast.error("An error occoured: " + error.message, {
          theme: "colored",
          autoClose: 3000,
        });
      });
  };

  const [buttonText, setButtonText] = useState("Copy RSVP Link");
  const handleCopyLink = () => {
    const link = `adch-group-5.vercel.app/invitation/${eventID}`;
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
  return (
    <div>
      <div>
        <Sidebar />
        <Mobilesidebar />
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB] min-h-screen pt-12 px-6">
            <h1 className="text-center font-bold text-2xl items-center flex justify-between capitalize">
              <div
                className="flex gap-2 items-center"
                onClick={goBack}
                role="button"
              >
                <FaArrowLeftLong />
                Go Back
              </div>
              Event Details
            </h1>
            {loading ? (
              <ScaleLoader color="black" />
            ) : (
              <div className="mt-6">
                <div className="my-4 flex flex-col">
                  <h1 className="font-semibold">Event Name</h1>
                  {editMode ? (
                    <input
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      type="text"
                      autoFocus
                      required
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
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                      type="text"
                      required
                      placeholder="Name of the event"
                      className="rounded-md px-2 py-3 w-full border border-gray"
                    />
                  ) : (
                    <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                      {event.description}
                    </h1>
                  )}
                </div>
                <div className="flex gap-2 items-center">
                  <div className="my-4 flex flex-col w-full">
                    <h1 className="font-semibold">Start Time</h1>
                    {editMode ? (
                      <input
                        value={eventStartTime}
                        onChange={(e) => setEventStartTime(e.target.value)}
                        type="time"
                        required
                        className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                      />
                    ) : (
                      <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                        {eventStartTime}
                      </h1>
                    )}
                  </div>
                  <div className="my-4 flex flex-col w-full">
                    <h1 className="font-semibold">Event Start Date</h1>
                    {editMode ? (
                      <input
                        value={eventStartDate}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setEventStartDate(e.target.value);
                        }}
                        type="date"
                        required
                        className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                      />
                    ) : (
                      <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                        {dateFormat(eventStartDate)}
                      </h1>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="my-4 flex flex-col w-full">
                    <h1 className="font-semibold">End Time</h1>
                    {editMode ? (
                      <input
                        value={eventEndTime}
                        onChange={(e) => setEventEndTime(e.target.value)}
                        type="time"
                        required
                        placeholder="Name of the event"
                        className="rounded-md px-4 py-3 w-full border border-gray shadow-md"
                      />
                    ) : (
                      <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                        {eventEndTime}
                      </h1>
                    )}
                  </div>
                  <div className="my-4 flex flex-col w-full">
                    <h1 className="font-semibold">Event End Date</h1>
                    {editMode ? (
                      <input
                        value={eventEndDate}
                        onChange={(e) => setEventEndDate(e.target.value)}
                        type="date"
                        required
                        placeholder="Name of the event"
                        className="rounded-md px-4 py-3 w-full border border-gray shadow-md"
                      />
                    ) : (
                      <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                        {dateFormat(eventEndDate)}
                      </h1>
                    )}
                  </div>
                </div>
                <div className="my-4 flex flex-col">
                  <h1 className="font-semibold">Event Location</h1>
                  {editMode ? (
                    <input
                      value={eventLocation}
                      onChange={(e) => setEventLocation(e.target.value)}
                      type="text"
                      required
                      placeholder="Name of the event"
                      className="rounded-md px-2 py-3 w-full border border-gray"
                    />
                  ) : (
                    <h1 className="rounded-md px-2 py-3 w-full border border-gray shadow-md">
                      {eventLocation}
                    </h1>
                  )}
                </div>
                <div className="my-4 flex flex-col">
                  <h1 className="font-semibold">Additional Info</h1>
                  {editMode ? (
                    <input
                      value={eventotherInfo}
                      onChange={(e) => setEventOtherInfo(e.target.value)}
                      type="text"
                      required
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
                      <button
                        onClick={handleSubmit}
                        className="w-full text-center text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2"
                      >
                        {saving ? "Loading..." : "Save Event"}
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
                <div className="py-6">
                  <button
                    onClick={handleCopyLink}
                    className="w-full border-2 py-2 rounded-lg mt-6 flex justify-center items-center gap-4 text-primary border-primary font-[600]"
                  >
                    {buttonText} <FaLink size={20} />
                  </button>
                </div>
                <div className="overflow-x-auto py-6">
                  <h1 className="font-bold ">RSVP Member</h1>
                  <table className="text-left w-full whitespace-nowrap">
                    <thead>
                      <tr>
                        <th className="py-2">Name</th>
                        <th className="p-4">Email Address</th>
                        <th className="p-4">RSVP Status</th>
                        <th className="p-4">Additional People</th>
                        <th className="p-4">Message</th>
                      </tr>
                    </thead>
                    {rsvp.length === 0 && "No RSVP member"}
                    <tbody>
                      {rsvp.map((item, index) => (
                        <tr
                          key={index}
                          className="border-t-[1px] border-[#E4E7EC] font-semibold text-sm lg:text-base text-wrap"
                        >
                          <td className="py-4 capitalize">{item.name}</td>
                          <td className="p-4">{item.email}</td>
                          <td
                            className={`p-4 ${
                              item.isAttending === false
                                ? "text-red-500"
                                : "text-[#00C68D]"
                            }`}
                          >
                            {item.isAttending === false ? "NO" : "YES"}
                          </td>
                          <td className="p-4 capitalize">
                            {item.plusOnes.length > 0
                              ? item.plusOnes.join(", ")
                              : "None"}
                          </td>
                          <td className="p-4 capitalize text-wrap">
                            {item.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ToastContainer transition={Zoom} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
