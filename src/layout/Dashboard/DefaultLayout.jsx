import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
const Dashboard = () => {
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
