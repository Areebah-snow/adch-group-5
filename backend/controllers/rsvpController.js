import expressAsyncHandler from "express-async-handler";
import RSVP from "../models/rsvpModel.js";
import Event from "../models/eventModel.js";
import axios from "axios";
const createRSVP = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, isAttending, event, message } = req.body;
    const plusOnes = req.body.plusOnes || undefined;
    const rsvp = await RSVP.findOne({ event, email });
    if (rsvp != undefined) {
      throw new Error(
        "You have already rsvp'ed using this email , please use another email address"
      );
    }
    var newRSVP = await RSVP.create({
      name,
      email,
      isAttending,
      plusOnes,
      event,
      message,
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
    const eventDetails = await Event.findByIdAndUpdate(event, {
      $inc: { totalCount: 1, acceptedCount: val },
    });
    axios.post("https://db-lhsk5bihpq-uc.a.run.app/api/email/", {
      to: email,
      subject: "RSVP made",
      text: `Congratulations
            You succesfully RSVP'd for ${eventDetails.name}.
            Below are the details of your event:
            Event Name:${eventDetails.name}
            Event Location:${eventDetails.location}
            Event Start Date:${eventDetails.startDate}
            Event End Date:${eventDetails.endDate}
            Description:${eventDetails.description}
            Looking forward to seeing you.`,
      html: `<p>Congratulations</p><p>You succesfully RSVP'd for ${eventDetails.name}.</p>
            <p>Below are the details of your event:</p>
            <p>Event Name:${eventDetails.name}</p>
            <p>Event Location:${eventDetails.location}</p>
            <p>Event Start Date:${eventDetails.startDate}</p>
            <p>Event End Date:${eventDetails.endDate}</p>
            <p>Description:${eventDetails.description}</p>
            <p>Looking forward to seeing you.</p>`,
    });

    res.status(200).json(newRSVP);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const getRSVPById = expressAsyncHandler(async (req, res) => {
  const _id = req.params.id;
  try {
    RSVP.findById(_id)
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
    const plusOnes = req.body.plusOnes || undefined;
    var oldRSVP = await RSVP.findById(_id);
    if (oldRSVP.email != user.email) {
      throw new Error("User don't have required permission");
    }
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
const getRsvpByEvent = expressAsyncHandler(async (req, res) => {
  try {
    const event = req.params.event;
    var rsvps = await RSVP.find({ event });
    res.status(200).json(rsvps);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { createRSVP, getRSVPById, getRSVPs, updateRSVP, getRsvpByEvent };
