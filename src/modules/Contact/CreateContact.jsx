import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateContact = () => {
  const dispatch = useDispatch();
  // nuevo state de producto
  const [contacto, setContacto] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    comentario: "", 
  });

  const handleChange = (e) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
  }

  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-sky-500">
          Contacto
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nombre"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="correo"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              name="correo"
              id="correo"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="celular"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Celular
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="comentario"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Comentario
            </label>
            <textarea
              rows="6"
              name="comentario"
              id="comentario"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-sky-700 mb-5 w-full py-3
          text-white uppercase font-bold rounded
           hover:cursor-pointer hover:bg-sky-800 
           transition-colors"
          >
            Crear Contacto
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateContact;
