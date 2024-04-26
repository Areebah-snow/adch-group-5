import mongoose from "mongoose";

const rsvpSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    plusOnes: [{ type: String, trim: true }],
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    isAttending: { type: Boolean, required: true },
    // urlId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const RSVP = mongoose.model("RSVP", rsvpSchema);

export default RSVP;
