import ClienteAxios from '../config/ClienteAxios';

const autenticacionToken = async ({ token }) => {
	return await ClienteAxios('/usuarios/perfil', {
		headers: {
			'Content-Type': 'application/json',
			 Authorization: {token}
		},
	});
};

export default autenticacionToken;