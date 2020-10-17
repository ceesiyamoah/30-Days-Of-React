import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		console.log('I am  the constructor and  I will be the first to run.');
		this.state = {
			firstName: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log(
			props,
			state,
			'I am getDerivedStateFromProps and I will be the second to run.'
		);
		return null;
	}
	componentDidMount() {
		console.log('I am componentDidMount and I will be last to run.');
	}

	render() {
		console.log('I am render and I will be the third to run.');
		return (
			<div className='App'>
				<h1>React Component Life Cycle</h1>
			</div>
		);
	}
}
