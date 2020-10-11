import React from 'react';
import ReactDOM from 'react-dom';

const data = {
	title: 'SUBSCRIBE',
	text: 'Sign up with your email address to receive news and updates',
	placeholders: ['First name', 'Last name', 'Email'],
	btnText: 'subscribe',
};

const App = ({ data: { title, text, placeholders, btnText } }) => (
	<div className='subscribe'>
		<h1 className='subscribe-title'>{title}</h1>
		<span className='subscribe-text'>{text}</span>
		<div className='subscribe-form'>
			{placeholders.map((placeholder) => (
				<input
					placeholder={placeholder}
					key={placeholder}
					className='subscribe-form-input'
				/>
			))}
		</div>
		<button className='subscribe-btn'>{btnText}</button>
	</div>
);

ReactDOM.render(<App data={data} />, document.getElementById('root'));
