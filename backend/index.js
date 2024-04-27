import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import rsvpRoutes from "./routes/rsvpRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/rsvp", rsvpRoutes);
app.use("/api/email", emailRoutes);

const port = 3000;
connectDB();
app.get("/", (req, res) => {
  res.status(200).send("server running");
});
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
