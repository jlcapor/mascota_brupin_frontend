import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];
const NavBar = () => {
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
        <div className="flex items-center lg:order-2">
          <Link
            to="/cuenta/login"
            className="text-white dark:text-slate-900    font-medium rounded-lg text-sm px-5 py-2.5 mr-2 border border-black  hover:text-black transition duration-500 ease-in-out  uppercase"
          >
            Log in
          </Link>
          

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
                className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-900 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
