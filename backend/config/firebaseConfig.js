import admin from "firebase-admin";

import serviceAccount from "./adch-05-firebase-adminsdk-sx6k1-b15beec041.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
