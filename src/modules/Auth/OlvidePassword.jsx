import { Link } from "react-router-dom";
const OlvidePassword = () => {
  return (
    <>
      <div className="container mx-auto px-7 py-12">
        <div className="bg-slate-50 max-w-2xl  mx-auto  px-7 py-10 rounded-lg ounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-gray-300 overflow-hidden ">
          {" "}
          <div class="px-4 py-3">
            <h2 className="text-sky-600 text-2xl  text-center py-7  px-7 font-medium mb-1 uppercase">
              Restablecer su contraseña
            </h2>
            <p class="text-base text-gray-600 leading-normal">
              Escriba su correo electrónico en el campo a continuación y le
              enviaremos un código para restablecer su contraseña.
            </p>
          </div>
          <form className="px-1 py-7">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl font-bold  mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder=""
              />
            </div>

            <div className="w-full px-3">
              <input
                type="submit"
                value="Enviar Instrucciones"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
hover:cursor-pointer hover:bg-sky-800 transition-colors"
              />
            </div>
          </form>
          <nav className="lg:flex lg:justify-end px-2">
            <Link
              className=" block text-center my-2 px-5 text-sky-600  text-xl"
              to="/cuenta/login"
            >
              Atras para iniciar sesión
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default OlvidePassword;
