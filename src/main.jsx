import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApplicationProvider } from "./context/ApplicationContext";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </StrictMode>
);
