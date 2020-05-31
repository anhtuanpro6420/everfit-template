import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ScheduleColumn.scss';
import Workout from 'src/containers/Schedule/ScheduleColumn/Workout/Workout';

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

	removeWorkout = (schedule, dragWorkout) => {
		let removeSchedule;
		if (schedule && schedule.length) {
			removeSchedule = schedule.map(item => {
				if (item.workouts && item.workouts.length) {
					item.workouts = item.workouts.filter(work => work.id !== dragWorkout.id);
				}
				return item;
			})
		}
		return removeSchedule;
	}

	addWorkout = (schedule, dragWorkout, dropColumnId) => {
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
				} else {
					workouts = [dragWorkout]
					schedule[foundColumnIndex].workouts = workouts;
				}
			}
		}
		return schedule;
	}

	onDrop = (e, dropColumnId) => {
		const {schedule} = this.props;
		const workoutStr = e.dataTransfer.getData('workout')
		const dragWorkout = JSON.parse(workoutStr);
		const removeSchedule = this.removeWorkout(schedule, dragWorkout)
		const newSchedule = this.addWorkout(removeSchedule, dragWorkout, dropColumnId)
		this.props.onSetSchedule(newSchedule)
	}

	handleOnDragWorkout = (e, workout) => {
		e.dataTransfer.setData('workout', JSON.stringify(workout))
	}

	renderScheduleColumn = () => {
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
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScheduleColumn));
