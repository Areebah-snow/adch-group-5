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
import { MdCancel } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Sidebar = () => {
  const [eventlist, seteventlist] = useState(false);
  const [menubar, setmenubar] = useState(false);
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
    <>
      <div className="lg:hidden absolute right-4 top-4">
        <BiMenuAltRight
          onClick={() => setmenubar(!menubar)}
          role="button"
          color="#AAA5F8"
          size={40}
        />
      </div>
      <div
        className={`w-[60%] absolute lg:hidden right-0 top-0 bottom-0 h-screen text-[#FFECE5] bg-primary  flex flex-col gap-8 py-6 px-0 z-10 ${
          menubar ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        {" "}
        <aside>
          <MdCancel onClick={() => setmenubar(!menubar)} size={40} />
          <img src={DbLogo} alt="" className="w-full my-2" />
          <div className="flex flex-col justify-between h-[70vh]">
            <div>
              <NavLink onClick={() => setmenubar(!menubar)} to="/dashboard">
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
                      <NavLink
                        onClick={() => setmenubar(!menubar)}
                        to="/createevent"
                      >
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
                      <NavLink
                        onClick={() => setmenubar(!menubar)}
                        to="/allevents"
                      >
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
                      <NavLink
                        onClick={() => setmenubar(!menubar)}
                        to="/calendar"
                      >
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
              <NavLink onClick={() => setmenubar(!menubar)} to="/profile">
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
              <NavLink onClick={() => setmenubar(!menubar)} to="/rsvp">
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
              <NavLink onClick={() => setmenubar(!menubar)} to="/settings">
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
              <NavLink onClick={() => setmenubar(!menubar)} to="/helpcenter">
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
              <NavLink
                onClick={() => setmenubar(!menubar)}
                className="flex items-center p-2 gap-4 hover:bg-[#FFECE5] hover:text-primary my-2"
              >
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
    </>
  );
};

export default Sidebar;
