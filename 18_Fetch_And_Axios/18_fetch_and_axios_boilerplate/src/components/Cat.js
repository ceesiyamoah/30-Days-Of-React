import React from 'react';

export const Cat = ({
	info: { name, origin, temperament, life_span, weight, description, image },
}) => {
	console.log(image);
	return (
		<div className='cat'>
			<img src={image} alt={name} />
			<p>{name}</p>
			<p>
				<b>{origin}</b>
			</p>
			<p>
				<span className='title'>Temperament:</span> {temperament}
			</p>
			<p>
				<span className='title'>Life Span:</span> {life_span} years
			</p>
			<p>
				<span className='title'>Weight:</span> {weight.metric} kg
			</p>
			<p className='title'>Description</p>
			<p>{description}</p>
		</div>
	);
};
