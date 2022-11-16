import { useNavigate, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/reducers/users/usersSlice";
const User = ({ user }) => {
  const navigate = useNavigate();
  const userIds = useSelector((state) => selectUserById(state, user));
  
  const { id, cedula, nombre, apellido, telefono, rol } = userIds;
  return (
    <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
      <td className="p-2 border-r">{cedula}</td>
      <td className="p-2 border-r">{nombre}</td>
      <td className="p-2 border-r">{apellido}</td>
      <td className="p-2 border-r">{telefono}</td>
      <td className="p-2 border-r">{rol}</td>
      <td className=" flex gap-1 justify-center">
        <button
          type="button"
          className="bg-blue-500 p-2  text-white hover:shadow-lg text-xs font-thin"
          onClick={() => navigate(`/dashboard/editar-usuario/${id}`)}
        >
          Edit
        </button>

        <button
          type="button"
          className="bg-emerald-500 p-2 text-white hover:shadow-lg text-xs font-thin"
        >
          Ver
        </button>
      </td>
    </tr>
  );
};
export default User;
