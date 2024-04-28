import expressAsyncHandler from "express-async-handler";
import admin from "../config/firebaseConfig.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
    const decodedToken = await admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        if (!decodedToken) {
          res.status(400);
          throw new Error("User Unauthorised");
        }
        admin
          .auth()
          .getUser(decodedToken.uid)
          .then((userRecord) => {
            req.user = {
              name: userRecord.name ? userRecord.name : userRecord.displayName,
              uid: userRecord.uid,
              photoURL: userRecord.photoURL,
              email: userRecord.email,
            };
            next();
          });
      })
      .catch((error) => {
        res.status(401).send(error.message);
      });
  } else {
    res.status(400).send("Unauthorised user");
  }
});

export default protect;
