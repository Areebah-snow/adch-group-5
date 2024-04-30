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
import { FaPen } from "react-icons/fa6";
import { ToastContainer, Zoom, toast } from "react-toastify";

const Rsvp = () => {
  const [RSVP, SetRSVP] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState({});
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState({});
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser?.accessToken}`,
    },
  });

  useEffect(() => {
    setLoading(true);
    instance
      .get("/api/rsvp")
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        SetRSVP(res.data);
        res.data.forEach((item) => {
          setStatus((prevStatus) => ({
            ...prevStatus,
            [item._id]: item.isAttending,
          }));
          setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [item._id]: false,
          }));
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  const notAttendingRSVP = RSVP.filter((item) => item.isAttending === false);
  const attendingRSVP = RSVP.filter((item) => item.isAttending === true);

  const handleChangeStatus = (id, newStatus) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: newStatus,
    }));
  };

  const handleSubmit = (eventID) => {
    setSaving(true);

    const updateData = {
      _id: eventID,
      isAttending: status[eventID],
    };
    console.log(updateData);

    instance
      .put(`/api/rsvp`, updateData)
      .then(() => {
        setSaving(false);
        setEditMode((prevEditMode) => ({
          ...prevEditMode,
          [eventID]: false,
        }));
        toast.success("Status updated successfully", {
          theme: "colored",
          autoClose: 1500,
        });
        instance
          .get("/api/rsvp")
          .then((res) => {
            SetRSVP(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setSaving(false);
        toast.error("An error occoured: " + error.message, {
          theme: "colored",
          autoClose: 3000,
        });
      });
  };

  const formatDate = (dateTimeString) => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    const formattedDateTime = new Date(dateTimeString).toLocaleDateString(
      "en-GB",
      options
    );
    return formattedDateTime;
  };

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
                <p className="px-5 pb-12 text-[#1D2739] font-semibold">No</p>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto">
              <h1 className=" font-[600] text-[18px]">Previous RSVP list</h1>
              <table className="text-left w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="py-2">Event Name</th>
                    <th className="p-4">RSVP Status</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Additional People</th>
                    <th className="p-4">Edit Status</th>
                  </tr>
                </thead>
                <tbody className=" capitalize font-semibold">
                  {loading ? (
                    <ClockLoader color="black" size={50} />
                  ) : RSVP.length === 0 ? (
                    "No previous RSVPs found"
                  ) : (
                    RSVP.map((item) => (
                      <tr key={item._id}>
                        <td className="py-4">{item.event.name}</td>{" "}
                        <td
                          className={`p-4 ${
                            item.isAttending === false
                              ? "text-red-500"
                              : "text-[#00C68D]"
                          }`}
                        >
                          {editMode[item._id] ? (
                            <div>
                              <select
                                autoFocus
                                value={status[item._id]}
                                onChange={(e) =>
                                  handleChangeStatus(item._id, e.target.value)
                                }
                              >
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                              </select>
                            </div>
                          ) : item.isAttending === false ? (
                            "NO"
                          ) : (
                            "YES"
                          )}
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
                        <td className="p-4">
                          {editMode[item._id] ? (
                            <div className="flex gap-2">
                              <button
                                className="border border-primary rounded px-2"
                                onClick={() => handleSubmit(item._id)}
                              >
                                {saving ? <ClockLoader size={20} /> : "Save"}
                              </button>
                              <button
                                className="border border-primary rounded px-2"
                                onClick={() =>
                                  setEditMode((prevEditMode) => ({
                                    ...prevEditMode,
                                    [item._id]: false,
                                  }))
                                }
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <FaPen
                              role="button"
                              size={20}
                              onClick={() =>
                                setEditMode((prevEditMode) => ({
                                  ...prevEditMode,
                                  [item._id]: true,
                                }))
                              }
                            />
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <ToastContainer transition={Zoom} />
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Rsvp;
