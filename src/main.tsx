import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./index.css";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import ContactMe from "./ContactMe/ContactMe";
import ErrorPage from "./ErrorPage";
import WorkExperience from "./WorkExperience/WorkExperience";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <ErrorPage />
      </Root>
    ),
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
      {
        path: "worKExperience",
        element: <WorkExperience />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
