import { FaEye } from "react-icons/fa";
import { LuBrainCircuit, LuHeartPulse } from "react-icons/lu";
import { PiTooth } from "react-icons/pi";

export const Appointment = () => {
  return (
    <>
      <div className="search-bar appContain">
        <i className="fas fa-search icon"></i>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search Doctor"
        />
        <i className="fas fa-microphone icon"></i>
      </div>

      <div className="container catbox">
        {/* Header section */}
        <div className="catHeader">
          <div className="categories">Categories</div>
          <div className="catMore">See all</div>
        </div>

        {/* Categories cards */}
        <div className="catNameContainer">
          <div className="catName">
            <div>
              <LuHeartPulse size={50} />
            </div>
            <div>Cardiologist</div>
          </div>
          <div className="catName">
            <div>
              <LuBrainCircuit size={50} />
            </div>
            <div>Neurologist</div>
          </div>
          <div className="catName">
            <div>
              <PiTooth size={50} />
            </div>
            <div>Dentist</div>
          </div>
          <div className="catName">
            <div>
              <FaEye size={50} />
            </div>
            <div>Ophthalmologist</div>
          </div>
        </div>
      </div>

      <div className="container docbox">
        {/* Header section */}
        <div className="docHeader">
          <div className="allDoc">All Doctors</div>
          <div className="docMore">See all</div>
        </div>

        <div className="row docCard">
          <div className="col-md-4">
            <img
              src="./assets/PatientImages/Tawhid.png"
              className="img-fluid rounded-start"
              alt="img"
            />
          </div>
          <div className="col-md-8 position-relative">
            <button className="favorite-btn position-absolute top-0 end-0">
              ❤️
            </button>

            <div className="card-body">
              <h5 className="card-title">Dr. Tawhid Uddin Ahmed</h5>
              <p>
                MBBS, MSc (Cardiology) <br />
                Training/Courses:
                <br />
                CCD (General Physician), PGT (Cardiology), PGT (Cardiology)
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Consultation Fee: 700 Tk.
                </small>
              </p>
            </div>

            <div className="rating">
              <span className="stars text-warning">★★★★☆</span>
              <span className="rating-text ms-2">4.5/5</span>
            </div>
          </div>
        </div>
        

        <div className="row docCard">
          <div className="col-md-4">
            <img
              src="./assets/PatientImages/Tawhid.png"
              className="img-fluid rounded-start"
              alt="img"
            />
          </div>
          <div className="col-md-8 position-relative">
            <button className="favorite-btn position-absolute top-0 end-0">
              ❤️
            </button>

            <div className="card-body">
              <h5 className="card-title">Dr. Tawhid Uddin Ahmed</h5>
              <p>
                MBBS, MSc (Cardiology) <br />
                Training/Courses:
                <br />
                CCD (General Physician), PGT (Cardiology), PGT (Cardiology)
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Consultation Fee: 700 Tk.
                </small>
              </p>
            </div>

            <div className="rating">
              <span className="stars text-warning">★★★★☆</span>
              <span className="rating-text ms-2">4.5/5</span>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Appointment;
