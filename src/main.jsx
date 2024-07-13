import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./components/landing";
import Imyirondoro from "./components/imyirondoro";
import Dashboard from "./components/dashboard";
import NotFound from "./components/notFound";
import UserDash from "./OtherUsers/userDash";
import Group from "./OtherUsers/Groups";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/credentials", element: <Imyirondoro /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/userdashboard", element: <UserDash /> },
  { path: "*", element: <NotFound /> },
  { path: "/rev", element: <Group /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
