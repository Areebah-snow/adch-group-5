import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { date: '2024-04-26', time: '12:00pm - 3:00pm', name:'Dr. Ernest McKelvin (Intro Party)', description: 'University of Ibadan, International Conference Center, Ibadan, Nigeria' },
  { date: '2024-04-30', time: '11:55pm', name:'Hackthon', description: 'Project deadline' },
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const eventDates = events.map(event => new Date(event.date));

  const tileClassName = ({ date }) => {
    if (eventDates.some(eventDate => date.toDateString() === eventDate.toDateString())) {
      return 'highlight';
    }
    return '';
  };

  const formatShortWeekday = (locale, date) => {
    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
  };

  return (
    <div className="container mx-auto px-4 py-8 border border-[#E4E7EC] mt-[30px]">
      <h1 className='text-[#101928] text-lg font-semibold'>Calendar</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-1">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={tileClassName}
            formatShortWeekday={formatShortWeekday}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 pb-96">
          {events
            .filter(event => new Date(event.date).toDateString() === selectedDate.toDateString())
            .map((event, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md">
                <p className="text-sm font-normal text-[#161C2D]">{event.date}: {event.time}</p>
                <p className="text-base text-primary font-bold mt-2">{event.name}</p>
                <p className="text-sm text-dark text-wrap w-64 font-bold mt-2">{event.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;