import express from "express";
import cors from "cors";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import rsvpRoutes from "./routes/rsvpRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import { onRequest } from "firebase-functions/v2/https";
import functions from "firebase-functions/v1";
import axios from "axios";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/rsvp", rsvpRoutes);
app.use("/api/email", emailRoutes);

connectDB();
app.get("/", (req, res) => {
  res.status(200).send("server running");
});
// { cors: ["https://adch-group-5.vercel.app", "http://localhost:3000/"] }
const db = onRequest({ cors: true }, app);

const createUser = functions.auth.user().onCreate(async (user) => {
  await axios.post("https://db-lhsk5bihpq-uc.a.run.app/api/email/", {
    to: user.email,
    subject: "Account created successfully",
    text: "You have successfully created an account on will be there",
    html: "<p>Account Created</p>",
  });
});
export { db, createUser };
