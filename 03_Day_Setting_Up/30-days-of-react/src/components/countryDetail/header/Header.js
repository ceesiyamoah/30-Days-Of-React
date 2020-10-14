import React from 'react';

export const Header = ({
	header: { headerTitle, headerSubtile, authorName, date, instruction },
	season: { bgColor, fontColor },
}) => {
	return (
		<div className='header-wrapper' style={{ backgroundColor: bgColor }}>
			<span className='header-title'>{headerTitle}</span>
			<span className='header-subtitle'>{headerSubtile}</span>
			<span>{authorName}</span>
			<span>{date}</span>
			<span>{instruction}</span>
		</div>
	);
};
