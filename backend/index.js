import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
// app.use("/api/user", userRoutes);
// app.use("/api/chat", eventRoutes);
const port = 3000;
connectDB();
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
