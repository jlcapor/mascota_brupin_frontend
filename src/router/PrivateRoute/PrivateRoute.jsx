import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Profile } from "../../components/profile/Profile";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth/authSlice";
const PrivateRoute = () => {
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
      <div className="flex">
        <Profile />
        <div className="overflow-auto mx-auto mt-12">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3  px-6 py-1">
           <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivateRoute;
