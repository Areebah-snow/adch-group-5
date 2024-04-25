import express from "express";
import {
  createEvent,
  getAllEvents,
  getAllEventsByUser,
  getEventByID,
  updateEvent,
} from "../controllers/eventController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createEvent", protect, createEvent);
router.route("/getAllEvents").get(getAllEvents);
router.route("/getEvents").get(getAllEventsByUser);
router.get("/:id", protect, getEventByID);
router.route("/").put(protect, updateEvent);

export default router;
