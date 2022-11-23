import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createNewPet } from "../../redux/reducers/pets/petsSlice";
import { authSelector } from "../../redux/reducers/auth/authSlice";

const SolicitarAfiliacion = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(authSelector);
  const { user: currentUser } = userInfo
  const {id} = currentUser.datos;
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [sexo, setSexo] = useState("");
  const [especie, setEspecie] = useState("");
  const [estado, setEsatdo] = useState("Pendiente");
  const [usuarioId, setUsuarioId] = useState(id);
  const [planId, setPlanId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

 

  const dispatch = useDispatch();

  // mandar llamar el action de productoAction

  const canSave =
    [nombre, color, sexo, especie].every(
      Boolean
    ) && addRequestStatus === "idle";

  const onSavePetClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(
          createNewPet({
            nombre,
            color,
            sexo,
            especie,
            estado,
            usuarioId,
            planId,
          })
        ).unwrap();
        setNombre('')
        setColor('')
        setSexo('')
        setEspecie('')
        navigate("/cuenta/ver-solicitudes");
      } catch (error) {
        console.error("Failed to save the post: ", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  return (
    <>
      <div className="text-center px-5 py-9">
        <h2 className="text-4xl text-blue-500 font-bold tracking-tight uppercase">
          Solicitud Afiliacion
        </h2>
      </div>
      <div className="container justify-center mx-auto px-7 py-5">
        <div className=" max-w-3xl  mx-auto  px-7 py-10 rounded-lg ounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 overflow-hidden ">
          <form>
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
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="fechaNacimiento"
                >
                  Fecha Nacimiento
                </label>
                <input
                  id="fechaNacimiento"
                  type="date"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 p-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="sexo"
                >
                  Sexo
                </label>
                <div className="relative">
                  <select
                    id="sexo"
                    name="sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>--Selecione el Sexo de la Mascota</option>
                    <option>Macho</option>
                    <option>Hembra</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="foto"
              >
                Foto
              </label>
              <input
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                id="foto"
                type="file"
                multiple
              />
            </div>

            <div className="flex flex-wrap -mx-3 mb-6 p-3">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="especie"
                >
                  Especie
                </label>
                <div className="relative">
                  <select
                    id="especie"
                    name="especie"
                    value={especie}
                    onChange={(e) => setEspecie(e.target.value)}
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>--Seleccione la Especie--</option>
                    <option>Perro</option>
                    <option>Gato</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="raza"
                >
                  Raza
                </label>
                <div className="relative">
                  <select
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    id="raza"
                    name="raza"
                  >
                    <option>--Selecciona la Raza del Mascota</option>
                    <option>Pincher Miniatura</option>
                    <option>Bichon Maltes</option>
                    <option>Terrier Tibetano</option>
                    <option>Lancashire Heeler</option>
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
            </div>


            <div className="w-full px-3 p-3">
              <button
                type="button"
                className="bg-sky-700 mb-5 w-full py-3
                 text-white uppercase font-bold rounded
                  hover:cursor-pointer hover:bg-sky-800 
                  transition-colors"
                onClick={onSavePetClicked}
                disabled={!canSave}
              >
                {addRequestStatus === "pending"
                  ? "Saving........."
                  : " Crear Mascota"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SolicitarAfiliacion;
