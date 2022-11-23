import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/reducers/users/usersSlice";
const User = ({ user }) => {
  const navigate = useNavigate();
  const userId = useSelector((state) => selectUserById(state, user));
  const { id, cedula, nombre, apellido, telefono, rol } = userId;
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
          className="bg-green-600 p-2  text-white hover:shadow-sm text-xs font-thin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </button>

        <button
          type="button"
          className="bg-emerald-500 p-2 text-white hover:shadow-lg text-xs font-thin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path
              fill-rule="evenodd"
              d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          type="button"
          className="bg-red-600 p-2 text-white hover:shadow-lg text-xs font-thin"
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
export default User;