import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
import expressAsyncHandler from "express-async-handler";
dotenv.config();

console.log(process.env.OAUTH_CLIENTID);
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENTID, // ClientID
  process.env.OAUTH_CLIENT_SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});
const accessToken = oauth2Client.getAccessToken();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    type: "OAuth2",
    user: "taskswebapp@gmail.com",
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    accessToken: accessToken,
  },
});

// async..await is not allowed in global scope, must use a wrapper
const sendMail = expressAsyncHandler(async (req, res) => {
  // send mail with defined transport object
  try {
    const { to, subject, text, html } = req.body;
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, //"<b>Hello world?</b>", // html body
    });
    res.status(200).json("Message sent");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// sendMail.catch(console.error);
export default sendMail;
