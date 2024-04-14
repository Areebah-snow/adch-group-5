import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    // { path: "/", element: <Home /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
