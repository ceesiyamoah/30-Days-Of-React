import React from 'react';
import ReactDOM from 'react-dom';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';

const images = [htmlLogo, cssLogo, reactLogo];
const title = 'Front End Technologies';
const App = () => (
	<div>
		<p className='title'>{title}</p>
		<div className='main'>
			{images.map((image) => (
				<img src={image} key={image} alt='technology' />
			))}
		</div>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
