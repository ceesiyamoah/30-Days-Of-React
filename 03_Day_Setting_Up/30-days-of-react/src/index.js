import React from 'react';
import ReactDOM from 'react-dom';
import profileThumbnail from './images/img.jpg';

const skills = [
	'HTML',
	'CSS',
	'JS',
	'React',
	'Azure',
	'Python',
	'Data Analysis',
	'MySQL',
	'Numpy',
	'Pandas',
	'Git',
	'C++',
	'C',
	'OS',
	'HTML1',
	'CSS1',
	'JS1',
	'React1',
	'Azure1',
	'Python1',
	'Data Analysis1',
	'MySQL1',
	'Numpy1',
	'Pandas1',
	'Git1',
	'C++1',
	'C1',
	'OS1',
];

const dateToday = new Date();

const Thumbnail = ({ imgSrc }) => (
	<img src={imgSrc} alt=' User Thumbnail' className='user-thumbnail' />
);
const Name = ({ name }) => (
	<div className='name-wrapper'>
		<span className='name'>{name}</span>
		<img
			src='https://img.icons8.com/color/48/000000/checked--v1.png'
			className='verified'
			alt='verified tick'
		/>
	</div>
);
const Job = ({ title, location }) => (
	<span className='job'>{title + ', ' + location}</span>
);
const GetSkills = ({ skills }) =>
	skills.map((skill) => (
		<span key={skill} className='skill'>
			{skill}
		</span>
	));
const Skills = ({ skills }) => (
	<div className='skills-wrapper'>
		<span className='name'>Skills</span>
		<div className='skill-wrapper'>
			<GetSkills skills={skills} />
		</div>
	</div>
);
const Joined = ({ date }) => (
	<div className='end'>
		<img
			src='https://img.icons8.com/pastel-glyph/64/000000/clock.png'
			alt='Clock'
		/>
		<span>Joined on {date}</span>
	</div>
);

const App = () => (
	<div className='card'>
		<Thumbnail imgSrc={profileThumbnail} />
		<Name name='CYRIL YAMOAH' />
		<Job title='Junior Developer' location='Ghana' />
		<Skills skills={skills} />
		<Joined date={dateToday.toLocaleDateString()} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
