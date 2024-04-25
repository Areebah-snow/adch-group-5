/* eslint-disable react/no-unescaped-entities */
import Sidebar from "../../Components/Sidebar";
import Nav from "../../Components/Nav";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

const AllEvents = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB] min-h-[90vh] cmx-10 p-4">
            <table className="text-left" width="100%">
              <thead>
                <tr>
                  <th className="py-2">Recent Events</th>
                  <th className="py-4">Created</th>
                  <th className="py-4">Event Day</th>
                  <th className="py-4">Stats</th>
                  <th className="py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Queen Arit's Birthday</td>
                  <td>1 Jul, 2023</td>
                  <td>28 Feb, 2025</td>
                  <td>Open</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Muhammed's Wedding</td>
                  <td>1 Jul, 2023</td>
                  <td>3 Sep, 2025</td>
                  <td>Draft</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Aishat's House Warming</td>
                  <td>21 Aug, 2026</td>
                  <td>3 Sep, 2025</td>
                  <td>Draft</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Hackathon Party</td>
                  <td>30 Jun, 2024</td>
                  <td>31 Dec, 2024</td>
                  <td>Event Completed</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Hackathon Party</td>
                  <td>30 Jun, 2024</td>
                  <td>31 Dec, 2024</td>
                  <td>Event Completed</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Hackathon Party</td>
                  <td>30 Jun, 2024</td>
                  <td>31 Dec, 2024</td>
                  <td>Event Completed</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Hackathon Party</td>
                  <td>30 Jun, 2024</td>
                  <td>31 Dec, 2024</td>
                  <td>Event Completed</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
                <tr className="border-t-[1px] border-[#E4E7EC] font-semibold">
                  <td className="py-4">Hackathon Party</td>
                  <td>30 Jun, 2024</td>
                  <td>31 Dec, 2024</td>
                  <td>Event Cancelled</td>
                  <td className="flex items-center py-4 gap-2">
                    <FaPen size={25} color="#667185" role="button" />
                    <LuEye size={25} color="#667185" role="button" />
                    <RiDeleteBin6Fill size={25} color="red" role="button" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
