import express from "express";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
import {
  registerUser,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/userController.js";

router.route("/").post(protect, registerUser);
router.route("/").put(protect, updateUser);
router.route("/").delete(protect, deleteUser);
router.route("/").get(getUser);

export default router;
