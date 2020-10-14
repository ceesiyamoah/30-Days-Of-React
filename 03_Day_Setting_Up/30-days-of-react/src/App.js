import React, { Component } from 'react';
import { countriesData } from './data/countries';
import { seasons } from './data/seasons';
import { CountryDetail } from './components/countryDetail/countryDetail/CountryDetail';
import { Header } from './components/countryDetail/header/Header';

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

export default App;
