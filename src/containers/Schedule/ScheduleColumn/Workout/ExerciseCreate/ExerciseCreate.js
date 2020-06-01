import React from 'react';
import './ExerciseCreate.scss';
import Form from 'src/components/commons/Form/Form';
import Input from 'src/components/commons/Input/Input';

const ExerciseCreate = (props) => {
	const {onSubmit, name, information, number, onChange} = props;
	return (
		<Form onSubmit={onSubmit}>
			<Input className="form-item" type="text" placeholder="Name" value={name} onChange={(e) => onChange('name', e.target.value)} />
			<Input className="form-item" type="text" placeholder="Information" value={information} onChange={(e) => onChange('information', e.target.value)} />
			<Input className="form-item" type="text" placeholder="Number" value={number} onChange={(e) => onChange('number', e.target.value)} />
			<Input className="form-item" type="submit" value="Submit" />
		</Form>
	)
}

export default ExerciseCreate
