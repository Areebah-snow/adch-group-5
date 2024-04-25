import expressAsyncHandler from "express-async-handler";
import RSVP from "../models/rsvpModel.js";

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
      val = -1;
    }
    await Event.findByIdAndUpdate(event, { $inc: { acceptedCount: val } });
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

export { createRSVP, getRSVPByURL, getRSVPs };
