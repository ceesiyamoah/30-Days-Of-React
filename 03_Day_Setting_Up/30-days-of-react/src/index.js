import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cyrilImage from './images/img.jpg';

//* * Improve implementation of theme toggle

const Header = ({
	header: {
		headerTitle,
		headerSubtile,
		authorName,
		date,
		theme: { backgroundColor, fontColor },
	},
}) => {
	return (
		<div
			className='header-wrapper'
			style={{ backgroundColor: backgroundColor, color: fontColor }}
		>
			<span className='header-title'>{headerTitle}</span>
			<span className='header-subtitle'>{headerSubtile}</span>
			<span>{authorName}</span>
			<span>{date}</span>
		</div>
	);
};

const Pre = ({
	requirements: {
		requirements,
		theme: { backgroundColor },
	},
}) => {
	let bgColor =
		'rgb(7, 175, 218)' === backgroundColor ? 'white' : 'rgb(10, 3, 112)';
	return (
		<div className='req-wrapper' style={{ backgroundColor: bgColor }}>
			<span>Prerequisites for react.js are</span>
			<ul className='req-list'>
				{requirements.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const Profile = ({ details: { image, authorName }, bgColor }) => {
	let bacgColor = 'rgb(7, 175, 218)' === bgColor ? 'white' : 'rgb(10, 3, 112)';
	return (
		<div className='profile-wrapper' style={{ backgroundColor: bacgColor }}>
			<img src={image} alt='profile' className='profile-image' />
			<span>{authorName}</span>
		</div>
	);
};

const Footer = ({ year, bgColor }) => {
	return (
		<div className='footer' style={{ backgroundColor: bgColor }}>
			&copy; {year}
		</div>
	);
};

const ButtonGroup = ({ changeTheme, bgColor }) => {
	let bacgColor = 'rgb(7, 175, 218)' === bgColor ? 'white' : 'rgb(10, 3, 112)';
	return (
		<div className='btn-wrapper' style={{ backgroundColor: bacgColor }}>
			<button
				onClick={() => {
					alert('Good day');
				}}
			>
				Greet People
			</button>{' '}
			<button
				onClick={() => {
					alert(new Date().toTimeString());
				}}
			>
				Show Time
			</button>{' '}
			<button onClick={changeTheme}>Change Theme</button>
		</div>
	);
};

class App extends Component {
	state = {
		bgColor: 'rgb(7, 175, 218)',
		fontColor: 'black',
	};
	changeTheme = () => {
		let newColor = [];
		if (this.state.bgColor === 'rgb(7, 175, 218)') {
			newColor = ['rgb(10, 3, 112)', 'white'];
		} else {
			newColor = ['rgb(7, 175, 218)', 'black'];
		}
		this.setState({ bgColor: newColor[0], fontColor: newColor[1] });
		console.log(newColor);
	};
	render() {
		const data = {
			headerTitle: 'Welcome to 30 days of React',
			headerSubtile: 'Getting Started with React',
			authorName: 'Cyril Yamoah',
			date: new Date().toDateString(),
			requirements: ['HTML', 'CSS', 'JavaScript'],
			image: cyrilImage,
			theme: {
				backgroundColor: this.state.bgColor,
				fontColor: this.state.fontColor,
			},
		};

		return (
			<div
				className='App'
				style={{
					backgroundColor: this.state.bgColor,
					color: this.state.fontColor,
				}}
			>
				<Header header={data} />
				<Pre requirements={data} />
				<Profile details={data} bgColor={this.state.bgColor} />
				<ButtonGroup
					changeTheme={this.changeTheme}
					bgColor={this.state.bgColor}
				/>

				<Footer year='2020' bgColor={this.state.bgColor} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
