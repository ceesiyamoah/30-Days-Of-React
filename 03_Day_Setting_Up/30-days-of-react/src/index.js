import React from 'react';
import ReactDOM from 'react-dom';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';

const app = (
	<div>
		<p className='title'>Front End Technologies</p>
		<div className='main'>
			<img src={htmlLogo} alt='html Logo' />
			<img src={cssLogo} alt='CSS Logo' />
			<img src={reactLogo} alt='react Logo' />
		</div>
	</div>
);

ReactDOM.render(app, document.getElementById('root'));
