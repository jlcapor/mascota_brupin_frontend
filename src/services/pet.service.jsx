import ClienteAxios from "../config/clienteAxios";

const createPet = async (data) => {
  return await ClienteAxios.post("mascotas", data);
};

const petService = {
  createPet,
};

export default petService;
