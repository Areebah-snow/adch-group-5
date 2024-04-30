import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, uid, photoURL, email } = req.user;
  try {
    var user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    }
    user = await User.create({ uid, photoURL, name, email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const updateUser = expressAsyncHandler(async (req, res) => {
  const { name, uid, photoURL, email } = req.user;
  try {
    User.findOneAndUpdate({ uid: uid }, { name, photoURL, email })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  const { uid } = req.user;
  try {
    User.findOneAndDelete({ uid: uid })
      .then(() => {
        res.status(200).send("User deleted successfully");
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const getUser = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const user = User.findOne({ email: { $eq: email } })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { registerUser, updateUser, deleteUser, getUser };
