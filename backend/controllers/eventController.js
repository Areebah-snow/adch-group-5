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
    var event = await Event.create({
      name,
      creator: creatorUID._id,
      description,
      location,
      additionalInfo,
      photoURL,
      startDate,
      endDate,
      stats,
    });
    event = await event.populate("creator");
    res.status(200).json(event);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

const getEventByID = expressAsyncHandler(async (req, res) => {
  try {
    var event = await Event.findById(req.params.id);
    //checking if event exist
    if (!event) {
      res.status(404);
      throw new Error("Not Found");
    }
    var event = await event.populate("creator");
    if (event.stats == "draft" && req.user.uid != event.creator.uid) {
      res.status(400);
      throw new Error("User don't have required permission");
    } else {
      res.status(200).json(event);
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const getAllEvents = expressAsyncHandler(async (req, res) => {
  try {
    Event.find({ stats: { $ne: "draft" } })
      .populate("creator")
      .then((events) => {
        res.status(200).json(events);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const updateEvent = expressAsyncHandler(async (req, res) => {
  try {
    const user = req.user;

    const {
      name,
      description,
      location,
      additionalInfo,
      photoURL,
      startDate,
      endDate,
      stats,
      _id,
    } = req.body;
    var event = await Event.findById(_id);
    event = await Event.populate("creator");
    if (event.creator.uid != user.uid) {
      res.status(401);
      throw new Error("User dont have required permission");
    }
    var updatedEvent = await Event.findByIdAndUpdate(
      _id,
      {
        name,
        description,
        location,
        additionalInfo,
        photoURL,
        startDate,
        endDate,
        stats,
      },
      { new: true }
    );
    updatedEvent = await updatedEvent.populate("creator");
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message);
  }
});
const getAllEventsByUser = expressAsyncHandler(async (req, res) => {
  try {
    const uid = req.user.uid;
    const user = await User.findOne({ uid });
    const limit = req.params.filter == 0 ? 5 : 0;

    const currentDate = new Date();
    var query = { creator: user._id };
    if (req.params.filter == 1) {
      query.stats = { $ne: "Drafts" };
    } else if (req.params.filter == 2) {
      query.stats = { $nin: ["Drafts", "Closed"] };
    }
    Event.updateMany({ endDate: { $lt: currentDate } }, { stats: "Closed" })
      .then(async () => {
        const events = await Event.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .populate("creator");
        res.status(200).json(events);
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
const deleteEvent = expressAsyncHandler(async (req, res) => {
  try {
    const uid = req.user.uid;
    const { _id } = req.body;
    var event = await Event.findById(_id).populate("creator");

    if (event == undefined) {
      throw new Error("No event found");
    }

    if (event.creator.uid != uid) {
      throw new Error("User don't have reqd permissions");
    }
    await Event.findOneAndDelete({ _id, creator: event.creator._id });
    res.status(200).send("Event Deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
const searchEvent = expressAsyncHandler(async (req, res) => {
  try {
    const searchTerm = req.params.searchTerm;
    const regex = new RegExp(searchTerm, "i");
    const user = await User.find({ uid: req.user.uid });
    const events = await Event.find({
      creator: user._id,
      name: { $regex: regex },
    })
      .populate("creator")
      .sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  createEvent,
  getEventByID,
  getAllEvents,
  updateEvent,
  getAllEventsByUser,
  deleteEvent,
  searchEvent,
};
