import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import '../../assets/stylesheets/application.css'

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});