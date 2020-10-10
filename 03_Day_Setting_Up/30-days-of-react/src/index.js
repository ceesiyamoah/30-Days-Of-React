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

const app = (
	<div className='card'>
		<img
			src={profileThumbnail}
			alt=' User Thumbnail'
			className='user-thumbnail'
		/>
		{/* TODO improve how the text and the icon work */}
		<div className='name-wrapper'>
			<span className='name'>CYRIL YAMOAH</span>
			<img
				src='https://img.icons8.com/color/48/000000/checked--v1.png'
				className='verified'
				alt='verified tick'
			/>
		</div>
		<span className='job'>Junior Developer, Ghana</span>
		<div className='skills-wrapper'>
			<span className='name'>Skills</span>
			<div className='skill-wrapper'>
				{skills.map((skill) => (
					<span key={skill} className='skill'>
						{skill}
					</span>
				))}
			</div>
		</div>
		<div className='end'>
			{/* TODO improve how the text and the icon work */}
			<img
				src='https://img.icons8.com/pastel-glyph/64/000000/clock.png'
				alt='Clock'
			/>
			<span>Joined on September 3, 2020</span>
		</div>
	</div>
);

ReactDOM.render(app, document.getElementById('root'));
