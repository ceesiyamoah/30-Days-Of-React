import React from 'react';
import ReactDOM from 'react-dom';

const getHexa = () => {
	const chars = 'abcdef0123456789';
	let hexa = [];
	for (let index = 0; index < 6; index++) {
		hexa += chars[parseInt(Math.random() * chars.length)];
	}
	return '#'.concat(hexa);
};

const HexaColor = () => (
	<div className='color-holder'>
		<div style={{ backgroundColor: getHexa() }}>{getHexa()}</div>
	</div>
);

const App = () => (
	<div className='app'>
		<HexaColor />
		<HexaColor />
		<HexaColor />
		<HexaColor />
		<HexaColor />
		<HexaColor />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
