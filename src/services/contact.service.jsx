import ClienteAxios from "../config/clienteAxios";


const createContact = async (contact) => {
  return await ClienteAxios.post("prospectos", contact);
};

const contactService = {
  createContact,
};


export default contactService;
