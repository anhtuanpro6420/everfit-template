import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/containers/Schedule/ScheduleColumn/Workout/Exercise/Exercise';
import Options from 'src/components/commons/Options/Options';
import IBtnAdd from 'src/assets/images/btn-add.svg';
import { dropExercise } from 'src/store/actions/scheduleAction';
import './Workout.scss';

class Workout extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			dragExercise: null
		};
	}

	onDragOver = (event) => {
		event.preventDefault();
	}

	onDrop = ({dropColumnId, workout}) => {
		const {dragExercise} = this.state;
		const {id} = workout;
		const dropData = {
			dropColumnId,
			dropWorkoutId: id,
			dragExercise
		}
		// this.props.onDropExercise(dropData)
	}

	handleDragExercise = (dragExercise) => {
		this.setState({
			dragExercise
		})
	}

	handleDragWorkout = (e, workout) => {
		this.props.onDragWorkout(e, workout);
	}

	renderWorkouts = () => {
		const {workouts, columnId} = this.props;
		let workoutsRender = null;
		if (workouts && workouts.length) {
			workoutsRender = workouts.map(workout => {
				const {exercises, name} = workout || {};
				return (
					<div className="workout-container" 
						draggable
						onDragStart={(e) => this.handleDragWorkout(e, workout)} 
						onDrop={() => this.onDrop({columnId, workout})}
						onDragOver={(e => this.onDragOver(e))}>
						<div className="workout-header">
							<span className="workout-title">{name}</span> <Options />
						</div>
						<Exercise exercises={exercises} onDragExercise={this.handleDragExercise}/>
						<div className="adding-container">
							<img className="adding-btn" src={IBtnAdd} alt="add exercise"/>
						</div>
					</div>
				)
			})
		}
		return workoutsRender;
	}

	render() {
		return this.renderWorkouts()
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
	return {
		onDropExercise: (dropData) => dispatch(dropExercise(dropData))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Workout));
