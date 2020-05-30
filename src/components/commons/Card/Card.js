import React from 'react';
import './Card.scss';

const Card = (props) => {
	const {item} = props || {};
	const {body, title} = item || {};
	return (
		<div className="card">
		  <div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text">{body}</p>
		  </div>
		</div>
	)
}

export default Card
