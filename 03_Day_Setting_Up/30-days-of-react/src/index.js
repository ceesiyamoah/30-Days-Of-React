import React from 'react';
import ReactDOM from 'react-dom';
import { countriesData } from './countries';

const data = {
	header: {
		headerTitle: '30 Days Of React',
		subtitle: 'World Population',
	},
	graph: {
		graphTitle: 'Ten most populated countries',
		countries: countriesData,
	},
};
const commarize = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const Header = ({ title, subtitle, size = '70px' }) => {
	return (
		<div className='header-wrapper'>
			<span className='header-title' style={{ fontSize: size }}>
				{title}
			</span>
			<span className='header-subtitle'>{subtitle}</span>
		</div>
	);
};
const Population = ({ countries, total }) => (
	<div>
		<div className='popu-wrapper'>
			<span className='popu-countryname'>World</span>
			<div className='popu-length'>
				<div className='popu-length-bar'>&nbsp; </div>
			</div>
			<div className='popu-value'>{commarize(total)}</div>
		</div>
		{countries.map((country) => (
			<div className='popu-wrapper'>
				<span className='popu-countryname'>{country.name}</span>
				<div className='popu-length'>
					<div
						className='popu-length-bar'
						style={{ width: `${(country.population / total) * 100}%` }}
					>
						&nbsp;{' '}
					</div>
				</div>
				<div className='popu-value'>{commarize(country.population)}</div>
			</div>
		))}
	</div>
);

const Graph = ({ graph: { graphTitle, countries } }) => {
	countries.sort(
		(country1, country2) => country2.population - country1.population
	);
	const popTotal = countries.reduce(
		(total, item) => (total += item.population),
		0
	);

	const countriesList = countries.slice(0, 9);
	return (
		<div>
			<Header title={graphTitle} size='10px' />
			<Population countries={countriesList} total={popTotal} />
		</div>
	);
};

const App = ({
	data: {
		header: { headerTitle, subtitle },
		graph,
	},
}) => (
	<div>
		<Header title={headerTitle} subtitle={subtitle} />
		<Graph graph={graph} />
	</div>
);

ReactDOM.render(<App data={data} />, document.getElementById('root'));
