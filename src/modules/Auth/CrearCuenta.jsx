import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelector } from "../../redux/reducers/auth/authSlice";
import { register } from "../../redux/reducers/auth/authSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CrearCuenta = () => {
  const { user, isLoading, isError, isSuccess, message } =
    useSelector(authSelector);
  const dispatch = useDispatch();
  const [cliente, setCliente] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    clave: "",
    rol: "Cliente",
  });
  const [repetirClave, setRepetirClave] = useState("");

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(cliente).includes("")) {
      Swal.fire({
        title: "Todos los campos son obligatorios",
        text: "Por favor, rellena todos los campos del formulario para poder crear su cuenta.",
        icon: "info",
        confirmButtonText: "Ententido",
      });
      return;
    }

    dispatch(register(cliente));

    // mostrar mensaje
    Swal.fire({
      title: "Cuenta creada debes confirmar email.",
      icon: "success",
      confirmButtonText: "Ententido",
    });
    setCliente({
      cedula: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      clave: "",
      rol: "Cliente",
    });

    setRepetirClave("");
  };

  return (
    <>
      <div className="text-center mt-12">
        <h2 className="text-4xl text-blue-500 font-bold tracking-tight uppercase">
          Crear Cuenta
        </h2>
      </div>
      <div className="container justify-center mx-auto px-7 py-12">
      <div className=" max-w-3xl  mx-auto  px-7 py-10 rounded-lg ounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 overflow-hidden ">
          <form onSubmit={handleSubmit}>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="cedula"
              >
                Cedula
              </label>
              <input
                id="cedula"
                type="number"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="cedula"
                value={cliente.cedula}
                onChange={handleChange}
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
                  id="nombre"
                  type="text"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  name="nombre"
                  value={cliente.nombre}
                  onChange={handleChange}
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
                  id="apellido"
                  type="text"
                  name="apellido"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={cliente.apellido}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="celular"
              >
                Celular
              </label>
              <input
                id="celular"
                type="number"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="telefono"
                value={cliente.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Correo Electronico
              </label>
              <input
                id="email"
                type="email"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="correo"
                value={cliente.correo}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 p-1 px-3 py-5">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="clave"
                >
                  Password
                </label>
                <input
                  id="clave"
                  type="password"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  name="clave"
                  value={cliente.clave}
                  onChange={handleChange}
                  placeholder="***********************"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="repetirClave"
                >
                  Confirmar Password
                </label>
                <input
                  id="repetirClave"
                  type="password"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  name="repetirPassword"
                  value={repetirClave}
                  onChange={(e) => setRepetirClave(e.target.value)}
                  placeholder="***********************"
                />
              </div>
            </div>

            <div className="w-full px-3">
              <input
                type="submit"
                value="Crear Cuenta"
                className="bg-sky-700 mb-5 w-full py-3
                 text-white uppercase font-bold rounded
                  hover:cursor-pointer hover:bg-sky-800 
                  transition-colors"
              />
            </div>
          </form>
          <div className="w-full px-3">
            <div className="lg:flex lg:justify-between">
              <Link
                className=" block text-center mx-1  my-3 text-sky-600  text-xl"
                to="/cuenta/login"
              >
                ??Ya tienes una cuenta? Inicia Sesion
              </Link>

              <Link
                className=" block text-center mx-2 my-3 text-sky-600  text-xl"
                to="/cuenta/olvide-password"
              >
                ??Perdiste tu contrase??a?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearCuenta;
