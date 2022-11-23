import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPetById, deletePet } from "../../redux/reducers/pets/petsSlice";
import Swal from 'sweetalert2';

const SolicitudMascota = ({ petId }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const pet = useSelector((state) => selectPetById(state, petId));



  // Confirmar si desea eliminarlo
  const confirmarEliminarSolicitud = id => {
    // preguntar al usuario
    Swal.fire({
        title: '¿Estas seguro?',
        text: "Se eliminara la solictud de listdo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            // pasarlo al action
            dispatch(deletePet(id))
        }
    });
}

  const { id, nombre, color, sexo, especie, estado } = pet;
  return (
    <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
      <td className="p-2 border-r">{nombre}</td>
      <td className="p-2 border-r">{color}</td>
      <td className="p-2 border-r">{sexo}</td>
      <td className="p-2 border-r">{especie}</td>
      <td className="p-2 border-r">{estado}</td>
      <td className=" flex gap-1 justify-center">
        <button
          type="button"
          className="bg-red-600 p-2 text-white hover:shadow-lg text-xs font-thin"
          onClick={() => confirmarEliminarSolicitud(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};
export default SolicitudMascota;
