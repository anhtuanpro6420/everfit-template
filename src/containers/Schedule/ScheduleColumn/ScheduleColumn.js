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
		const newSchedule = [...schedule];
		if (newSchedule && newSchedule.length) {
			const foundColumnIndex = newSchedule.findIndex(item => item.id === dropColumnId);
			if (foundColumnIndex > -1) {
				let {workouts} = newSchedule[foundColumnIndex] || {};
				if (workouts && workouts.length) {
					const foundWorkout = workouts.find(work => work.id === dragWorkout.id);
					if (!foundWorkout) {
						workouts = [...workouts, dragWorkout]
						newSchedule[foundColumnIndex].workouts = workouts;
					}
				} else {
					workouts = [dragWorkout]
					newSchedule[foundColumnIndex].workouts = workouts;
				}
			}
		}
		return newSchedule;
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
		const {scheduleItem, schedule, key} = this.props || {};
		const {date, day, id: columnId, workouts} = scheduleItem || {};
		return (
				<div key={key} 
					className="schedule-column-wrapper"
					onDrop={(e) => this.onDrop(e, columnId)}
					onDragOver={(e => this.onDragOver(e))}
				>
					<div className="column-day">{day}</div>
					<div className="column-body">
						<span className="column-date">{date}</span>
						<Workout schedule={schedule} workouts={workouts} columnId={columnId} onDragWorkout={this.handleOnDragWorkout} onSetSchedule={this.props.onSetSchedule}/>
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
