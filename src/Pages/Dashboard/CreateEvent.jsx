import Sidebar from "../../Components/Sidebar";

const CreateEvent = () => {
  return (
    <div>
      <div>
        {/* <Sidebar /> */}
        <div className="">
          <h2 className="text-center">Build your event page</h2>
          <h3 className="text-center">
            Include comprehensive information about your event, ensuring that
            attendees are well-informed about the specifics and have a clear
            understanding of what to anticipate.
          </h3>
          <form action="">
            <div>
              <label>Event Name</label>
              <input type="text" className="w-[100%]" />
            </div>
            <div>
              <label>Event Description</label>
              <input type="text" className="w-[100%]" />
            </div>
            <div>
              <label>Start Time</label>
              <input type="time" className="w-[100%]" />
            </div>
            <div>
              <label>Event Start Date</label>
              <input type="date" className="w-[100%]" />
            </div>
            <div>
              <label>End Time</label>
              <input type="time" className="w-[100%]" />
            </div>
            <div>
              <label>Event End Date</label>
              <input type="date" className="w-[100%]" />
            </div>
            <div>
              <label>Event Location</label>
              <input type="text" className="w-[100%]" />
            </div>
            <input type="text" className="w-[100%]" />
            <div>
              <label>Upload Event Image</label>
              <input type="file" className="w-[100%]" />
            </div>
            <button className="w-[100%]">Save for Later</button>
            <button className="w-[100%]">Create Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
