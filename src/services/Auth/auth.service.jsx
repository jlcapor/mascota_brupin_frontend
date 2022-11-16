import { data } from "autoprefixer";
import ClienteAxios from "../../config/clienteAxios";
import clienteAxios from "../../config/clienteAxios";

//Login iniciar sesion
const login = async (data) => {
  const response = await ClienteAxios.post("identificarUsuario", data);
  if (response.data.tk) {
    localStorage.setItem("userToken", JSON.stringify(response.data));
  }
  return response;
};


// Register user
const register = async (userData) => {
  const response = await clienteAxios.post("usuarios", userData);
  return response.data.user;
};

const logout = () => {
  localStorage.removeItem("userToken");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
