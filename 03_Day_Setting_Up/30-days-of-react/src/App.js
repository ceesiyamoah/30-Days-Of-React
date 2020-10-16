import React, { Component } from 'react';

const options = [
	{
		value: '',
		label: '-- Select Country--',
	},
	{
		value: 'Ghana',
		label: 'Ghana',
	},
	{
		value: 'Sweden',
		label: 'Sweden',
	},
	{
		value: 'Norway',
		label: 'Norway',
	},
	{
		value: 'Denmark',
		label: 'Denmark',
	},
];

export default class App extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		tel: '',
		dateOfBirth: '',
		favoriteColor: '#000000',
		weight: '',
		gender: '',
		file: [],
		bio: '',
		skills: {
			html: false,
			css: false,
			javascript: false,
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};
	handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		if (type === 'file') {
			//! Files implementation not working @16/10/2020G
			this.setState({ [name]: e.target.files[0] });
		} else if (type === 'checkbox') {
			console.log(name, checked);
			this.setState({ skills: { ...this.state.skills, [name]: checked } });
			console.log(this.state.file[0]);
		} else {
			this.setState({ [name]: value });
			console.log(name, value);
		}
	};

	render() {
		const {
			firstName,
			lastName,
			email,
			country,
			tel,
			dateOfBirth,
			favoriteColor,
			weight,
			gender,
			file,
			bio,
			skills,
		} = this.state;
		return (
			<div className='app'>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='firstName'>
						FirstName:{' '}
						<input
							type='text'
							id='firstName'
							placeholder='First name'
							name='firstName'
							required
							value={firstName}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='lastname'>
						Last Name:{' '}
						<input
							type='text'
							placeholder='Last name'
							name='lastName'
							required
							value={lastName}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='email'>
						Email:{' '}
						<input
							type='email'
							placeholder='Email'
							name='email'
							required
							value={email}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='country'>
						Country:{' '}
						<select id='country' onChange={this.handleChange}>
							{options.map(({ value, label }) => (
								<option value={value} key={value}>
									{label}
								</option>
							))}
						</select>
					</label>
					<label htmlFor='tel'>
						Telephone:{' '}
						<input
							type='tel'
							placeholder='tel'
							name='tel'
							required
							value={tel}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='dateOfBirth'>
						Date of Birth:{' '}
						<input
							type='date'
							placeholder='Date of Birth'
							name='dateOfBirth'
							required
							value={dateOfBirth}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='color'>
						Color:{' '}
						<input
							type='color'
							placeholder='Favorite color'
							name='favoriteColor'
							required
							value={favoriteColor}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='weight'>
						Weight:{' '}
						<input
							type='number'
							placeholder='weight'
							required
							name='weight'
							id='weight'
							value={weight}
							onChange={this.handleChange}
						/>
					</label>
					<div className='gender'>
						Gender:
						<input
							type='radio'
							name='gender'
							id='male'
							value='male'
							checked={gender === 'male'}
							onChange={this.handleChange}
						/>
						<label htmlFor='male'>Male</label>
						<input
							type='radio'
							name='gender'
							id='female'
							value='female'
							checked={gender === 'female'}
							onChange={this.handleChange}
						/>
						<label htmlFor='female'>Female</label>
					</div>
					<label htmlFor='file'>
						File:{' '}
						<input
							type='file'
							placeholder='File'
							required
							name='file'
							id='file'
							value={file}
							onChange={this.handleChange}
						/>
					</label>
					<label htmlFor='bio'>
						Bio:{' '}
						<textarea
							id='bio'
							name='bio'
							row='30'
							cols='120'
							value={bio}
							onChange={this.handleChange}
						></textarea>
					</label>
					<div className='skills'>
						<input
							type='checkbox'
							id='html'
							name='html'
							checked={skills.html}
							onChange={this.handleChange}
						/>
						<label htmlFor='html'>HTML</label>
						<input
							type='checkbox'
							id='css'
							name='css'
							checked={skills.css}
							onChange={this.handleChange}
						/>
						<label htmlFor='css'>CSS</label>
						<input
							type='checkbox'
							id='js'
							name='js'
							checked={skills.js}
							onChange={this.handleChange}
						/>
						<label htmlFor='js'>Javascript</label>
					</div>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
