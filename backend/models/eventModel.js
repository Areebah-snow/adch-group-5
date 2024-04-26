import mongoose from "mongoose";
import RSVP from "./rsvpModel.js";
const eventSchema = mongoose.Schema(
  {
    name: { type: "String", required: true, trim: true },
    description: { type: "String", trim: true },
    location: { type: "String", trim: true },
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
    startDate: { type: Date },
    endDate: { type: Date },
    acceptedCount: { type: Number, default: 0 },
    totalCount: { type: Number, default: 0 },
    stats: { type: String, required: true, default: "Open", trim: true },
  },
  { timestamps: true }
);
const conditionalValidation = function () {
  return this.stats !== "draft";
};
eventSchema
  .path("description")
  .required(conditionalValidation, "Description is required");
eventSchema
  .path("location")
  .required(conditionalValidation, "Location is required");
eventSchema
  .path("startDate")
  .required(conditionalValidation, "Start Date is required");
eventSchema
  .path("endDate")
  .required(conditionalValidation, "End Date is required");

eventSchema.pre("findOneAndDelete", async function (next) {
  try {
    await RSVP.deleteMany({ event: this.getQuery()._id });
    next();
  } catch (error) {
    next(error);
  }
});
const Event = mongoose.model("Event", eventSchema);

export default Event;
