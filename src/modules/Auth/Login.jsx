import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";


const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/cuenta/user-profile");
    }
  }, [navigate, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    //INC MD5 JAVASCRIT
  
    dispatch(login({ usuario, clave }));
  };
  return (
    <>
      <div className="text-center mt-10">
        <div className="flex items-center justify-center ">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 className="text-4xl text-black font-bold tracking-tight">
          Inicia Sesión
        </h2>
        <span className="text-sm">
          <Link
            to="/cuenta/registrar"
            className="text-blue-500  text-2xl font-bold block text"
          >
            Crear cuenta
          </Link>
        </span>
      </div>
      <div className="flex justify-center  mx-4 md:mx-0 px-7 py-12 ">
        <form
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-9 border-gray-200  dark:bg-gray-100 dark:border-gray-300 overflow-hidden"
          onSubmit={submitHandler}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="clave"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label for="remember" className="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-1 bg-white shadow"
                />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
              </label>
              <div className="w-1/2 text-right">
                <Link to="/cuenta/olvide-password" className="text-blue-500 text-sm tracking-tight">
                  Forget your password?
                </Link>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="bg-sky-700 mb-5 w-full py-3
                 text-white uppercase font-bold rounded
                  hover:cursor-pointer hover:bg-sky-800 
                  transition-colors"
              >
                Iniciar Sesion
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
