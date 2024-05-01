/* eslint-disable react/prop-types */
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import Nav from "../../Components/Nav";
import { auth } from "../../../firebaseConfig";
import profilepic from "../../assets/default.png";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import Image from "../../Components/imageUpload/Image";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { ToastContainer, Zoom, toast } from "react-toastify";
const Profile = () => {
  const [photoURL, setPhotoURL] = useState(
    auth.currentUser.photoURL || profilepic
  );
  const [editMode, setEditMode] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [name, setName] = useState(auth.currentUser.displayName);
  const handleUpdate = async () => {
    setUpdateMode(true);
    updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
      .then(() => {
        setUpdateMode(false);
        setEditMode(false);
        toast.success("Profile Updated Successfully");
      })
      .catch((error) => {
        setUpdateMode(false);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
        <Nav />
        <div className="flex flex-col px-6 lg:px-20 mt-12 justify-between items-start">
          <h1 className="font-semibold text-4xl mb-4">My Profile</h1>
          <div className="w-80">
            {editMode ? (
              <>
                <h1 className="font-semibold text-xl md:text-2xl">
                  Profile Picture
                </h1>
                <input
                  // value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  type="file"
                  autoFocus
                  required
                />
              </>
            ) : (
              <Image
                circle={true}
                editMode={false}
                setPhotoURL={setPhotoURL}
                photoURL={photoURL}
              />
            )}
          </div>
          {editMode ? (
            <>
              <h1 className="font-semibold text-xl md:text-2xl mt-4">
                Fullname
              </h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                autoFocus
                required
                placeholder="Name of the event"
                className="rounded-md px-2 py-3 border border-gray"
              />
            </>
          ) : (
            <ProfileItem
              icon={<IoPersonCircleOutline />}
              category={"Fullname:"}
              item={auth.currentUser?.displayName}
            />
          )}
          <ProfileItem
            icon={<IoIosMail />}
            category={"Email:"}
            item={auth.currentUser?.email}
          />
          <ProfileItem
            icon={<MdVerified />}
            category={"Email Verification:"}
            item={
              auth.currentUser?.emailVerified === true
                ? "Verified"
                : "Not Verified"
            }
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

          <div>
            {editMode ? (
              <button
                className="mt-6 bg-primary text-white px-4 py-2 font-semibold text-xl rounded-lg"
                onClick={handleUpdate}
              >
                {updateMode ? "Loading..." : "Save Profile"}
              </button>
            ) : (
              <button
                className="mt-6 bg-white text-primary border px-4 py-2 font-semibold text-xl rounded-lg"
                onClick={() => setEditMode(!editMode)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <ToastContainer transition={Zoom} />
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
