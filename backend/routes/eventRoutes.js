import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventByID,
} from "../controllers/eventController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createEvent", protect, createEvent);
router.route("/getEvents").get(getAllEvents);
router.route("/:id").get(protect, getEventByID);

export default router;
