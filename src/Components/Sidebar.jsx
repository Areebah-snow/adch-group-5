import { useState } from "react";
import DbLogo from "../assets/db_logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { GoHome } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Sidebar = () => {
  const [eventlist, seteventlist] = useState(false);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth).then(() => {
      console.log("Signed out successfully");
      navigate("/login");
      // TODO: handle flow after signout
    });
    // .catch((error) => {
    // TODO handle error
    // });
  };
  return (
    <div className="w-[17%] fixed left-0 top-0 bottom-0 lg:h-screen text-[#FFECE5] bg-primary hidden lg:flex flex-col lg:px-7 gap-8 py-[2.375rem] px-0 z-10">
      <aside>
        <img src={DbLogo} alt="" className="w-full my-2" />
        <div className="flex flex-col justify-between h-[70vh]">
          <div>
            <NavLink to="/dashboard">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive && "bg-[#FFECE5] text-primary"
                  } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2`}
                >
                  <GoHome size={30} />
                  <span className="text-base leading-[120%]">Dashboard</span>
                </div>
              )}
            </NavLink>
            <NavLink onClick={() => seteventlist(!eventlist)}>
              <div>
                <div
                  className={`flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary`}
                >
                  <CiCalendar size={40} />
                  <div className="flex justify-between ite w-full">
                    <span className="text-base leading-[120%]">Events</span>
                    {eventlist ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                </div>
                {eventlist && (
                  <div className="ml-10">
                    <NavLink to="/createevent">
                      {({ isActive }) => (
                        <div
                          className={`${
                            isActive && "bg-[#FFECE5] text-primary"
                          } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-1`}
                        >
                          <span className="text-base leading-[120%]">
                            Create Event
                          </span>
                        </div>
                      )}
                    </NavLink>
                    <NavLink to="/allevents">
                      {({ isActive }) => (
                        <div
                          className={`${
                            isActive && "bg-[#FFECE5] text-primary"
                          } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-1`}
                        >
                          <span className="text-base leading-[120%]">
                            All Events
                          </span>
                        </div>
                      )}
                    </NavLink>
                    <NavLink to="/upcommingevents">
                      {({ isActive }) => (
                        <div
                          className={`${
                            isActive && "bg-[#FFECE5] text-primary"
                          } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-1`}
                        >
                          <span className="text-base leading-[120%]">
                            Upcoming Events
                          </span>
                        </div>
                      )}
                    </NavLink>
                    <NavLink to="/pastevents">
                      {({ isActive }) => (
                        <div
                          className={`${
                            isActive && "bg-[#FFECE5] text-primary"
                          } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-1`}
                        >
                          <span className="text-base leading-[120%]">
                            Past Events
                          </span>
                        </div>
                      )}
                    </NavLink>
                    <NavLink to="/calendar">
                      {({ isActive }) => (
                        <div
                          className={`${
                            isActive && "bg-[#FFECE5] text-primary"
                          } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-1`}
                        >
                          <span className="text-base leading-[120%]">
                            Calendar
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </div>
                )}
              </div>
            </NavLink>
            <NavLink to="/profile">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive && "bg-[#FFECE5] text-primary"
                  } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2`}
                >
                  <IoPersonOutline size={30} />
                  <span className="text-base leading-[120%]">Profile</span>
                </div>
              )}
            </NavLink>
            <NavLink to="/rsvp">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive && "bg-[#FFECE5] text-primary"
                  } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2`}
                >
                  <GrNotes size={30} />
                  <span className="text-base leading-[120%]">RSVP</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            <NavLink to="/settings">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive && "bg-[#FFECE5] text-primary"
                  } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2`}
                >
                  <IoSettingsOutline size={30} />
                  <span className="text-base leading-[120%] [#FFECE5]space-pre">
                    Settings
                  </span>
                </div>
              )}
            </NavLink>
            <NavLink to="/helpcenter">
              {({ isActive }) => (
                <div
                  className={`${
                    isActive && "bg-[#FFECE5] text-primary"
                  } flex items-center rounded-lg p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2`}
                >
                  <MdOutlineHeadsetMic size={30} />
                  <span className="text-base leading-[120%] [#FFECE5]space-pre">
                    Help Center
                  </span>
                </div>
              )}
            </NavLink>
            <NavLink className="flex items-center p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2">
              <FiLogOut size={30} />
              <span
                className="text-base leading-[120%] text-error"
                onClick={handleSignout}
              >
                Logout
              </span>
            </NavLink>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
