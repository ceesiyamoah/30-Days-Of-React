import React from 'react';
import ReactDOM from 'react-dom';

const data = {
	header: {
		title: '30 Days Of React',
		subtitle: 'Hexadecimal Colors',
	},
	numberOfCells: 32,
};

const getHex1 = () => {
	const chars = '0123456789abcdef';
	const hex = [];
	for (let i = 0; i < 6; i++) {
		hex.push(chars[parseInt(Math.random() * 16)]);
	}
	return '#' + hex.join('');
};
const Header = ({ header: { title, subtitle } }) => {
	return (
		<div className='header-wrapper'>
			<span className='header-title'>{title}</span>
			<span className='header-subtitle'>{subtitle}</span>
		</div>
	);
};
const Grid = ({ getHex, numberOfCells }) => {
	const cellsArray = [];
	for (let i = 0; i < numberOfCells; i++) {
		cellsArray.push(i);
	}
	return (
		<div className='grid-wrapper'>
			{cellsArray.map((cell) => (
				<Cell getHex={getHex} key={cell} />
			))}
		</div>
	);
};
const Cell = ({ getHex }) => {
	const color = getHex();
	return (
		<div className='cell-wrapper' style={{ backgroundColor: color }}>
			{color}
		</div>
	);
};
const App = ({ data: { header, numberOfCells }, getHex }) => (
	<div>
		<Header header={header} />
		<Grid getHex={getHex} numberOfCells={numberOfCells} />
	</div>
);
ReactDOM.render(
	<App data={data} getHex={getHex1} />,
	document.getElementById('root')
);
