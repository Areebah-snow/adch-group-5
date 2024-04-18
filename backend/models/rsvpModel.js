import mongoose from "mongoose";

const rsvpSchema = mongoose.Schema(
  {
    userRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    isAttending: { type: Boolean, required: true },
    plusOne: [{ type: "String", trim: true }],
  },
  { timestamps: true }
);

const RSVP = mongoose.model("RSVP", rsvpSchema);

export default Event;
