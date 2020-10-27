import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = ({ username }) => (
	<ul>
		<li>
			<NavLink to='/ '>Home</NavLink>
		</li>
		<li>
			<NavLink to='/contact'>Contact Us</NavLink>
		</li>
		<li>
			<NavLink to='/about'>About</NavLink>
		</li>
		<li>
			<NavLink to={`/user/${username}`}>User</NavLink>
		</li>
		<li>
			<NavLink to='/challenges'>Challenges</NavLink>
		</li>
	</ul>
);
