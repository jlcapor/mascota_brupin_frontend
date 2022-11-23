import { useCallback } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../../redux/reducers/auth/authSlice";
import { resetAll } from "../../../../redux/reducers/pets/petsSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const { user: currentUser } = userInfo;

  const logOut = useCallback(() => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetAll());
  }, [dispatch]);

  let content;

  if (!currentUser) {
    content = "";
  } else {
    if (currentUser.datos.rol == "Administrador") {
      content = (
        <>
          <li>
            <Link
              to="/admin/lista-usuarios"
              className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
            >
              <span className="ml-3">Usuarios</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/lista-mascotas"
              className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
            >
              <span className="ml-3">Mascotas</span>
            </Link>
          </li>
        </>
      );
    } else if (currentUser.datos.rol == "Asesor") {
      content = (
        <>
          <li>
            <Link
              to="/admin/solicitud-afiliaciones"
              className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
            >
              <span className="ml-3">Solicitudes</span>
            </Link>
          </li>
        </>
      );
    } else if (currentUser.datos.rol == "Cliente") {
    }
  }
  return (
    <aside className="fixed hidden z-20 h-full top-0 left-0 pt-16  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2  py-5">
              <li>
                <Link
                  to="/admin"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <span className="ml-3">Home</span>
                </Link>
              </li>

              {content}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
