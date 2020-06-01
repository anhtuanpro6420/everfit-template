import React from 'react';
import './ScheduleColumn.scss';
import Workout from 'src/containers/Schedule/ScheduleColumn/Workout/Workout';
import { getCurrentDate } from 'src/shared/utils/dateHelper';
import { addWorkout, removeWorkout } from 'src/shared/services/workout';

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
		const removeSchedule = removeWorkout(schedule, dragWorkout)
		const newSchedule = addWorkout(removeSchedule, dragWorkout, dropColumnId)
		this.props.onSetSchedule(newSchedule)
	}

	handleOnDragWorkout = (e, workout) => {
		e.dataTransfer.setData('workout', JSON.stringify(workout))
	}

	renderScheduleColumn = () => {
		const {scheduleItem, schedule, key} = this.props || {};
		const {date, day, id: columnId, workouts} = scheduleItem || {};
		const currentDate = getCurrentDate((new Date()).getDate());
		const isCurrentDate = date === currentDate;
		const dateClasses = isCurrentDate ? "column-date current-date" : "column-date";
		return (
				<div key={key} 
					className="schedule-column-wrapper"
					onDrop={(e) => this.onDrop(e, columnId)}
					onDragOver={(e => this.onDragOver(e))}
				>
					<div className="column-day">{day}</div>
					<div className="column-body">
						<span className={dateClasses}>{date}</span>
						<Workout schedule={schedule} workouts={workouts} columnId={columnId} onDragWorkout={this.handleOnDragWorkout} onSetSchedule={this.props.onSetSchedule}/>
					</div>
				</div>
		)		
	}

	render() {
		return this.renderScheduleColumn();
	}
}

export default ScheduleColumn;
