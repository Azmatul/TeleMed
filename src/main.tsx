import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "./Styles/Style.css";
import "./Styles/PatientAppointment.css"
import "./Styles/PatientHistory.css"
import "./Styles/DoctorHome.css"
import "./Styles/PatientHome.css"
import "./Styles/Header.css"
import "./styles/Header.css";



import "@fortawesome/fontawesome-free/css/all.min.css";




import App from "./App.tsx";
import { LuHeartPulse } from 'react-icons/lu';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
