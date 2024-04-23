import Event from "../models/eventModel.js";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
const createEvent = expressAsyncHandler(async (req, res) => {
  const creator = req.user;
  const {
    name,
    description,
    location,
    additionalInfo,
    photoURL,
    startDate,
    endDate,
    stats,
  } = req.body;

  try {
    const creatorUID = await User.findOne({ uid: creator.uid });
    const event = await Event.create({
      name,
      creator: creatorUID._id,
      description,
      location,
      additionalInfo,
      photoURL,
      startDate,
      endDate,
      stats,
    }).then(async (event) => {
      const result = await event.populate("creator");
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(403).send(error.message);
  }
});

const getEventByID = expressAsyncHandler(async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    //checking if event exist
    if (!event) {
      res.status(404);
      throw new Error("Not Found");
    }
    const populatedEvent = await event.populate("creator");
    res.status(200).json(populatedEvent);
  } catch (error) {
    res.status(402).send(error.message);
  }
});

const getAllEvents = expressAsyncHandler(async (req, res) => {
  try {
    Event.find({})
      //   .populate("creator")
      .then((events) => {
        res.status(200).json(events);
      });
  } catch (error) {
    res.status(404).send(error.message + "hello");
  }
});
export { createEvent, getEventByID, getAllEvents };
