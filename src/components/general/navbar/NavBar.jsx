import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../redux/reducers/auth/authSlice";
import { resetAll } from "../../../redux/reducers/pets/petsSlice";
const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetAll())
  }, [dispatch]);
  return (
    //flex flex-wrap items-center justify-between px-4 bg-gray-800 px-20
    <nav className=" top-0 z-30 w-full flex-wrap px-2 py-6 p-6 bg-white/90  dark:bg-gray-200/80 backdrop-blur sm:px-9 shadow-lg border-b border-gray-100 dark:border-gray- peer-checked:navbar-active dark:shadow-none">
      <div className=" flex items-center justify-between mx-auto max-w-7xl">
        <a href="#" className="flex items-center">
          <h1>
            <a
              href="https://tailus.io/blocks/hero-section"
              aria-label="logo"
              class="flex space-x-2 items-center"
            >
              <span class="text-2xl font-bold text-sky-600">
                Mascota <span class="text-sky-400">Feliz</span>
              </span>
            </a>
          </h1>
        </a>
        <div className="flex items-center lg:order-3">
          <a
            href="#"
            className="text-white dark:text-slate-900  font-medium rounded-sm text-sm px-5 py-2   hover:text-black transition duration-500 ease-in-out uppercase"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>

          {user ? (
            <>
              <Link
                to="/cuenta/user-profile"
                className="text-white dark:text-slate-900  font-medium rounded-sm text-sm px-5 py-2   hover:text-black transition duration-500 ease-in-out uppercase"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>

              <Link
                to="/cuenta/login"
                className="text-white dark:text-slate-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 border transition duration-500 ease-in-out  uppercase"
                onClick={logOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                  />
                </svg>
              </Link>
            </>
          ) : (
            <Link
              to="/cuenta/login"
              className="text-white dark:text-slate-900    font-medium rounded-lg text-sm px-5 py-2.5 mr-2 border transition duration-500 ease-in-out  uppercase"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white text-lg font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-black text-lg "
              >
                Tienda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-black text-lg"
              >
                Servicos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-black text-lg"
              >
                Planes
              </a>
            </li>

            <li>
              <Link
                to="#"
                className="block py-2 pr-4 pl-3   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0  lg:dark:hover:text-black text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
