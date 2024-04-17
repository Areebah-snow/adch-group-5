import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: "String", required: true, trim: true },
  emailId: { type: "String", required: true, trim: true, unique: true },
  photoURL: {
    type: "String",
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
