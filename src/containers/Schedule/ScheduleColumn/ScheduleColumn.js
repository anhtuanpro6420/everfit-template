import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ScheduleColumn.scss';
import Workout from 'src/containers/Schedule/ScheduleColumn/Workout/Workout';
import {setSchedule} from 'src/store/actions/scheduleAction';


class ScheduleColumn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workout: null
		};
	}

	onDragOver = (event) => {
		event.preventDefault();
	}

	onDrop = (e, dropColumnId) => {
		const {schedule} = this.props;
		const workoutStr = e.dataTransfer.getData('workout')
		const dragWorkout = JSON.parse(workoutStr);
		if (schedule && schedule.length) {
			const foundColumnIndex = schedule.findIndex(item => item.id === dropColumnId);
			if (foundColumnIndex > -1) {
				let {workouts} = schedule[foundColumnIndex] || {};
				if (workouts && workouts.length) {
					const foundWorkout = workouts.find(work => work.id === dragWorkout.id);
					if (!foundWorkout) {
						workouts = [...workouts, dragWorkout]
						schedule[foundColumnIndex].workouts = workouts;
					}
				}
			}
		}
		this.props.onSetSchedule(schedule)
	}

	handleOnDragWorkout = (e, workout) => {
		e.dataTransfer.setData('workout', JSON.stringify(workout))
	}

	renderScheduleColumn = () => {
		console.log(123)
		const {scheduleItem} = this.props || {};
		const {date, day, id: columnId, workouts} = scheduleItem || {};
		return (
				<div className="schedule-column-wrapper"
					onDrop={(e) => this.onDrop(e, columnId)}
					onDragOver={(e => this.onDragOver(e))}
				>
					<div className="column-day">{day}</div>
					<div className="column-body">
						<span className="column-date">{date}</span>
						<Workout workouts={workouts} columnId={columnId} onDragWorkout={this.handleOnDragWorkout}/>
					</div>
				</div>
		)		
	}

	render() {
		return this.renderScheduleColumn();
	}
}

const mapStateToProps = state => ({
	// schedule: state.schedule.data
});

const mapDispatchToProps = dispatch => {
	return {
		// onSetSchedule: schedule => dispatch(setSchedule(schedule))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScheduleColumn));
