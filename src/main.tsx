import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import ContactMe from "./ContactMe/ContactMe";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to={"aboutMe"} />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "projects",
        element: <MyProjects />,
      },
      {
        path: "contactMe",
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
