import React from 'react';

export const CatDetails = ({ data }) => {
	const avgWeight =
		data
			.map((item) => {
				let arr = item.weight.metric.split('-');

				return [+arr[0], +arr[1]].reduce((total, sum) => total + sum, 0) / 2;
			})
			.reduce((total, sum) => total + sum, 0) / data.length;

	const avgLifeSpan =
		data
			.map((item) => {
				let arr = item.life_span.split('-');

				return [+arr[0], +arr[1]].reduce((total, sum) => total + sum, 0) / 2;
			})
			.reduce((total, sum) => total + sum, 0) / data.length;

	return (
		<div className='catDetails'>
			<h2>Cat Paradise</h2>
			<p className='catNumber'>There are {data.length} cats breeds</p>
			<p>
				On average a cat can weigh about{' '}
				<span className='circleBorder'>{avgWeight.toFixed(2)}</span> kg and live{' '}
				<span className='circleBorder'>{avgLifeSpan.toFixed(2)}</span> years
			</p>
		</div>
	);
};
