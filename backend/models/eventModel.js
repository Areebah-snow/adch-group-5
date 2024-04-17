import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  name: { type: "String", required: true, trim: true },
  description: { type: "String", trim: true },
  location: { type: "String", required: true, trim: true },
  photoURL: {
    type: "String",
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
