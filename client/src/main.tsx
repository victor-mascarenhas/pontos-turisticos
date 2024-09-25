import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LocationProvider } from "./context/provider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </StrictMode>
);
