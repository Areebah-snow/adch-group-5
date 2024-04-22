import Sidebar from "../../Components/Sidebar";

const CreateEvent = () => {
  return (
    <div>
      <div>
        {/* <Sidebar /> */}
        <div className="">
          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="font-bold text-[24px]">Build your event page</h2>
            <h3 className="font-[500] ">
              Include comprehensive information about your event, ensuring that
              attendees are well-informed about the specifics and have a clear
              understanding of what to anticipate.
            </h3>
          </div>
          <form action="">
            <div>
              <label className="font-semibold">Event Name</label>
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
            <button className="w-[100%] text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2">
              Save for Later
            </button>
            <button className="w-[100%] border-2 border-[#473BF0] bg-[#473BF0] text-white py-2 rounded-xl mt-6">
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
