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
        <div className="flex flex-col px-6 lg:px-20 mt-12">
          <div className="w-80">
            <h1 className="font-black text-3xl">My Profile</h1>
            <img
              width="100%"
              className="rounded-full mt-6"
              src={auth.currentUser?.photoURL || profilepic}
              alt="profile pic"
            />
          </div>
          <h1 className="mt-12 font-semibold text-2xl text-zinc-400 flex items-center gap-2">
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
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
