import { Outlet } from "react-router-dom";
import Header from "../../components/layout/PageLayout/NavBar";
const PageLayout = () => {
  return (
    <>
      <Header />
      <div className="md:w-2/3 lg:w-2/5">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
