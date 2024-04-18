import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    name: { type: "String", required: true, trim: true },
    description: { type: "String", trim: true },
    location: { type: "String", required: true, trim: true },
    additionalInfo: { type: "String", trim: true },
    photoURL: {
      type: "String",
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    acceptedCount: { type: Int32Array },
    declinedCount: { type: Int32Array },
    stats: { type: String, required: true, default: "Open", trim: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
