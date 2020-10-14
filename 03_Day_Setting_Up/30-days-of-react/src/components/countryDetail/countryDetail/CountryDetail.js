import React from 'react';
import { Stats } from '../stats/Stats';

export const CountryDetail = ({
	country: {
		country: { flag, name, ...stats },
	},
}) => {
	return (
		<div className='country-details-wrapper'>
			<div className='country-wrapper'>
				<img src={flag} alt='country' />
				<span className='country-name'>{name}</span>
				<Stats stats={stats} />
			</div>
		</div>
	);
};
