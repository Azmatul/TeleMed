import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/Style.css";
import "./Style/PatientAppointment.css"
import "./Style/PatientHistory.css"
import App from "./App.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LuHeartPulse } from 'react-icons/lu';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
