/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";
import Nav from "../../Components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  const [loading, isLoading] = useState(false);
  const [event, setEvent] = useState();
  const instance = axios.create({
    baseURL: "https://db-lhsk5bihpq-uc.a.run.app/",
    headers: {
      Authorization: `Bearer ${auth.currentUser.accessToken}`,
    },
  });

  useEffect(() => {
    isLoading(true);
    instance
      .get(`/api/event/${id}`)
      .then((res) => {
        isLoading(false);
        console.log(res.data);
        setEvent(res.data);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <div>
        <Sidebar />
        <Mobilesidebar />
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB]">
            {loading && "Loading..."}
            {event.map((item) => (
              <h1>{item.name}</h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
