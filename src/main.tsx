import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <MyProjects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
