import React, { useState } from "react";

// Define type for appointment request
type AppointmentRequest = {
  id: number;
  name: string;
  issue: string;
  gender: "Male" | "Female" | "Other";
  age: number;
  appointmentDate: string;
  profileLink: string;
};

export const AppointmentRequestPage = () => {
  // Example data for appointment requests
  const appointmentRequests: AppointmentRequest[] = [
    {
      id: 1,
      name: "John Doe",
      issue: "Fever and Cough",
      gender: "Male",
      age: 34,
      appointmentDate: "Mon 15 Jan 2024, 10:00 AM",
      profileLink: "/patients/john-doe",
    },
    {
      id: 2,
      name: "Jane Smith",
      issue: "Back Pain",
      gender: "Female",
      age: 29,
      appointmentDate: "Wed 17 Jan 2024, 12:30 PM",
      profileLink: "/patients/jane-smith",
    },
    {
      id: 3,
      name: "Alex Taylor",
      issue: "Headache",
      gender: "Other",
      age: 22,
      appointmentDate: "Fri 19 Jan 2024, 2:15 PM",
      profileLink: "/patients/alex-taylor",
    },
  ];

  // State to track cancellation notes
  const [cancelNotes, setCancelNotes] = useState<{ [key: number]: string }>({});

  // Handle action button clicks
  const handleAccept = (id: number) => {
    alert(`Appointment accepted for request ID: ${id}`);
  };

  const handleReschedule = (id: number) => {
    alert(`Appointment rescheduling initiated for request ID: ${id}`);
  };

  const handleCancel = (id: number) => {
    const note = cancelNotes[id] || "No additional notes.";
    alert(`Appointment cancelled for request ID: ${id}. Note: ${note}`);
  };

  return (
    <div className="container text-center mt-4">
      <h3 className="mb-4">Appointment Requests</h3>
      <div className="row">
        {appointmentRequests.map((request) => (
          <div className="col-md-4 mb-4" key={request.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                {/* Patient Name with Link */}
                <h5 className="card-title">
                  <i className="fa-solid fa-user"></i>{" "}
                  <a href={request.profileLink} target="_blank" rel="noopener noreferrer">
                    {request.name}
                  </a>
                </h5>

                {/* Issue */}
                <p>
                  <i className="fa-solid fa-notes-medical"></i> Issue: {request.issue}
                </p>

                {/* Gender */}
                <p>
                  <i
                    className={`fa-solid ${
                      request.gender === "Male"
                        ? "fa-mars"
                        : request.gender === "Female"
                        ? "fa-venus"
                        : "fa-genderless"
                    }`}
                  ></i>{" "}
                  Gender: {request.gender}
                </p>

                {/* Age */}
                <p>
                  <i className="fa-solid fa-hourglass-half"></i> Age: {request.age} years
                </p>

                {/* Appointment Date */}
                <p>
                  <i className="fa-solid fa-calendar-days"></i> Request Appointment Date:<br/>{" "}
                  {request.appointmentDate}
                </p>

                {/* Action Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  {/* Accept Button */}
                  <button
                    className="btn btn-success"
                    onClick={() => handleAccept(request.id)}
                  >
                    <i className="fa-solid fa-check"></i> Accept
                  </button>

                  {/* Reschedule Button */}
                  <button
                    className="btn btn-warning"
                    onClick={() => handleReschedule(request.id)}
                  >
                    <i className="fa-solid fa-calendar-plus"></i> Reschedule
                  </button>
                </div>

                {/* Cancel Section */}
                <div className="mt-3">
                  <textarea
                    className="form-control mb-2"
                    placeholder="Add a note (optional)"
                    rows={2}
                    value={cancelNotes[request.id] || ""}
                    onChange={(e) =>
                      setCancelNotes({ ...cancelNotes, [request.id]: e.target.value })
                    }
                  ></textarea>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancel(request.id)}
                  >
                    <i className="fa-solid fa-times"></i> Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentRequestPage;
