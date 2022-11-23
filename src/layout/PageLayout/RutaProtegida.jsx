import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth/authSlice";
import Sidebar from "../../components/Sidebar";
const RutaProtegida = () => {
  const { user } = useSelector(authSelector);
  const location = useLocation();
  if (!user) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <Navigate to="/cuenta/login" state={location} />;
        </span>
      </div>
    );
  }
  //container max-w-full h-full flex relative overflow-y-hidden
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="sm:flex min-h-screen">
          <Sidebar />
          <main className="w-full p-9">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
export default RutaProtegida;
