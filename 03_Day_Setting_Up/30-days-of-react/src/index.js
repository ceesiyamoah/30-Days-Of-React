import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { countriesData } from './countries';

const seasons = [
	{ name: 'summer', bgColor: '#d62828', fontColor: 'white' },
	{ name: 'autumn', bgColor: '#003049', fontColor: 'white' },
	{ name: 'spring', bgColor: '#a8dadc', fontColor: 'black' },
	{ name: 'winter', bgColor: '#0077b6', fontColor: 'white' },
];

const Header = ({
	header: { headerTitle, headerSubtile, authorName, date, instruction },
	season: { bgColor, fontColor },
}) => {
	return (
		<div className='header-wrapper' style={{ backgroundColor: bgColor }}>
			<span className='header-title'>{headerTitle}</span>
			<span className='header-subtitle'>{headerSubtile}</span>
			<span>{authorName}</span>
			<span>{date}</span>
			<span>{instruction}</span>
		</div>
	);
};

const Stats = ({ stats: { languages, capital, population, currency } }) => {
	const commarize = (num) =>
		num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return (
		<div className='stats-wrapper'>
			<span>
				<b>Capital: &nbsp;</b> {capital}
			</span>
			<span>
				<b>Language: &nbsp;</b> {languages[0]}
			</span>
			<span>
				<b>Population: &nbsp;</b> {commarize(population)}
			</span>
			<span>
				<b>Currency: &nbsp;</b> {currency}
			</span>
		</div>
	);
};

const CountryDetail = ({
	country: {
		country: { flag, name, ...stats },
	},
}) => {
	return (
		<div className='country-details-wrapper'>
			<div className='country-wrapper'>
				<img src={flag} alt='country' />
				<span className='country-name'>{name}</span>
				<Stats stats={stats} />
			</div>
		</div>
	);
};

class App extends Component {
	state = {
		country: countriesData[parseInt(Math.random() * countriesData.length)],
		season: seasons[parseInt(Math.random() * 4)],
	};
	changeCountry = () => {
		this.setState({
			country: countriesData[parseInt(Math.random() * countriesData.length)],
		});
		console.log(this.state);
	};
	changeSeason = () => {
		this.setState({
			season: seasons[parseInt(Math.random() * 4)],
		});
	};

	render() {
		const data = {
			headerTitle: 'Welcome to 30 days of React',
			headerSubtile: 'Getting Started with React',
			authorName: 'Cyril Yamoah',
			date: new Date().toDateString(),
			instruction: 'Select a country for next holiday',
			countries: countriesData,
		};

		return (
			<div
				className='App'
				style={{
					backgroundColor: this.state.season.bgColor,
					color: this.state.season.fontColor,
				}}
			>
				<Header header={data} season={this.state.season} />
				<CountryDetail country={this.state} />
				<button onClick={this.changeCountry}>Select Country</button>
				<button onClick={this.changeSeason}>Select day</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
