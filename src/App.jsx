import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login />},
    { path: "/register", element: <Register />}
    // { path: "/", element: <Home /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
