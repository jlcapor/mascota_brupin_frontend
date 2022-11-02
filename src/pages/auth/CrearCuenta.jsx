import { useState } from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () => {
  return (
    <>
      <div className="bg-white  my-10 py-9 px-6 shadow rounded-lg sm:px-15">
        <h2 className=" text-sky-600 text-4xl  text-center py-7  px-7 font-medium mb-1 capitalize">
          Crear Cuenta
        </h2>

        <form>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="cedula"
            >
              Cedula
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="cedula"
              type="number"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 p-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nombre"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="apellido"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="celular"
            >
              Celular
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="celular"
              type="number"
            />
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Correo Electronico
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 p-1 px-3 py-5">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="password"
                placeholder="***********************"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password2"
              >
                Confirmar Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password2"
                type="password"
                placeholder="***********************"
              />
            </div>
          </div>

          <div className="w-full px-3">
            <input
              type="submit"
              value="Crear Cuenta"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </div>
        </form>
        <div className="w-full px-3">
          <div className="lg:flex lg:justify-between">
            <Link
              className=" block text-center mx-1  my-3 text-sky-600  text-lg"
              to="/auth/login"
            >
              ¿Ya tienes una cuenta? Inicia Sesion
            </Link>

            <Link
              className=" block text-center mx-2 my-3 text-sky-600  text-lg"
              to="/auth/olvide-password"
            >
              ¿Perdiste tu contraseña?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearCuenta;
