import React from 'react';
import './Card.scss';

const Card = (props) => {
	const {item} = props || {};
	const {name, information, number} = item || {};
	return (
		<div className="card">
			<span className="card-title">{name}</span>
			<div className="card-body">
				<span className="card-number">{number}x</span>
				<span className="card-information">{information}</span>
			</div>
		</div>
	)
}

export default Card
