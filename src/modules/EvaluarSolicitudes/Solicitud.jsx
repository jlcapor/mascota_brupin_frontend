import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPetById } from "../../redux/reducers/pets/petsSlice";
const Solicitud = ({ petId }) => {
  const navigate = useNavigate();
  const pet = useSelector((state) => selectPetById(state, petId));
  const { id, nombre, color, sexo, especie, estado } = pet;

  const [modal, setModal] = useState(false)
  const redireccionarEdicion = (pet) => {
    navigate(`/admin/resolucion-solicitud/${pet.id}`);
  };
  return (
    <>
      <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
        <td className="p-2 border-r">{nombre}</td>
        <td className="p-2 border-r">{color}</td>
        <td className="p-2 border-r">{sexo}</td>
        <td className="p-2 border-r">{especie}</td>
        <td className="p-2 border-r">{estado}</td>
        <td className=" flex gap-1 justify-center">
          <button
            type="button"
            className="bg-slate-400 p-2  text-white hover:shadow-sm text-xs font-thin"
            onClick={() => redireccionarEdicion(pet)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </td>
      </tr>

    </>
  );
};
export default Solicitud;
