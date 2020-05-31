import React from 'react';
import './Form.scss';

const Form = (props) => {
	const {onSubmit, children} = props || {};
	return (
		<form onSubmit={(e) => onSubmit(e)}>
			<div className="form-body">
				{children}
			</div>
		</form>
	)
}

export default Form
