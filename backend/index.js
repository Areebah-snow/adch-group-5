import express from "express";
import cors from "cors";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import rsvpRoutes from "./routes/rsvpRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";

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

export default app;
