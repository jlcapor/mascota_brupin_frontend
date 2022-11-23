import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findPetsById } from "../../redux/reducers/pets/petsSlice";
import { authSelector } from "../../redux/reducers/auth/authSlice";
import {
  selectPetIds,
  getPetsStatus,
  getPetsError,
} from "../../redux/reducers/pets/petsSlice";
import SolicitudMascota from "./SolicitudMascota";
import Spinner from "../../components/Spinner";

const RevisarSolicitudes = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(authSelector);
  const { user: currentUser } = userInfo;
  const { id } = currentUser.datos;

  const orderedPetsIds = useSelector(selectPetIds);
  const petStatus = useSelector(getPetsStatus);
  const error = useSelector(getPetsError);

  useEffect(() => {
    if (petStatus === "idle") {
      const cargarMascotas = () => dispatch(findPetsById(id));
      cargarMascotas();
    }
  }, [petStatus, id, dispatch]);

  let content;
  if (petStatus == "loading") {
    content = <Spinner text="Loading..." />;
  } else if (petStatus === "succeeded") {
    content = orderedPetsIds.map((petId) => (
      <SolicitudMascota key={petId} petId={petId} />
    ));
  } else if (petStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      <div className="container justify-center mx-auto">
        <h1 className="text-cyan-600 font-black text-3xl text-center p-10 uppercase">
          Solicitudes
        </h1>
      </div>

      <Link
        to="/cuenta/crear-mascota"
        className="text-white bg-cyan-600 hover:bg-cyan-700  text-sm px-7 py-2.5 text-center items-center mr-3  m-0 rounded-md uppercase font-bold"
      >
        Afiliacion Mascota
      </Link>
      <table className="w-full border mt-4 px-4 py-5">
        <thead>
          <tr className="bg-sky-500 border-b">
            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Nombre</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Color</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Sexo</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Especie</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Esatdo</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-lg  text-white font-bold">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </>
  );
};
export default RevisarSolicitudes;
