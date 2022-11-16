import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased  dark:bg-gray-100 text-black dark:text-black">
       
        <main className="container mx-auto mt-5 overflow-y-scroll md:scroll-mt-20 p-5 md:flex md:justify-center">
          <div className="md:w-2/3 lg:w-3/5">
            <Outlet />
          </div>
        </main>
      </div>
  )
}
export default AdminLayout