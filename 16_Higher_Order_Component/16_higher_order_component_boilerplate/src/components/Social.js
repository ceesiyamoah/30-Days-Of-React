import React from 'react';

export const Social = ({ data, match }) => {
	console.log(data);
	const social = data.find((item) => item.name === match.params.id);
	console.log(social);

	return (
		<>
			<h1>{social.name}</h1>
			<p>{social.url}</p>
		</>
	);
};
