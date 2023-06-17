export const fetchPet = async ({ queryKey }) => {
	//console.log('queryKey from fetchPet: ', queryKey)
	const id = queryKey[1];
	const apiRes = await fetch(`http://pets-v2.dev-apis.com/pet?id=${id}`);

	if (!apiRes.ok) {
		throw new Error(`details/${id} fetch not OK`);
	}

	return apiRes.json();
};
