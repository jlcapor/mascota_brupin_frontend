import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPetById, updatePet } from "../../redux/reducers/pets/petsSlice";

const ResolucionSolicitud = () => {
  const { petId } = useParams();
  const pet = useSelector((state) => selectPetById(state, petId));
  if (!pet) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(pet.nombre);
  const [color, setColor] = useState(pet.color);
  const [sexo, setSexo] = useState(pet.sexo);
  const [especie, setEspecie] = useState(pet.especie);
  const [estado, setEsatdo] = useState(pet.estado);
  const [planId, setPlanId] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");
  const petStatus = useSelector((state) => state.pets.status);
  const dispatch = useDispatch();

  if (!pet) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const canSave =
    [nombre, color, sexo, especie].every(Boolean) && requestStatus === "idle";

  const onSavePetClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePet({
            id: petId,
            nombre,
            color,
            sexo,
            especie,
            estado,
            usuarioId,
            planId,
          })
        );
        navigate(`/cuenta/ver-solicitudes`);
      } catch (error) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };
  return (
    <>
      <div className="text-center px-5 py-9 mt-8">
        <h2 className="text-4xl text-blue-500 font-bold tracking-tight uppercase">
          Mascotas
        </h2>
      </div>

      <div className="container justify-center mx-auto px-7 py-5">
        <div className=" max-w-3xl  mx-auto  px-7 py-10 rounded-lg ounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 overflow-hidden text-2xl">
          <form>
            <div className="w-full px-3 mb-2 p-3 ">
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
                disabled
              />
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
                  disabled
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
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                    disabled
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
                    disabled
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
                    disabled
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
            <div className="w-full px-3 mb-2 p-3 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="estado"
              >
                Estado
              </label>
              <div className="relative">
                <select
                  id="estado"
                  name="estado"
                  value={estado}
                  onChange={(e) => setEsatdo(e.target.value)}
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                >
                  <option>--Estado de la Solicitud--</option>
                  <option>Pendiente</option>
                  <option>Acepta</option>
                  <option>Rechazada</option>
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
            <div className="w-full px-3 mb-2 p-3 ">
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
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="w-full px-3 p-3">
              <button
                type="button"
                className="bg-sky-700 mb-5 w-full py-3
               text-white uppercase font-bold rounded
                hover:cursor-pointer hover:bg-sky-800 
                transition-colors"
                onClick={onSavePetClicked}
              >
                Guardar Mascota
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResolucionSolicitud;
