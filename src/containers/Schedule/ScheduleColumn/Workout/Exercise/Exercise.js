import React from 'react';
import Card from 'src/components/commons/Card/Card';
import './Exercise.scss';

class Exercise extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleDragExercise = (e, item) => {
		this.props.onDragExercise(e, item)
	}

	renderExercise = () => {
		const {exercises} = this.props;
		let exercisesRender = null;
		if (exercises && exercises.length) {
			exercisesRender = exercises.map(item => {
				return <Card key={item.id} item={item} onDrag={this.handleDragExercise}/>
			})
		}
		return exercisesRender;
	}

	render() {
		return this.renderExercise();
	}
}

export default Exercise;
