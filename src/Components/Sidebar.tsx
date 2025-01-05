import { Link } from "react-router-dom";



interface SidebarProps {
  user: "Doctor" | "Patient"; // Define the type of user (Doctor or Patient)
}

export const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const DocMenu: { label: string; icon: string; link: string }[] = [
    { label: "Home", icon: "fa-solid fa-house", link: "/doctor/home" },
    { label: "Appointment Request", icon: "fa-solid fa-calendar-check", link: "/doctor/appointment-request" },
    { label: "Patients", icon: "fa-solid fa-hospital-user", link: "/doctor/patients" },
    { label: "Profile", icon: "fa-solid fa-user", link: "/doctor/profile" },
    { label: "Professional Certification", icon: "fa-solid fa-certificate", link: "/doctor/professional-certification" },
    { label: "Report", icon: "fa-solid fa-vial-circle-check", link: "/doctor/report" },
    { label: "Additional Information", icon: "fa-solid fa-circle-info", link: "/doctor/adInfo" },
  ];

  const PatientMenu: { label: string; icon: string; link: string }[] = [
    { label: "Home", icon: "fa-solid fa-house", link: "/patient/home" },
    { label: "Appointment", icon: "fa-solid fa-calendar-check", link: "/patient/appointment" },
    { label: "History", icon: "fa-solid fa-clock-rotate-left", link: "/patient/history" },
    { label: "Prescription", icon: "fa-solid fa-file-prescription", link: "/patient/prescription" },
    { label: "Test Report", icon: "fa-solid fa-vial-circle-check", link: "/patient/test-report" },
    { label: "Fees", icon: "fa-solid fa-circle-dollar-to-slot", link: "/patient/fees" },
    { label: "Additional Information", icon: "fa-solid fa-circle-info", link: "/patient/ad-info" },
    { label: "Profile", icon: "fa-solid fa-user", link: "/patient/profile" },
  ];

  const menu = user === "Patient" ? DocMenu : PatientMenu; // Choose the menu based on the user

  return (
    <div>
      <div>
        <span className="menu">Section<i className="fas fa-bars menu-icon"></i></span>
      </div>
      <div>
        <div className="list-group">
          <ul className="list-unstyled">
            {menu.map((item, index) => (
              <li key={index}>
                {/* Use Link instead of href for internal navigation */}
                <Link to={item.link} className="list-group-item list-group-item-action list-group-item-warning">
                  <i className={item.icon}></i> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
