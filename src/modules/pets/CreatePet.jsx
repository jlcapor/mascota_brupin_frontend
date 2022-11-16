import { useState } from "react";
const CreatePet = () => {
  const [nombre, setNombre] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [color, setColor] = useState('')
  const [sexo, setSexo] = useState('')
  const [foto, setFoto] = useState('')
  const [especie, setEspecie] = useState('')
  const [comentario, setComentario] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  
  return (
    <div className="container justify-center mx-auto">
      <h1 className="text-cyan-600 font-black text-3xl text-center px-7 py-11  mt-11 uppercase">
        Agregar una Mascota
      </h1>

      <div className="bg-slate-50 max-w-2xl  mx-auto  rounded-lg ounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 overflow-hidden ">
        <div className="container justify-center mx-auto px-7 py-12 ">
          <form>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="nombre"
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fechaNacimiento"
              >
                Fecha Nacimiento
              </label>
              <input
                id="fechaNacimiento"
                type="date"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="fechaNacimiento"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="color"
              >
                Color
              </label>
              <input
                id="color"
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="color"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="sexo"
              >
                Sexo
              </label>
              <div className="relative">
                <select
                  id="sexo"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="sexo"
                >
                  <option></option>
                  <option>Macho</option>
                  <option>Hembra</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="especie"
              >
                Especie
              </label>
              <input
                id="especie"
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="especie"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="multiple_files"
              >
                Foto
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="multiple_files"
                type="file"
                multiple
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="comentario"
              >
                Comentario
              </label>
              <textarea
                id="comentario"
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="comentario"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreatePet;
