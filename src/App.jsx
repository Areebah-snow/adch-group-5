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
import Settings from "./Pages/Dashboard/Settings";
import Helpcenter from "./Pages/Dashboard/Helpcenter";
import Eventsucess from "./Pages/Dashboard/Eventsucess";
import Forgotpassword from "./Pages/Auth/Forgotpassword";
import Invitation from "./Pages/Dashboard/Invitation";
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
    { path: "/createevent/eventsuccess/:eventid", element: <Eventsucess /> },
    { path: "/allevents", element: <AllEvents /> },
    { path: "/calendar", element: <Calendar /> },
    { path: "/profile", element: <Profile /> },
    { path: "/rsvp", element: <Rsvp /> },
    { path: "/settings", element: <Settings /> },
    { path: "/helpcenter", element: <Helpcenter /> },
    { path: "/invitation", element: <Invitation /> },
    { path: "/resetpassword", element: <Forgotpassword /> },
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
