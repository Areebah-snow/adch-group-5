import expressAsyncHandler from "express-async-handler";
import RSVP from "../models/rsvpModel.js";
import Event from "../models/eventModel.js";
const createRSVP = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, isAttending, urlId, event } = req.body;
    const plusOnes = req.body.plusOnes
      ? JSON.parse(req.body.plusOnes)
      : undefined;
    var newRSVP = await RSVP.create({
      name,
      email,
      isAttending,
      urlId,
      plusOnes,
      event,
    });
    newRSVP = await newRSVP.populate("event");
    if (!newRSVP) {
      res.status(400);
      throw new Error("Unable to send rsvp");
    }
    var val;
    if (isAttending == true) {
      val = 1;
    } else {
      val = 0;
    }
    await Event.findByIdAndUpdate(event, {
      $inc: { totalCount: 1, acceptedCount: val },
    });
    res.status(400).json(newRSVP);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const getRSVPByURL = expressAsyncHandler(async (req, res) => {
  const urlId = req.params.id;
  try {
    RSVP.find({ urlId })
      .populate("event")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).send(error.message);
      });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const getRSVPs = expressAsyncHandler(async (req, res) => {
  const email = req.user.email;
  try {
    RSVP.find({ email })
      .populate("event")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(404).send(error.message);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
const updateRSVP = expressAsyncHandler(async (req, res) => {
  try {
    const user = req.user;
    const { name, isAttending, _id } = req.body;
    const plusOnes = req.body.plusOnes
      ? JSON.parse(req.body.plusOnes)
      : undefined;
    const oldRSVP = await RSVP.findById(_id);
    var updatedRSVP = await RSVP.findOneAndUpdate(
      { _id, email: user.email },
      { name, plusOnes, isAttending },
      { new: true }
    );
    updatedRSVP = await updatedRSVP.populate("event");
    if (oldRSVP.isAttending != isAttending) {
      var val;
      if (isAttending == true) {
        val = 1;
      } else {
        val = -1;
      }
      await Event.findByIdAndUpdate(oldRSVP.event, {
        $inc: { acceptedCount: val },
      });
    }

    res.status(200).json(updatedRSVP);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
export { createRSVP, getRSVPByURL, getRSVPs, updateRSVP };
