import React from "react";

// Define types for the sections
type Appointment = {
  id: number;
  doctor: string;
  date: string;
  time: string;
  reason: string;
};

type TestReport = {
  id: number;
  testName: string;
  dueDate?: string; // Optional, for due test reports
  reportDate?: string; // Optional, for completed reports
  reportLink?: string; // Optional, for report download link
};

type LastVisit = {
  id: number;
  doctor: string;
  date: string;
  diagnosis: string;
  prescription: string;
};

export const PatientHome = () => {
  // Example data for upcoming appointment
  const upcomingAppointment: Appointment = {
    id: 1,
    doctor: "Dr. Sufiya Kamal",
    date: "Mon 22 Dec 2024",
    time: "10:00-11:00",
    reason: "Routine Check-up",
  };

  // Example data for due test reports
  const dueTestReports: TestReport[] = [
    { id: 1, testName: "Blood Test", dueDate: "Tue 23 Dec 2024" },
  ];

  // Example data for last test report
  const lastTestReport: TestReport = {
    id: 2,
    testName: "X-Ray Chest",
    reportDate: "Sat 20 Dec 2024",
    reportLink: "/reports/x-ray-chest-2024.pdf",
  };

  // Example data for last doctor visit
  const lastVisit: LastVisit = {
    id: 3,
    doctor: "Dr. John Doe",
    date: "Thu 18 Dec 2024",
    diagnosis: "Mild Flu",
    prescription: "Paracetamol, Vitamin C",
  };

  return (
    <div className="container text-center patientHome">
      {/* Upcoming Appointment */}
      <div className="section mt-4">
        <h4 className="upTitle">Upcoming Appointment</h4>
        {upcomingAppointment ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{upcomingAppointment.doctor}</h5>
              <p>
                <i className="fa-solid fa-calendar-days"></i> {upcomingAppointment.date},{" "}
                {upcomingAppointment.time}
              </p>
              <p>Reason: {upcomingAppointment.reason}</p>
            </div>
          </div>
        ) : (
          <p>No upcoming appointments</p>
        )}
      </div>

      {/* Due Test Reports */}
      <div className="section mt-4">
        <h4>Due Test Reports</h4>
        {dueTestReports.length > 0 ? (
          <ul className="list-group">
            {dueTestReports.map((report) => (
              <li className="list-group-item test" key={report.id}>
                {report.testName} - Due by {report.dueDate}
              </li>
            ))}
          </ul>
        ) : (
          <p>No due test reports</p>
        )}
      </div>

      {/* Last Test Report */}
      <div className="section mt-4">
        <h4>Last Test Report</h4>
        {lastTestReport ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{lastTestReport.testName}</h5>
              <p>
                <i className="fa-solid fa-calendar-check"></i> Report Date:{" "}
                {lastTestReport.reportDate}
              </p>
              <a href={lastTestReport.reportLink} target="_blank" rel="noopener noreferrer">
                View Report
              </a>
            </div>
          </div>
        ) : (
          <p>No test report available</p>
        )}
      </div>

      {/* Last Doctor Visit */}
      <div className="section mt-4">
        <h4>Last Doctor Visit</h4>
        {lastVisit ? (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{lastVisit.doctor}</h5>
              <p>
                <i className="fa-solid fa-calendar-check"></i> Visit Date: {lastVisit.date}
              </p>
              <p>Diagnosis: {lastVisit.diagnosis}</p>
              <p>Prescription: {lastVisit.prescription}</p>
            </div>
          </div>
        ) : (
          <p>No previous visits found</p>
        )}
      </div>
    </div>
  );
};

export default PatientHome;
