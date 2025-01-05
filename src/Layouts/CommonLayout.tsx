
import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";


interface CommonLayoutProps {
  user: "Doctor" | "Patient";
}

export const CommonLayout: React.FC<CommonLayoutProps> = ({ user }) => {
  console.log("Rendering CommonLayout for:", user);
  return (
    <div>
      <div className="container-fluid header">Header</div>
      <div>
        <div className="row">
          <div className="col-2 co">
            <Sidebar user={user} />
          </div>
          <div className="col-10 co">
              <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
