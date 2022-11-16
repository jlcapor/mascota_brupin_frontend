import { Link } from "react-router-dom";
const PetList = () => {
  return (
    <>
      <div className="container justify-center mx-auto">
        <h1 className="text-cyan-600 font-black text-3xl text-center p-24 uppercase">
          Listado de Mascotas
        </h1>
        <Link
          to="/dashboard/crear-mascota"
          className="text-white bg-cyan-600 hover:bg-cyan-700  text-sm px-7 py-2.5 text-center items-center mr-3  m-0 rounded-md uppercase font-bold"
        >
          Crear Mascota
        </Link>
      </div>
      <table className="w-full border mt-4 px-4 py-5">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-900">
              <div className="flex items-center justify-center">Nombre</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-900">
              <div className="flex items-center justify-center">
                Fecha Nacimiento
              </div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-900">
              <div className="flex items-center justify-center">Color</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-900">
              <div className="flex items-center justify-center">Sexo</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-900">
              <div className="flex items-center justify-center">Especie</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-900">
              <div className="flex items-center justify-center">Estado</div>
            </th>

            <th className="p-2 border-r cursor-pointer text-lg font-thin text-gray-500">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
      </table>
    </>
  );
};
export default PetList;
