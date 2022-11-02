import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="contain">
        <div className="bg-slate-50 max-w-lg  mx-auto  px-6 py-7 shadow rounded-lg overflow-hidden ">
          <h2 className="text-sky-600 text-4xl  text-center py-4 font-medium mb-1 capitalize">
            Login
          </h2>
          <form>
            <div className="space-y-2">
              <div>
                <label className="text-gray-700  text-xl mb-2 block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="youremail.@domain.com"
                />
              </div>
              <div>
                <label className="text-gray-700 text-xl mb-2 block " htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="*******"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label className="text-gray-600 ml-3 cursor-pointer text-lg">
                  Remember me
                </label>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="submit"
                value="Iniciar Sesion"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
                    hover:cursor-pointer hover:bg-sky-800 transition-colors"
              />
            </div>
          </form>

          <nav className="lg:flex lg:justify-between">
            <Link
              className=" block text-center my-2 px-1 text-sky-600  text-lg"
              to="/auth/registrar"
            >
              Registrate
            </Link>

            <Link
              className=" block text-center my-2  mx-2 text-sky-600  text-lg"
              to="/auth/olvide-password"
            >
              ¿Perdiste tu contraseña?
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Login;
