import React from 'react';
import ReactDOM from 'react-dom';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';

const title = 'Front End Technologies';
const data = {
	title: title,
	images: [htmlLogo, cssLogo, reactLogo],
};
const App = ({ data: { title, images } }) => (
	<div>
		<p className='title'>{title}</p>
		<div className='main'>
			{images.map((image) => (
				<img src={image} key={image} alt='technology' />
			))}
		</div>
	</div>
);

ReactDOM.render(<App data={data} />, document.getElementById('root'));
