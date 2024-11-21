import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {RouterProvider } from "react-router-dom";
import AuthProvider from "./authProvider/AuthProvider";
import { router } from "./routes/Router";
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
