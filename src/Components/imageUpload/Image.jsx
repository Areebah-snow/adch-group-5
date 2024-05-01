import { useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import LeftContent from "../../assets/Left Content.png";
import RightContent from "../../assets/Right Content.png";
import { ToastContainer, Zoom, toast } from "react-toastify";

const Image = ({ setPhotoURL, circle, photoURL, editMode }) => {
  const avatarUrl = useRef("");
  const [modalOpen, setModalOpen] = useState(false);
  avatarUrl.current = photoURL;

  const uploadImage = () => {
    const blob = new Blob([avatarUrl.current], { type: "image/jpeg" });
    const data = new FormData();
    data.append("file", blob);
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

        toast.success("Picture uploaded successfully", {
          theme: "colored",
          autoClose: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Error uploading picture" + err.message, {
          theme: "colored",
          autoClose: 1500,
        });
      });
  };

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
    uploadImage();
  };

  return (
    <div className="flex flex-col items-start pt-12">
      <div className="relative">
        {avatarUrl.current ? (
          <img
            src={avatarUrl.current}
            alt="Upload Event Image"
            className={`w-[170px] h-[170px] ${
              circle ? "rounded-full" : ""
            } border-2 border-grey`}
          />
        ) : (
          <span className="py-20 rounded-md px-14 mx-auto border-grey border-2 flex items-center justify-center">
            <img src={LeftContent} alt="hug" className="inline mr-2" />
            <img src={RightContent} alt="hug" className="inline" />
          </span>
        )}
        {(editMode == undefined || editMode != false) && (
          <button
            className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray border border-gray-600 bg-grey"
            title="Change photo"
            onClick={() => setModalOpen(true)}
          >
            <PencilIcon />
          </button>
        )}
      </div>

      {modalOpen && (
        <Modal
          circle={circle}
          editMode={editMode}
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Image;
