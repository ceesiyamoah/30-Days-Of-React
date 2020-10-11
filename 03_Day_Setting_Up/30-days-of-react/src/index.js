import React from 'react';
import ReactDOM from 'react-dom';

const getDays = (start, end) => {
	const days = [];
	for (let i = start; i <= end; i++) {
		days.push(i);
	}
	return days;
};
const checkPrime = (number) => {
	if (number === 1 || number === 0) {
		return false;
	}
	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
};

const data = {
	header: { title: '30 days of react', subtitle: 'Number Generator' },
	numbers: getDays(0, 31),
};

const Header = ({ header: { title, subtitle } }) => {
	return (
		<div className='header-wrapper'>
			<span className='header-title'>{title}</span>
			<span className='header-subtitle'>{subtitle}</span>
		</div>
	);
};
const Calendar = ({ days }) => {
	return (
		<div className='calendar-wrapper'>
			{days.map((day) => (
				<Day day={day} key={day} />
			))}
		</div>
	);
};
const Day = ({ day }) => {
	if (checkPrime(day)) {
		return (
			<div className='calendar-day' style={{ backgroundColor: 'red' }}>
				{day}
			</div>
		);
	} else if (day % 2 === 0) {
		return (
			<div className='calendar-day' style={{ backgroundColor: 'green' }}>
				{day}
			</div>
		);
	}
	return (
		<div className='calendar-day' style={{ backgroundColor: 'blue' }}>
			{day}
		</div>
	);
};

const App = ({ data: { header, numbers } }) => {
	return (
		<div>
			<Header header={header} />
			<Calendar days={numbers} />
		</div>
	);
};

ReactDOM.render(<App data={data} />, document.getElementById('root'));
