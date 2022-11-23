import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import User from "./User";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  selectUserIds,
} from "../../../redux/reducers/users/usersSlice";

const ListUser = () => {
  const dispatch = useDispatch();
  const usersIds = useSelector(selectUserIds);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  let content;
  if (userStatus == "loading") {
    content = <Spinner text="Loading..." />;
  } else if (userStatus === "succeeded") {
    content = usersIds.map((userId) => <User key={userId} user={userId} />);
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <h1 className="text-cyan-600 font-black text-3xl text-center p-24 uppercase">
        Listado de Usuarios
      </h1>
      <Link
        to="/admin/crear-usuario"
        className="text-white bg-cyan-600 hover:bg-cyan-700  text-sm px-7 py-2.5 text-center items-center mr-3  m-0 rounded-md uppercase font-bold"
      >
        Crear Usuario
      </Link>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      <table className="w-full border mt-4 px-4 py-5">
        <thead>
          <tr className="bg-sky-500 border-b">
            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Cedula</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Nombre</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Apellido</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Telefono</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Rol</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default ListUser;
