import { Outlet } from "react-router-dom";
import Footer from "../../components/template/footer/Footer";
import Header from "../../components/template/navbar/NavBar";

const PageLayout = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  dark:bg-gray-100 text-black dark:text-black">
        <Header />
        <div className="bg-white dark:bg-gray-50 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
