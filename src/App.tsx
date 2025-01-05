import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CommonLayout from "./Layouts/CommonLayout";
import DocHome from "./Pages/Doctor/DocHome";
import AppointmentRequest from "./Pages/Doctor/AppointmentRequest";
import DocPatients from "./Pages/Doctor/DocPatients";
import DocProfile from "./Pages/Doctor/DocProfile";
import ProfessionalCertification from "./Pages/Doctor/ProfessionalCertification";
import DocReport from "./Pages/Doctor/DocReport";
import DocAdInfo from "./Pages/Doctor/DocAdInfo";

import PatientHome from "./Pages/Patient/PatientHome";
import Appointment from "./Pages/Patient/Appointment";
import PatientHistory from "./Pages/Patient/PatientHistory";
import PatientPrescription from "./Pages/Patient/PatientPrescription";
import PatientTestReport from "./Pages/Patient/PatientTestReport";
import PatientFees from "./Pages/Patient/PatientFees";
import PatientAdInfo from "./Pages/Patient/PatientAdInfo";
import PatientProfile from "./Pages/Patient/PatientProfile";





export const App = () => {
  console.log("Rendering App");
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Redirect root to a default route */}
        <Route path="/" element={<Navigate to="/doctor/home" replace />} />

        {/* Doctor Routes */}
        <Route path="doctor" element={<CommonLayout user="Doctor" />}>
          <Route path="home" element={<DocHome />} />
          <Route path="appointment-request" element={<AppointmentRequest />} />
          <Route path="patients" element={<DocPatients />} />
          <Route path="profile" element={<DocProfile />} />
          <Route path="professional-certification" element={<ProfessionalCertification />} />
          <Route path="report" element={<DocReport />} />
          <Route path="ad-info" element={<DocAdInfo />} />
        </Route>

        {/* Patient Routes */}
        <Route path="patient" element={<CommonLayout user="Patient" />}>
          <Route path="home" element={<PatientHome />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="history" element={<PatientHistory />} />
          <Route path="prescription" element={<PatientPrescription />} />
          <Route path="test-report" element={<PatientTestReport />} />
          <Route path="fees" element={<PatientFees />} />
          <Route path="ad-info" element={<PatientAdInfo />} />
          <Route path="profile" element={<PatientProfile />} />
        </Route>

        {/* Fallback for 404 */}
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
