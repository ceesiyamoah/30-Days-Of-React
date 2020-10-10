import React from 'react';
import ReactDOM from 'react-dom';

const app = (
	<div className='subscribe'>
		<h1 className='subscribe-title'>SUBSCRIBE</h1>
		<span className='subscribe-text'>
			Sign up with your email address to receive news and updates
		</span>
		<div className='subscribe-form'>
			<input placeholder='First name' className='subscribe-form-input' />
			<input placeholder='Last name' className='subscribe-form-input' />
			<input placeholder='Email' className='subscribe-form-input' />
		</div>
		<button className='subscribe-btn'>Subscribe</button>
	</div>
);

ReactDOM.render(app, document.getElementById('root'));
