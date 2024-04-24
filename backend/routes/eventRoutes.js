import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventByID,
  updateEvent,
} from "../controllers/eventController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createEvent", protect, createEvent);
router.route("/getEvents").get(getAllEvents);
router.get("/:id", protect, getEventByID);
router.route("/").put(protect, updateEvent);

export default router;
