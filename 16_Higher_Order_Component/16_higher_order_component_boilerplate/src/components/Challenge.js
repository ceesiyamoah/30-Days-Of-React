import React from 'react';
import { data } from './../data/challengeData';

export const Challenge = (props) => {
	const challenge = data.find((item) => item.slug === props.match.params.id);
	const {
		name,
		description,
		duration,
		level,
		days,
		author: { firstName, lastName },
	} = challenge;

	return (
		<>
			<h1>{name}</h1>
			<p>{description}</p>
			{{ duration } && (
				<p>
					Duration: <small>{duration}</small>
				</p>
			)}
			<p>Level: {level}</p>
			<p>Days: {days}</p>
			<p>
				Author: {firstName} {lastName}
			</p>
		</>
	);
};
