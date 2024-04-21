import Sidebar from "../../Components/Sidebar";

const CreateEvent = () => {
  return (
    <div>
      <div>
        {/* <Sidebar /> */}
        <div className="">
          <h2>Build your event page</h2>
          <h3>
            Include comprehensive information about your event, ensuring that
            attendees are well-informed about the specifics and have a clear
            understanding of what to anticipate.
          </h3>
          <form action="">
            <label>Event Name</label>
            <input type="text" width="100%" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
