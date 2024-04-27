import express from "express";
import protect from "../middlewares/authMiddleware.js";
import sendMail from "../controllers/emailController.js";
const router = express.Router();
router.route("/").post(sendMail);
export default router;
