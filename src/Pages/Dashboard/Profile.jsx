import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import Nav from "../../Components/Nav";
import { auth } from "../../../firebaseConfig";
import profilepic from "../../assets/default.png";

const Profile = () => {
  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
        <Nav />
        <div className="flex flex-col">
          <div className="w-80">
            <img
              width="100%"
              className="rounded-full"
              src={auth.currentUser?.photoURL || profilepic}
              alt="profile pic"
            />
          </div>
          <h1 className="mt-12 font-bold text-2xl text-primary">Full name</h1>
          <h1 className="p-2 font-semibold border-2 border-primary w-fit rounded-xl">
            {auth.currentUser?.displayName}
          </h1>
          <h1 className="mt-8 font-bold text-2xl text-primary">
            Email Address
          </h1>
          <h1 className="p-2 font-semibold border-2 border-primary w-fit rounded-xl">
            {auth.currentUser?.email}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
