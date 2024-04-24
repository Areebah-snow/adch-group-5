import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createRSVP,
  getRSVPs,
  getRSVPByURL,
} from "../controllers/rsvpController.js";

const router = express.Router();

router.post("/", createRSVP);
router.route("/getRSVP/:id").get(getRSVPByURL);
router.route("/").get(protect, getRSVPs);

export default router;
