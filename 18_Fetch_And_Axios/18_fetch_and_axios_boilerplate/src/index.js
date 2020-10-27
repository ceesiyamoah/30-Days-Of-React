import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Country = ({ country: { name, flag, population } }) => {
	return (
		<div className='country'>
			<div className='country_flag'>
				<img src={flag} alt={name} />
			</div>
			<h3 className='country_name'>{name.toUpperCase()}</h3>
			<div class='country_text'>
				<p>
					<span>Population: </span>
					{population}
				</p>
			</div>
		</div>
	);
};

class App extends Component {
	state = { data: [] };

	componentDidMount() {
		this.FetchData();
	}
	FetchData = async () => {
		try {
			const response = await axios.get('https://api.thecatapi.com/v1/breeds');
			const data = await response.data;
			this.setState({ data });
			const arr = [...data];
			data.forEach((item, index) => {
				axios
					.get(`https://api.thecatapi.com/v1/images/search?breed_id=${item.id}`)
					.then(({ data }) => (arr[index].image = data[0].url))
					.catch((error) => {
						console.log(error);
					});
			});
			this.setState({ data: arr });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div className='App'>
				<header>
					<h1>30 days of react</h1>
					<CatDetails data={this.state.data} />
				</header>
				{this.state.data.map((cat) => (
					<div key={cat.id}>
						<Cat info={cat} />
					</div>
				))}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));