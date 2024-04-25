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
import Upcomming from "./Pages/Dashboard/Upcomming";
import PastEvents from "./Pages/Dashboard/PastEvents";
import Calendar from "./Pages/Dashboard/Calendar";
import Profile from "./Pages/Dashboard/Profile";
import Rsvp from "./Pages/Dashboard/Rsvp";
import Settings from "./Pages/Dashboard/Settings";
import Helpcenter from "./Pages/Dashboard/Helpcenter";
import Eventsucess from "./Pages/Dashboard/Eventsucess";
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
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/createevent", element: <CreateEvent /> },
    { path: "/createevent/eventsuccess", element: <Eventsucess /> },
    { path: "/allevents", element: <AllEvents /> },
    { path: "/upcommingevents", element: <Upcomming /> },
    { path: "/pastevents", element: <PastEvents /> },
    { path: "/calendar", element: <Calendar /> },
    { path: "/profile", element: <Profile /> },
    { path: "/rsvp", element: <Rsvp /> },
    { path: "/settings", element: <Settings /> },
    { path: "/helpcenter", element: <Helpcenter /> },
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
