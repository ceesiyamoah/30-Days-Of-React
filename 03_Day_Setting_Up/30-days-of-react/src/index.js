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
];
const Thumbnail = () => (
	<img
		src={profileThumbnail}
		alt=' User Thumbnail'
		className='user-thumbnail'
	/>
);
const Name = () => (
	<div className='name-wrapper'>
		<span className='name'>CYRIL YAMOAH</span>
		<img
			src='https://img.icons8.com/color/48/000000/checked--v1.png'
			className='verified'
			alt='verified tick'
		/>
	</div>
);
const Job = () => <span className='job'>Junior Developer, Ghana</span>;
const GetSkills = () =>
	skills.map((skill) => (
		<span key={skill} className='skill'>
			{skill}
		</span>
	));
const Skills = () => (
	<div className='skills-wrapper'>
		<span className='name'>Skills</span>
		<div className='skill-wrapper'>
			<GetSkills />
		</div>
	</div>
);
const Joined = () => (
	<div className='end'>
		<img
			src='https://img.icons8.com/pastel-glyph/64/000000/clock.png'
			alt='Clock'
		/>
		<span>Joined on September 3, 2020</span>
	</div>
);

const App = () => (
	<div className='card'>
		<Thumbnail />
		<Name />
		<Job />
		<Skills />
		<Joined />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
