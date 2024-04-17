// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKDoBB6TuSG0HkvjVIPPAG1LS6C2xdbrY",
  authDomain: "adch-05.firebaseapp.com",
  projectId: "adch-05",
  storageBucket: "adch-05.appspot.com",
  messagingSenderId: "1022461945902",
  appId: "1:1022461945902:web:b24df46be3262bb85e97bf",
  measurementId: "G-GSM38VQMQE",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
