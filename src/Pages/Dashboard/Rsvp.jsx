/* eslint-disable react/no-unescaped-entities */
import Nav from "../../Components/Nav";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Mobilesidebar from "../../Components/Mobilesidebar";

const Rsvp = () => {
  const events = [
    {
      id: 0,
      title: 20,
      details: "Total RSVPs",
      BackgroundColor: "#FCD2C2",
    },
    {
      id: 1,
      title: 13,
      BackgroundColor: "#FBE2B7",
      details: "Yess",
    },
    {
      id: 2,
      title: 2,
      details: "Maybe",
      BackgroundColor: "#B5E3C4",
    },
    {
      id: 3,
      title: 5,
      details: "No",
      BackgroundColor: "#FCD2C2",
    },
  ];
  return (
    <div>
      <Sidebar />
      <Mobilesidebar />
      <div className="lg:ml-[17%]">
        <>
          <Nav />
          <div className="bg-[#F9FAFB] p-10 min-h-[90vh]">
            <div className="flex justify-between items-center">
              <h1 className="text-[28px] font-[600]">RSVP's</h1>
              <Link to="/createevent">
                <button className="w-[161px] h-[56px] bg-primary rounded-xl text-white flex justify-center items-center gap-4">
                  Create Event
                  <AiOutlinePlusCircle size={25} />
                </button>
              </Link>
            </div>
            <div className="flex gap-6 justify-between mt-12 lg:flex-nowrap flex-wrap">
              {events.map((rsvp) => {
                return (
                  <div
                    className="rounded-xl w-[236px]"
                    style={{ backgroundColor: rsvp.BackgroundColor }}
                    key={rsvp.id}
                  >
                    <h3 className="font-bold p-5 text-[2rem]">{rsvp.title}</h3>
                    <p className="px-5 pb-12 text-[#1D2739] font-semibold">
                      {rsvp.details}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <h1 className="py-10 font-[600] text-[18px]">
                Queen Arit's Birthday RSVP list
              </h1>
              <table className="text-left" width="100%">
                <thead>
                  <tr>
                    <th className="py-2">Name</th>
                    <th className="py-4">Email Address</th>
                    <th className="py-4">RSVP Status</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Muhammed M.</td>
                    <td>muhammed@yahoo.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Ernest E.</td>
                    <td>lolaol@gmail.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Aishat J.</td>
                    <td>kiol@gmail.com</td>
                    <td>Yes</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Emmanuel O.</td>
                    <td>ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Solomon P.</td>
                    <td>ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Hritik H.</td>
                    <td>ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Uthman U.</td>
                    <td>ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                  <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                    <td className="py-4">Huncho O.</td>
                    <td>ol@gmail.com</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Rsvp;
