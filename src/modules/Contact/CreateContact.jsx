import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoading,
  saveNewContact,
} from "../../redux/reducers/contact/contactSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiStatus = useSelector(getLoading);

  // nuevo state de producto
  const [contacto, setContacto] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    comentario: "",
  });

  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const handleChange = (e) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, apellido, correo, celular, comentario } = contacto; //para recetear el formulario
  const canSave =
    [nombre, apellido, correo, celular, comentario].every(Boolean) &&
    addRequestStatus === "idle";

    const onSaveContactClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(
          saveNewContact({
            nombre,
            apellido,
            correo,
            celular,
            comentario,
          })
        ).unwrap()


        // mostrar mensaje
    Swal.fire({
      title: "Contacto Enviado con Exito.",
      icon: "success",
      confirmButtonText: "Ententido",
    });

        setContacto({
          nombre:"",
          apellido: "",
          correo: "",
          celular: "",
          comentario: "",
        });
      } catch (error) {
        console.log(error)
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-sky-500">
          Contacto
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="nombre"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={contacto.nombre}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              onChange={handleChange}
              value={apellido}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="correo"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              name="correo"
              id="correo"
              onChange={handleChange}
              value={correo}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="celular"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Celular
            </label>
            <input
              type="text"
              name="celular"
              id="celular"
              onChange={handleChange}
              value={celular}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>

          <div className="sm:col-span-2">
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
              onChange={handleChange}
              value={comentario}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-sky-700 mb-5 w-full py-3
          text-white uppercase font-bold rounded
           hover:cursor-pointer hover:bg-sky-800 
           transition-colors"
           onClick={onSaveContactClicked}
           disabled={!canSave}
         >
            {apiStatus  === "pending"? "Saving.........": " Crear Usuario"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateContact;
