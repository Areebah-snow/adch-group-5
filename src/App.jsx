import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreateEvent from "./Pages/Dashboard/CreateEvent";
import AllEvents from "./Pages/Dashboard/AllEvents";
import Calendar from "./Pages/Dashboard/Calendar";
import Profile from "./Pages/Dashboard/Profile";
import Rsvp from "./Pages/Dashboard/Rsvp";
import Eventsucess from "./Pages/Dashboard/Eventsucess";
import Forgotpassword from "./Pages/Auth/Forgotpassword";
import Invitation from "./Pages/Dashboard/Invitation";
import Event from "./Pages/Dashboard/Event";
import "react-image-crop/dist/ReactCrop.css";
function App() {
  const [authLoaded, setAuthLoaded] = useState(false);
  onAuthStateChanged(auth, (user) => {
    setAuthLoaded(true);
    if (user) {
      console.log(user);
    }
  });
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "*", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/createevent", element: <CreateEvent /> },
    { path: "/createevent/eventsuccess/:eventId", element: <Eventsucess /> },
    { path: "/allevents", element: <AllEvents /> },
    { path: "/calendar", element: <Calendar /> },
    { path: "/profile", element: <Profile /> },
    { path: "/rsvp", element: <Rsvp /> },
    { path: "/invitation/:eventId", element: <Invitation /> },
    { path: "/resetpassword", element: <Forgotpassword /> },
    { path: "/allevents/:id", element: <Event /> },
  ]);
  return (
    <>
      {authLoaded && (
        <div>
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
