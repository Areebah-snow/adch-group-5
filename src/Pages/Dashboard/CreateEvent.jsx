import { useState } from "react";
import Nav from "../../Components/Nav";
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { auth } from "../../../firebaseConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClockLoader from "react-spinners/ClipLoader";

const CreateEvent = () => {
  const [eventName, seteventName] = useState("");
  const [eventDescription, seteventDescription] = useState("");
  const [eventStartTime, seteventStartTime] = useState("");
  const [eventStartDate, seteventStartDate] = useState("");
  const [eventEndTime, seteventEndTime] = useState("");
  const [eventEndDate, seteventEndDate] = useState([]);
  const [eventLocation, seteventLocation] = useState("");
  const [eventotherInfo, seteventotherInfo] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let result = true;
    if (eventName === "" || eventName === null) {
      result = false;
      toast.warning("Input the event name", {
        theme: "colored",
        autoClose: 3000,
      });
    }

    if (eventDescription === "" || eventDescription === null) {
      result = false;
      toast.warning("Input the event description", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    if (eventStartTime === "" || eventStartTime === null) {
      result = false;
      toast.warning("Pick a time", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    if (eventStartDate === "" || eventStartDate === null) {
      result = false;
      toast.warning("Pick a date", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    if (eventEndTime === "" || eventEndTime === null) {
      result = false;
      toast.warning("Pick the time ending", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    if (eventEndDate === "" || eventEndDate === null) {
      result = false;
      toast.warning("Pick the date ending", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    if (eventLocation === "" || eventLocation === null) {
      result = false;
      toast.warning("Input the event location", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    if (photoURL === "" || photoURL === null) {
      result = false;
      toast.warning("Upload the event picture", {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      const currentDate = new Date();
      const selectedDateTime = new Date(`${eventStartDate}T${eventStartTime}`);

      if (selectedDateTime < currentDate) {
        result = false;
        toast.warning("Selected date and time must be in the future", {
          theme: "colored",
          autoClose: 3000,
        });
      }
    }
    return result;
  };
  const uploadImage = (image) => {
    setIsLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "adch-05");
    data.append("cloud_name", "dmtxpxm7m");
    fetch("  https://api.cloudinary.com/v1_1/dmtxpxm7m/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPhotoURL(data.url);
        console.log(data.url);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);

      const requestData = {
        name: eventName,
        description: eventDescription,
        additionalInfo: eventotherInfo,
        startDate: eventStartDate,
        endDate: eventEndDate,
        stats: "Open",
        photoURL: photoURL,
        location: eventLocation,
      };
      console.log(requestData);

      const instance = axios.create({
        baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
        headers: {
          Authorization: `Bearer ${auth.currentUser.accessToken}`,
        },
      });

      instance
        .post("api/event/createEvent", requestData)
        .then((res) => {
          setIsLoading(false);
          localStorage.setItem("createdEvent", JSON.stringify(requestData));
          const eventId = res.data._id;
          setTimeout(() => {
            navigate(`/createevent/eventsuccess/${eventId}`);
          }, 1500);
          toast.success("Event created successfully", {
            theme: "colored",
            autoClose: 1500,
          });
          setTimeout(() => {
            navigate(`/createevent/eventsuccess/${eventId}`);
          }, 1500);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error("An error occoured: " + error.message, {
            theme: "colored",
            autoClose: 3000,
          });
        });
    }
  };
  const handleDraft = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);

      const requestData = {
        name: eventName,
        description: eventDescription,
        additionalInfo: eventotherInfo,
        startDate: eventStartDate,
        endDate: eventEndDate,
        stats: "Draft",
        photoURL: photoURL,
        location: eventLocation,
      };
      console.log(requestData);

      const instance = axios.create({
        baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
        headers: {
          Authorization: `Bearer ${auth.currentUser.accessToken}`,
        },
      });

      instance
        .post("api/event/createEvent", requestData)
        .then(() => {
          setIsLoading(false);
          toast.success("Event saved for later", {
            theme: "colored",
            autoClose: 3000,
          });
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error("An error occoured: " + error.message, {
            theme: "colored",
            autoClose: 3000,
          });
        });
    }
  };
  return (
    <div>
      <div>
        <Sidebar />
        <Mobilesidebar />
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB] md:p-10 p-4">
            <div className="text-center max-w-[600px] mx-auto my-4">
              <h2 className="font-bold text-[24px]">Build your event page</h2>
              <h3 className="font-[500] ">
                Include comprehensive information about your event, ensuring
                that attendees are well-informed about the specifics and have a
                clear understanding of what to anticipate.
              </h3>
            </div>
            <div>
              <div className="my-4 flex flex-col">
                <label className="font-semibold">Event Name</label>
                <input
                  value={eventName}
                  onChange={(e) => seteventName(e.target.value)}
                  type="text"
                  placeholder="Name of the event"
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <div className="my-4 flex flex-col">
                <label className="font-semibold">Event Description</label>
                <input
                  value={eventDescription}
                  onChange={(e) => seteventDescription(e.target.value)}
                  type="text"
                  placeholder="Give a brief description of the event..."
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <div className="flex flex-row-reverse md:flex-col gap-6 md:gap-0">
                <div className="my-4 w-full flex flex-col">
                  <label className="font-semibold">Start Time</label>
                  <input
                    value={eventStartTime}
                    onChange={(e) => seteventStartTime(e.target.value)}
                    type="time"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
                <div className="my-4 w-full flex flex-col">
                  <label className="font-semibold">Event Start Date</label>
                  <input
                    value={eventStartDate}
                    onChange={(e) => seteventStartDate(e.target.value)}
                    type="date"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse md:flex-col gap-6 md:gap-[0px]">
                <div className="my-4 w-full  flex flex-col">
                  <label className="font-semibold">End Time</label>
                  <input
                    value={eventEndTime}
                    onChange={(e) => seteventEndTime(e.target.value)}
                    type="time"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
                <div className="my-4 w-full flex flex-col">
                  <label className="font-semibold">Event End Date</label>
                  <input
                    value={eventEndDate}
                    onChange={(e) => seteventEndDate(e.target.value)}
                    type="date"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
              </div>
              <div className="my-4 flex flex-col">
                <label className="font-semibold">Event Location</label>
                <input
                  value={eventLocation}
                  onChange={(e) => seteventLocation(e.target.value)}
                  type="text"
                  placeholder="Enter event location..."
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <input
                type="text"
                value={eventotherInfo}
                onChange={(e) => seteventotherInfo(e.target.value)}
                placeholder="Other additional information"
                className="my-4 rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
              />
              <div className="my-4 flex flex-col">
                <label className="font-semibold">Upload Event Image</label>
                <input
                  onChange={(e) => uploadImage(e.target.files[0])}
                  type="file"
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <button
                onClick={handleDraft}
                className="w-full text-center text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2"
              >
                {isLoading ? (
                  <ClockLoader color="#473BF0" size={30} />
                ) : (
                  "Save for Later"
                )}
              </button>
              <button
                onClick={handleSubmit}
                className="w-full text-center border-2 border-[#473BF0] bg-[#473BF0] text-white py-2 rounded-xl mt-6"
              >
                {isLoading ? (
                  <ClockLoader color="white" size={30} />
                ) : (
                  "Create Event"
                )}
              </button>
            </div>
            <ToastContainer transition={Zoom} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
