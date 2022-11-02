import { Link } from "react-router-dom";


const NuevoPassword = () => {
  return (
    <>
       <>
      <div className="bg-white  my-10 py-9 px-6 shadow rounded-lg sm:px-15">
        <h2 className=" text-sky-600 text-2xl  text-center py-7  px-7 font-medium mb-1 uppercase">
          Reestablece tu Password
        </h2>

        <form>
        

         

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Nuevo Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
            />
          </div>


          <div className="w-full px-3 p-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="password2"
            >
              Confirmar Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password2"
              type="password"
            />
          </div>

         

          <div className="w-full px-3">
            <input
              type="submit"
              value="Escribe tu Nuevo Password"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded
hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </div>
        </form>
        
      </div>
    </>
    </>
  )
}

export default NuevoPassword
