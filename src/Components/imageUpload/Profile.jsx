import { useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import LeftContent from "../../assets/Left Content.png";
import RightContent from "../../assets/Right Content.png";
const Profile = () => {
  const avatarUrl = useRef("");
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="flex flex-col items-start pt-12">
      <div className="relative">
        {avatarUrl.current ? (
          <img
            src={avatarUrl.current}
            alt="Upload Event Image"
            className="w-[170px] h-[170px] border-2 border-grey"
          />
        ) : (
          <span className="py-20 rounded-md px-14 mx-auto border-grey border-2 flex items-center justify-center">
            <img src={LeftContent} alt="hug" className="inline mr-2" />
            <img src={RightContent} alt="hug" className="inline" />
          </span>
        )}
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray border border-gray-600 bg-grey"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;
