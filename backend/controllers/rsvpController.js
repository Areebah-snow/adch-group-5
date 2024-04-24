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
    res.status(400).json(newRSVP);
  } catch (error) {
    res.status(400).send(error);
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
        res.status(400).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
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
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});

export { createRSVP, getRSVPByURL, getRSVPs };
