import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesCom from "./Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesCom />
    </BrowserRouter>
  </StrictMode>
);
