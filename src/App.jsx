import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig"
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
    // { path: "/", element: <Home /> },
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
