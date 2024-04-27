import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
import serviceAccount from "./adch-05-firebase-adminsdk-sx6k1-b15beec041.json" assert { type: "json" };

// const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
