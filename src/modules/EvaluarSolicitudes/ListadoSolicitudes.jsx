import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPets,
  selectPetIds,
  getPetsStatus,
  getPetsError,
} from "../../redux/reducers/pets/petsSlice";
import Solicitud from "./Solicitud";

const ListadoSolicitudes = () => {
  const dispatch = useDispatch();
  const orderedPetsIds = useSelector(selectPetIds);
  const petStatus = useSelector(getPetsStatus);
  const error = useSelector(getPetsError);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  let content;
  if (petStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (petStatus === "succeeded") {
    content = orderedPetsIds.map((petId) => (
      <Solicitud key={petId} petId={petId} />
    ));
  } else if (petStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <>
      <div className="container justify-center mx-auto">
        <h1 className="text-cyan-600 font-black text-3xl text-center p-24 uppercase">
          Listado de Mascotas
        </h1>
      </div>
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

export default ListadoSolicitudes;
