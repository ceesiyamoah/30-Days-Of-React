import React from 'react';
import { NavLink } from 'react-router-dom';

import { data } from './../data/challengeData';

export const Challenges = () => {
	return (
		<>
			<h1>Choose your challenge</h1>
			{data.map(({ name, slug }) => (
				<div key={slug}>
					<NavLink to={`/challenges/${slug}`}>{name}</NavLink>
				</div>
			))}
		</>
	);
};
