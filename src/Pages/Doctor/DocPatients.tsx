

// Define type for visit history
type VisitHistory = {
  id: number;
  name: string;
  visitDate: string;
  issue: string;
  gender: "Male" | "Female" | "Other";
  age: number;
};

export const PatientVisitHistory = () => {
  // Example data for patient visit history
  const visitHistory: VisitHistory[] = [
    {
      id: 1,
      name: "John Doe",
      visitDate: "Mon 01 Jan 2024",
      issue: "Fever and Cough",
      gender: "Male",
      age: 34,
    },
    {
      id: 2,
      name: "Jane Smith",
      visitDate: "Wed 10 Jan 2024",
      issue: "Back Pain",
      gender: "Female",
      age: 29,
    },
    {
      id: 3,
      name: "Alex Taylor",
      visitDate: "Fri 15 Jan 2024",
      issue: "Headache",
      gender: "Other",
      age: 22,
    },
  ];

  return (
    <div className="container text-center mt-4">
      <h3 className="mb-4">Patient Visit History</h3>
      <div className="row">
        {visitHistory.map((visit) => (
          <div className="col-md-4 mb-4" key={visit.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                {/* Patient Name */}
                <h5 className="card-title">
                  <i className="fa-solid fa-user"></i> {visit.name}
                </h5>

                {/* Visit Date */}
                <p>
                  <i className="fa-solid fa-calendar-days"></i> Visit Date:{" "}
                  {visit.visitDate}
                </p>

                {/* Issue */}
                <p>
                  <i className="fa-solid fa-notes-medical"></i> Issue:{" "}
                  {visit.issue}
                </p>

                {/* Gender */}
                <p>
                  <i
                    className={`fa-solid ${
                      visit.gender === "Male"
                        ? "fa-mars"
                        : visit.gender === "Female"
                        ? "fa-venus"
                        : "fa-genderless"
                    }`}
                  ></i>{" "}
                  Gender: {visit.gender}
                </p>

                {/* Age */}
                <p>
                  <i className="fa-solid fa-hourglass-half"></i> Age:{" "}
                  {visit.age} years
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientVisitHistory;
