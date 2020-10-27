import React from 'react';
import { socialDetails } from '../data/challengeData';
import { NavLink } from 'react-router-dom';

export const About = () => (
	<div>
		<h1>Choose the mode of contact</h1>
		{socialDetails.map(({ name }) => (
			<NavLink key={name} to={`/about/${name}`}>
				{name}
				<br />
			</NavLink>
		))}
	</div>
);
