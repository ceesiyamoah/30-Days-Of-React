import React from 'react';

export const Login = ({ loggedIn, handleLogin }) => {
	return (
		<div>
			{loggedIn ? <p>Welcome</p> : <p>Please log in</p>}
			<button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
		</div>
	);
};
