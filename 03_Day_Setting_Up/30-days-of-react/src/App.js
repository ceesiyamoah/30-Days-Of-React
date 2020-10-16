import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const initialState = {
	firstName: '',
	lastName: '',
	age: '',
	email: '',
	firstNameError: '',
	lastNameError: '',
	ageError: '',
	emailError: '',
};
export default class App extends Component {
	state = initialState;

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	validate = () => {
		let firstNameError = '';
		let lastNameError = '';
		let ageError = '';
		let emailError = '';

		if (this.state.firstName.length < 2) {
			firstNameError = 'Please enter a first name';
			this.setState({ firstNameError });
		}
		if (this.state.lastName.length < 2) {
			lastNameError = 'Please enter a last name';
			this.setState({ lastNameError });
		}
		if (!this.state.age || this.state.age < 18 || this.state.age > 99) {
			ageError = 'Enter a correct age';
			this.setState({ ageError });
		}
		if (this.state.email && !this.state.email.includes('@')) {
			console.log(this.state.email.includes('@'));
			emailError = 'Invalid email';
			this.setState({ emailError });
		}

		return !(firstNameError || lastNameError || ageError || emailError);
	};

	handleSubmit = (e) => {
		const { name } = e.target;
		if (this.validate()) {
			console.log(this.state);
			//* clear form
			this.setState({
				firstName: '',
				lastName: '',
				age: '',
				email: '',
				firstNameError: '',
				lastNameError: '',
				ageError: '',
				emailError: '',
			});
			console.log(this.state.firstName);
		}
		e.preventDefault();
	};

	render() {
		return (
			<div className='app'>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='firstName'>
						First Name:{' '}
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</label>
					<span style={{ color: 'red' }}>{this.state.firstNameError}</span>
					<label htmlFor='lastName'>
						Last Name:{' '}
						<input
							type='text'
							id='lastName'
							name='lastName'
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</label>
					<span style={{ color: 'red' }}>{this.state.lastNameError}</span>
					<label htmlFor='age'>
						Age:{' '}
						<input
							type='number'
							id='age'
							name='age'
							value={this.state.age}
							onChange={this.handleChange}
						/>
					</label>
					<span style={{ color: 'red' }}>{this.state.ageError}</span>
					<label htmlFor='email'>
						Email:{' '}
						<input
							type='email'
							id='email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</label>
					<span style={{ color: 'red' }}>{this.state.emailError}</span>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
