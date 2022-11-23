import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth/authSlice";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
const Dashboard = () => {
  const { user } = useSelector(authSelector);
  const location = useLocation();
  if (!user) {
    return (
      <div className="unauthorized">
        <>
          <div className="md:flex md:min-h-screen">
            <main className=" p-10 w-full pt-10 px-4 py-5 sm:px-6 md:px-8 lg:pl-72">
              <Navigate to="/admin/loginAdmin" state={location} />
            </main>
          </div>
        </>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className=" p-10 w-full pt-10 px-4 py-5 sm:px-6 md:px-8 lg:pl-72">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Dashboard;
