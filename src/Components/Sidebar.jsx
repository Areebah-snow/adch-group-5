import React, { useState } from "react";
import DbLogo from "../assets/db_logo.svg";
import Db from "../assets/db.svg";
import Events from "../assets/events.svg";
import Help from "../assets/help.svg";
import Profile from "../assets/profile.svg";
import RSVP from "../assets/rsvp.svg";
import Sett from "../assets/settings.svg";
import Logout from "../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        // TODO: handle flow after signout
      })
      .catch((error) => {
        // TODO handle error
      });
  };
  return (
    <div className="w-full lg:h-screen grid gap-0 text-white">
      <aside className="w-[262px] flex-none h-full bg-primary text-white py-[2.375rem] px-0 hidden lg:flex flex-col lg:px-7 gap-8 justify-between">
        <div className="aside-top w-[135px]">
          <div className="w-full flex flex-col">
            <div className="w-fit flex items-center bg-transparent">
              <img src={DbLogo} alt="" className="w-full mr-1" />
            </div>
          </div>
          <nav className="mt-10">
            <ul className="w-full flex flex-col items-center justify-center gap-4 ">
              <li>
                <Link
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent"
                >
                  <img
                    src={Db}
                    alt=""
                    className="w-[1.5rem] mr-1 flex items-center justify-center"
                  />
                  <span className="text-base leading-[120%]">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent mr-8"
                >
                  <img
                    src={Events}
                    alt=""
                    className="w-[1.125rem] mr-1 flex items-center justify-center"
                  />
                  <span className="text-base leading-[120%]">Events</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent mr-8"
                >
                  <img src={Profile} alt="" className="w-[1.5rem] mr-1" />
                  <span className="text-base leading-[120%]">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent mr-12"
                >
                  <img src={RSVP} alt="" className="w-[1.5rem] mr-1" />
                  <span className="text-base leading-[120%]">RSVP</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent mr-8 mt-44"
                >
                  <img src={Sett} alt="" className="w-[1.5rem] mr-1" />
                  <span className="text-base leading-[120%] whitespace-pre">
                    Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent"
                >
                  <img src={Help} alt="" className="w-[1.5rem] mr-1" />
                  <span className="text-base leading-[120%] whitespace-pre">
                    Help Center
                  </span>
                </Link>
              </li>
              <li>
                <button
                  to="#"
                  className="w-fit flex items-center gap-2 bg-transparent mr-10"
                >
                  <img src={Logout} alt="" className="w-[1.25rem] mr-1" />
                  <span
                    className="text-base leading-[120%] text-error"
                    onClick={handleSignout}
                  >
                    Logout
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
