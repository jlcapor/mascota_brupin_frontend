import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/reducers/auth/authSlice";
import Footer from "../../components/general/footer/Footer";
import Header from "../../components/general/navbar/NavBar";

const PageLayout = () => {
 
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  dark:bg-gray-100 text-black dark:text-black">
        <Header />
        <div className="bg-white dark:bg-gray-50 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
