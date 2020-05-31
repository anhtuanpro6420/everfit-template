import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Exercise from 'src/containers/Schedule/ScheduleColumn/Workout/Exercise/Exercise';
import Options from 'src/components/commons/Options/Options';
import IBtnAdd from 'src/assets/images/btn-add.svg';
import './Workout.scss';

class Workout extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderWorkouts = () => {
		const {workouts} = this.props;
		let workoutsRender = null;
		if (workouts && workouts.length) {
			workoutsRender = workouts.map(item => {
				const {exercises, name} = item || {};
				return (
					<div className="workout-container">
						<div className="workout-header">
							<span className="workout-title">{name}</span> <Options />
						</div>
						<Exercise exercises={exercises}/>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Workout));
