//Dependencies
import React from 'react';

export const Pet = ({images, location, id, name, animal, breed }) => {

	let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
	if (images.length) {
		hero = images[0];
	}

	return (
	<a href={`/details/${id}`} className='pet'>
		<div className="image-container">
			<img src={hero} alt={name} />
		</div>
		<div className="info">
			<h1>{name}</h1>
			<h2>{`${animal} - ${breed} - ${location}`}</h2>
		</div>
	</a>
	);
};