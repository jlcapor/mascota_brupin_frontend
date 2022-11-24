import ClienteAxios from "../config/clienteAxios";

const createPet = async (data) => {
  return await ClienteAxios.post("mascotas", data);
};

const updatePet = async (id, pet)=>{
  return await ClienteAxios.put(`mascotas/${id}`, pet);
}


const deletePet = async (id)=>{
  console.log(id)
  return await ClienteAxios.delete(`mascotas/${id}`);
}

const getAllPets = async () => {
  const response = await ClienteAxios.get("mascotas");
  return response;
};

const findPetsById = async (id) => {
  const response = await ClienteAxios.get(`usuarios/${id}/mascotas`);
  console.log(response.data)
  return response; 
};

const petService = {
  createPet,
  updatePet,
  deletePet,
  getAllPets,
  findPetsById
};

export default petService;
