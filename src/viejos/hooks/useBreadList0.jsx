//Dependencies
import { useState, useEffect } from 'react';

const localCache = {};

export useBreedList = (animal) => {
	const [breedList, setBreedList] = useState([]);
	const [status, setStatus] = useState('unloaded');

useEffect(() => {
	if (!animal) {
		setBreedList([]);
	} else if (localCache[animal]) {
		setBreedList(localCache[animal]);
	} else {
		requestBreadList();
	}

	async function requestBreadList() {
		setBreedList([]);
		setStatus('loading');

		const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
		const json = await res.jason();
		localCache[animal] = json.breeds || [];
		setBreedList(localCache[animal]);
		setStatus('loaded');
	}

}, [animal]);
	return [breedList, status];
};
