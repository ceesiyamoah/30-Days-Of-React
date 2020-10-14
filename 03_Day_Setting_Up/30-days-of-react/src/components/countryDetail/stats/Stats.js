import React from 'react';
import { commarize } from './../../../utils/commarize';

export const Stats = ({
	stats: { languages, capital, population, currency },
}) => {
	return (
		<div className='stats-wrapper'>
			<span>
				<b>Capital: &nbsp;</b> {capital}
			</span>
			<span>
				<b>Language: &nbsp;</b> {languages[0]}
			</span>
			<span>
				<b>Population: &nbsp;</b> {commarize(population)}
			</span>
			<span>
				<b>Currency: &nbsp;</b> {currency}
			</span>
		</div>
	);
};
