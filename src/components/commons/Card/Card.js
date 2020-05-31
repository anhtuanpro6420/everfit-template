import React from 'react';
import './Card.scss';

const Card = (props) => {
	const {item, onDrag} = props || {};
	const {name, information, number} = item || {};
	return (
		<div className="card" onDragStart={(e) => onDrag(e, item)} draggable="true">
			<span className="card-title">{name}</span>
			<div className="card-body">
				<span className="card-number">{number}x</span>
				<span className="card-information">{information}</span>
			</div>
		</div>
	)
}

export default Card
