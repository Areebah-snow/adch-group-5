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
import admin from "./config/firebaseConfig.js";
import { getAuth } from "firebase-admin/auth";
// All available logging functions
import {
  log,
  info,
  debug,
  warn,
  error,
  write,
} from "firebase-functions/logger";
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
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for
    // this URL must be whitelisted in the Firebase Console.
    url: "https://adch-group-5.vercel.app/",
    // This must be true for email link sign-in.
    handleCodeInApp: false,
    // iOS: {
    //   bundleId: "com.example.ios",
    // },
    // android: {
    //   packageName: "com.example.android",
    //   installApp: true,
    //   minimumVersion: "12",
    // },
    // FDL custom domain.
    // dynamicLinkDomain: "adch-05.firebaseapp.com",
  };
  try {
    getAuth()
      .generateEmailVerificationLink(user.email, actionCodeSettings)
      .then(async (link) => {
        await axios.post("https://db-lhsk5bihpq-uc.a.run.app/api/email/", {
          to: user.email,
          subject: "Account created successfully",
          text: `Congratulations!!🎊Your WBT account has been successfully created.Explore a world of events and memories with Will Be There.Click the link below to verify your email ${link}`,
          html: `<p>Congratulations!!🎊Your WBT account has been successfully created.</p><p>Explore a world of events and memories with Will Be There.</p><p>Click the link below to verify your email ${link}</p>`,
        });
      })
      .catch((err) => {
        // Some error occurred.
        log(err);
        error(err);
      });
  } catch (err) {
    log(err);
    error(err);
  }
});
export { db, createUser };
