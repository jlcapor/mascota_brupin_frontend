import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewUsers } from "../../../redux/reducers/users/usersSlice";
import {
  mostrarAlerta,
  ocultarAlerta,
} from "../../../redux/reducers/iu/alertaSlice";
const CreateUser = () => {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const canSave =
    [cedula, nombre, apellido, telefono, correo, rol].every(Boolean) &&
    addRequestStatus === "idle";
  const onSaveUserClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(
          addNewUsers({
            cedula,
            nombre,
            apellido,
            telefono,
            correo,
            rol,
          })
        ).unwrap();
        setCedula("");
        setNombre("");
        setApellido("");
        setTelefono("");
        setCorreo("");
        setRol("");
        navigate("/admin/lista-usuarios");
      } catch (error) {
        const alerta = {
          msg: "Hubo un error",
          classes: "alert alert-danger text-center text-uppercase p3",
        };
        dispatch(mostrarAlerta(alerta));
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <>
      <div className="container justify-center mx-auto">
        <h1 className="text-cyan-600 font-black text-3xl text-center px-7 py-11  mt-11 uppercase">
          Agregar un nuevo usuario
        </h1>
        <div className="bg-slate-50 max-w-2xl  mx-auto  rounded-lg ounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 overflow-hidden ">
          <div className="container justify-center mx-auto px-7 py-12 ">
            <form>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="cedula"
                >
                  Cedula
                </label>
                <input
                  id="cedula"
                  type="number"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="cedula"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>

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
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Jane"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="apellido"
                  >
                    Apellido
                  </label>
                  <input
                    id="apellido"
                    type="text"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="celular"
                >
                  Celular
                </label>
                <input
                  id="celular"
                  type="number"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="rol"
                >
                  Rol
                </label>
                <div className="relative">
                  <select
                    id="rol"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="rol"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  >
                    <option>--Seleccione el Rol---</option>
                    <option>Administrador</option>
                    <option>Asesor</option>
                    <option>Cliente</option>
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
              <div className="w-full px-3 p-3">
                <button
                  type="button"
                  className="bg-sky-700 mb-5 w-full py-3
                 text-white uppercase font-bold rounded
                  hover:cursor-pointer hover:bg-sky-800 
                  transition-colors"
                  onClick={onSaveUserClicked}
                  disabled={!canSave}
                >
                   {addRequestStatus === "pending"? "Saving.........": " Crear Usuario"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;