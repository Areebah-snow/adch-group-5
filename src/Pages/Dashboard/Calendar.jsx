import Sidebar from "../../Components/Sidebar";
import Nav from "../../Components/Nav";
import CalendarComponent from "../../Components/CalendarComponent";

const Calendar = () => {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-[17%]">
        <Nav />
        <div className="bg-[#F9FAFB]">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
