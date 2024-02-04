import React from "react";
import ReactDOM from "react-dom/client";
import { ProfileContextProvider } from "./context/profile/ProfileContext.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProfileContextProvider>
    <React.StrictMode>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#D1D0F9",
              color: "#6368d9",
              fontWeight: "bold",
              fontFamily: "monospace",
            },
          },
          error: {
            style: {
              background: "#ffcccb",
              color: "##6368d9",
              fontWeight: "bold",
              fontFamily: "monospace",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </React.StrictMode>
  </ProfileContextProvider>
);
