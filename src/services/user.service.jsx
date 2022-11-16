import ClienteAxios from "../config/clienteAxios";

const createUser = async (data) => {
  return await ClienteAxios.post("usuarios", data);
};

const getAll = async () => {
  const response = await ClienteAxios.get("usuarios");
  return response
};

const usersService = {
  createUser,
  getAll
};

export default usersService;
