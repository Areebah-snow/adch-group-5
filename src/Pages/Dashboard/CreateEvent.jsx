import Nav from "../../Components/Nav";
import Sidebar from "../../Components/Sidebar";
import Mobilesidebar from "../../Components/Mobilesidebar";

const CreateEvent = () => {
  return (
    <div>
      <div>
        <Sidebar />
        <Mobilesidebar />
        <div className="lg:ml-[17%]">
          <Nav />
          <div className="bg-[#F9FAFB] md:p-10 p-4">
            <div className="text-center max-w-[600px] mx-auto my-4">
              <h2 className="font-bold text-[24px]">Build your event page</h2>
              <h3 className="font-[500] ">
                Include comprehensive information about your event, ensuring
                that attendees are well-informed about the specifics and have a
                clear understanding of what to anticipate.
              </h3>
            </div>
            <form action="">
              <div className="my-4">
                <label className="font-semibold">Event Name</label>
                <input
                  type="text"
                  placeholder="Name of the event"
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <div className="my-4">
                <label className="font-semibold">Event Description</label>
                <input
                  type="text"
                  placeholder="Give a brief description of the event..."
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <div className="flex flex-row-reverse md:flex-col gap-6 md:gap-0">
                <div className="my-4 w-full">
                  <label className="font-semibold">Start Time</label>
                  <input
                    type="time"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
                <div className="my-4 w-full">
                  <label className="font-semibold">Event Start Date</label>
                  <input
                    type="date"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse md:flex-col gap-6 md:gap-[0px]">
                <div className="my-4 w-full">
                  <label className="font-semibold">End Time</label>
                  <input
                    type="time"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
                <div className="my-4 w-full">
                  <label className="font-semibold">Event End Date</label>
                  <input
                    type="date"
                    className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                  />
                </div>
              </div>
              <div className="my-4">
                <label className="font-semibold">Event Location</label>
                <input
                  type="text"
                  placeholder="Enter event location..."
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <input
                type="text"
                placeholder="Other additional information"
                className="my-4 rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
              />
              <div className="my-4">
                <label className="font-semibold">Upload Event Image</label>
                <input
                  type="file"
                  className="rounded-md px-4 py-3 w-full border border-gray outline-none shadow-md"
                />
              </div>
              <button className="w-full text-[#473BF0] border-[#473BF0] font-semibold border-2 rounded-xl py-2">
                Save for Later
              </button>
              <button className="w-full border-2 border-[#473BF0] bg-[#473BF0] text-white py-2 rounded-xl mt-6">
                Create Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
