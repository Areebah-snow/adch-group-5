import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    name: { type: "String", required: true, trim: true },
    description: { type: "String", trim: true },
    location: { type: "String", required: true, trim: true },
    additionalInfo: { type: "String", trim: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    photoURL: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    acceptedCount: { type: Number },
    declinedCount: { type: Number },
    stats: { type: String, required: true, default: "Open", trim: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
