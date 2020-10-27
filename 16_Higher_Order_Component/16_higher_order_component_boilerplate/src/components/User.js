import React from 'react';
import { Redirect } from 'react-router-dom';

export const User = ({ loggedIn, match, handleLogin }) => {
	const user = match.params.username;

	return (
		<div>
			{loggedIn ? (
				<h1>Welcome {user} </h1>
			) : (
				<div>
					{loggedIn ? <p>Welcome</p> : <p>Please log in</p>}
					<button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
				</div>
			)}
		</div>
	);
};
