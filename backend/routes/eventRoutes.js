import express from "express";
import { createEvent, getEventByID } from "../controllers/eventController.js";
import protect from "../middlewares/authMiddleware.js";

const router = expresss.router();

router.post("/createEvent", protect, createEvent);
router.get("/:id", protect, getEventByID);

export default router;