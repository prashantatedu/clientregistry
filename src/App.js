import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/profiles/Profile";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    error: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/profiles", element: <Profile /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
