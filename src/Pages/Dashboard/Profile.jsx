/* eslint-disable react/prop-types */
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import Nav from "../../Components/Nav";
import { auth } from "../../../firebaseConfig";
import profilepic from "../../assets/default.png";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
        <Nav />
        <div className="flex flex-col px-6 lg:px-20 mt-12 justify-between items-start">
          <h1 className="font-semibold text-4xl mb-4">My Profile</h1>
          <div className="w-80">
            <h1 className=" text-2xl my-2">Profile Picture</h1>
            <img
              width="35%"
              className="rounded-full aspect-square"
              src={auth.currentUser?.photoURL || profilepic}
              alt="profile pic"
            />
          </div>
          <ProfileItem
            icon={<IoPersonCircleOutline />}
            category={"Fullname:"}
            item={auth.currentUser?.displayName}
          />
          <ProfileItem
            icon={<IoIosMail />}
            category={"Email:"}
            item={auth.currentUser?.email}
          />
          <ProfileItem
            icon={<IoCall />}
            category={"Phone:"}
            item={
              auth.currentUser?.phoneNumber === null
                ? "No Phone Number Added"
                : auth.currentUser?.phoneNumber
            }
          />
          {/* <h1 className="mt-12 font-semibold text-2xl text-zinc-400 flex items-center gap-2">
            <IoPersonCircleOutline />
            Full name:
          </h1>
          <h1 className="font-semibold w-fit text-lg rounded-xl">
            {auth.currentUser?.displayName}
          </h1>
          <h1 className="mt-8 font-semibold text-2xl text-zinc-400 flex items-center gap-2">
            <IoIosMail />
            Email Address:
          </h1>
          <h1 className="font-semibold w-fit text-lg rounded-xl">
            {auth.currentUser?.email}
          </h1>

          <h1 className="mt-8 font-semibold text-2xl text-zinc-400 flex items-center gap-2">
            <IoCall />
            Phone Number:
          </h1>
          <h1 className="font-semibold w-fit text-lg rounded-xl">
            {auth.currentUser?.phoneNumber === null
              ? "Null"
              : auth.currentUser?.phoneNumber}
          </h1> */}
        </div>
      </div>
    </div>
  );
};
const ProfileItem = function ({ icon, item, category }) {
  return (
    <div className="flex justify center items-start gap-1 rounded-md p-4 pl-0">
      <span className="text-4xl md:text-3xl text-[#473bf0]">{icon}</span>
      <div className="flex flex-col justify-center items-start gap-1">
        <h1 className="font-semibold text-xl md:text-2xl">{category}</h1>
        <h2 className="text-l md:text-xl">{item}</h2>
      </div>
    </div>
  );
};
export default Profile;
