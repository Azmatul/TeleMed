import { LuHeartPulse } from "react-icons/lu";

export const PatientHistory = () => {
  return (
    <>
      <div className="search-bar appContain">
        <i className="fas fa-search icon"></i>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search Hsitory"
        />
        <i className="fas fa-microphone icon"></i>
      </div>

      <div className="container catbox">
        {/* Header section */}
        <div className="catHeader">
          <div className="categories">Recent Doctor visited</div>
          <div className="catMore">See all</div>
        </div>
        <div className="patientHistoryTemp">
          <div className="docSectio col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Tawhid Uddin Ahmed</h5>
                    <p>
                      MBBS, MSc (Cardiology) <br />
                      Training/Courses:
                      <br />
                      CCD (General Physician), PGT (Cardiology), PGT
                      (Cardiology)
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Visite Date: 10/02/2024
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prescriptionSection col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Prescription</h5>
                    <p>
                      **short Description** <br />
                      
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Issue Date: 10/02/2024<br/>
                        Address: r5ad5f6adf98
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testSection col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Test Report</h5>
                    <p>
                      LAB Name: Popular <br />
                      <br />
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Visite Date: 10/02/2024<br/>
                        Address: r5ad5f6adf98
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patientHistoryTemp">
          <div className="docSectio col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Tawhid Uddin Ahmed</h5>
                    <p>
                      MBBS, MSc (Cardiology) <br />
                      Training/Courses:
                      <br />
                      CCD (General Physician), PGT (Cardiology), PGT
                      (Cardiology)
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Visite Date: 10/02/2024
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prescriptionSection col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Prescription</h5>
                    <p>
                      **short Description** <br />
                      
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Issue Date: 10/02/2024<br/>
                        Address: r5ad5f6adf98
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testSection col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Test Report</h5>
                    <p>
                      LAB Name: Popular <br />
                      <br />
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Visite Date: 10/02/2024<br/>
                        Address: r5ad5f6adf98
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHistory;
