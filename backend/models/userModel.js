import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    name: { type: "String", required: true, trim: true },
    email: { type: "String", required: true, trim: true, unique: true },
    photoURL: {
      type: "String",
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
