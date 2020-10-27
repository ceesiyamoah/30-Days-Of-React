import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			countries: [],
		};
	}
	componentDidMount() {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(({ data }) => this.setState({ countries: data }))
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div>
				{this.state.countries.map((country) => (
					<div key={country.alpha2Code}>
						<p>{country.name}</p>
						<p>{country.capital}</p>
						<p>{country.population}</p>
					</div>
				))}
			</div>
		);
	}
}
