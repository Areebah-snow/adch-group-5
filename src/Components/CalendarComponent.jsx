import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://db-lhsk5bihpq-uc.a.run.app/api/event/getEvents")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const eventDates = events.map((event) => new Date(event.date));

  const tileClassName = ({ date }) => {
    if (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    ) {
      return "current-date";
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 py-8 border border-[#E4E7EC] mt-[30px]">
      <h1 className="text-[#101928] text-lg font-semibold">Calendar</h1>
      <div className="grid grid-cols-1 gap-y-4">
        <div className="col-span-1">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={tileClassName}
            formatShortWeekday={(locale, date) => {
              return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()];
            }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 pb-96">
          {events
            .filter(
              (event) =>
                new Date(event.date).toDateString() ===
                selectedDate.toDateString()
            )
            .map((event, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm font-normal text-[#161C2D]">
                  {event.date}: {event.time}
                </p>
                <p className="text-base text-primary font-bold mt-2">
                  {event.name}
                </p>
                <p className="text-sm text-dark text-wrap w-64 font-bold mt-2">
                  {event.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;