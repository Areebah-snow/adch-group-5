import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createRSVP,
  getRSVPs,
  getRSVPById,
  updateRSVP,
  getRsvpByEvent,
} from "../controllers/rsvpController.js";

const router = express.Router();

router.post("/", createRSVP);
// router.route("/getRSVP/:id").get(getRSVPById);
router.route("/").get(protect, getRSVPs);
router.route("/getRsvpByEvent").get(getRsvpByEvent);
router.route("/").put(protect, updateRSVP);

export default router;
