import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Exercise from 'src/containers/Schedule/ScheduleColumn/Workout/Exercise/Exercise';
import Options from 'src/components/commons/Options/Options';
import IBtnAdd from 'src/assets/images/btn-add.svg';
import { dropExercise } from 'src/store/actions/scheduleAction';
import './Workout.scss';
import Modal from '../../../../components/commons/Modal/Modal';

class Workout extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isModalVisible: false,
			name: '',
			information: '',
			number: 0
		};
	}

	onDragOver = (event) => {
		event.preventDefault();
	}

	removeExercise = (schedule, dragExercise) => {
		let removeSchedule;
		if (schedule && schedule.length) {
			removeSchedule = schedule.map(item => {
				if (item.workouts && item.workouts.length) {
					item.workouts.map(work => {
						if (work.exercises && work.exercises.length) {
							work.exercises = work.exercises.filter(ex => ex.id !== dragExercise.id)
						}
						return work;
					})
				}
				return item;
			})
		}
		return removeSchedule;
	}

	addExercise = ({removeSchedule, dragExercise, columnId, workout}) => {
		const newSchedule = [...removeSchedule];
		if (newSchedule && newSchedule.length) {
			const foundColumnIndex = newSchedule.findIndex(item => item.id === columnId);
			if (foundColumnIndex > -1) {
				let {workouts} = newSchedule[foundColumnIndex] || {};
				if (workouts && workouts.length) {
					const foundWorkoutIndex = workouts.findIndex(work => work.id === workout.id);
					const {exercises} = workouts[foundWorkoutIndex] || {};
					if (exercises && exercises.length) {
						const foundExercise = exercises.find(ex => ex.id === dragExercise.id);
						if (!foundExercise) {
							const newExercises = [...exercises, dragExercise];
							workouts[foundWorkoutIndex].exercises = newExercises;
							newSchedule[foundColumnIndex].workouts = workouts;
						}
					} else {
						const newExercises = [dragExercise];
						workouts[foundWorkoutIndex].exercises = newExercises;
						newSchedule[foundColumnIndex].workouts = workouts;
					}
				}
			}
		}
		return newSchedule;
	}

	onDrop = (e, {columnId, workout}) => {
		e.stopPropagation();
		const {schedule} = this.props;
		const exerciseStr = e.dataTransfer.getData('exercise')
		const dragExercise = JSON.parse(exerciseStr);
		const removeSchedule = this.removeExercise(schedule, dragExercise);
		const newSchedule = this.addExercise({removeSchedule, dragExercise, columnId, workout})
		this.props.onSetSchedule(newSchedule)
	}

	handleDragExercise = (e, dragExercise) => {
		e.dataTransfer.setData('exercise', JSON.stringify(dragExercise))
	}

	handleDragWorkout = (e, workout) => {
		e.stopPropagation();
		this.props.onDragWorkout(e, workout);
	}

	showModal = (workout) => {
		this.setState({ isModalVisible: true, clickedWorkout: workout })
	}

	closeModal = () => {
		this.setState({ isModalVisible: false })
	}

	handleChange = (property, value) => {
		this.setState({ [property]: value })
	}

	handleSubmit = (e, columnId) => {
		e.preventDefault();
		const {schedule} = this.props;
		const {name, information, number, clickedWorkout} = this.state || {};
		const newExercise = {
			id: uuid(),
			name, 
			information, 
			number
		}
		if (schedule && schedule.length) {
			const foundColumnIndex = schedule.findIndex(item => item.id === columnId);
			if (foundColumnIndex > -1) {
				let {workouts} = schedule[foundColumnIndex] || {};
				if (workouts && workouts.length) {
					const foundWorkout = workouts.find(work => work.id === clickedWorkout.id);
					if (foundWorkout && foundWorkout.exercises && foundWorkout.exercises.length) {
						foundWorkout.exercises = [...foundWorkout.exercises, newExercise]
					}
				}
			}
		}
		this.setState({ isModalVisible: false })
	}

	renderFormExercise = (columnId) => {
		const {name, information, number} = this.state || {};
		return (
			<form onSubmit={(e) => this.handleSubmit(e, columnId)}>
				<div className="form-body">
					<input className="form-item" type="text" placeholder="Name" value={name} onChange={(e) => this.handleChange('name', e.target.value)} />
					<input className="form-item" type="text" placeholder="Information" value={information} onChange={(e) => this.handleChange('information', e.target.value)} />
					<input className="form-item" type="text" placeholder="Number" value={number} onChange={(e) => this.handleChange('number', e.target.value)} />
					<input className="form-item" type="submit" value="Submit" />
				</div>
			</form>
		)
	}

	renderWorkouts = () => {
		const {workouts, columnId} = this.props;
		const {isModalVisible} = this.state;
		let workoutsRender = null;
		if (workouts && workouts.length) {
			workoutsRender = workouts.map(workout => {
				const {exercises, name} = workout || {};
				return (
					<div className="workout-container" 
						draggable
						onDragStart={(e) => this.handleDragWorkout(e, workout)} 
						onDrop={(e) => this.onDrop(e, {columnId, workout})}
						onDragOver={(e => this.onDragOver(e))}>
						<div className="workout-header">
							<span className="workout-title">{name}</span> <Options />
						</div>
						<Exercise exercises={exercises} onDragExercise={this.handleDragExercise}/>
						<div className="adding-container">
							<img onClick={() => this.showModal(workout)} className="adding-btn" src={IBtnAdd} alt="add exercise"/>
							{isModalVisible && <Modal title="Add exercise" onClose={this.closeModal}>{this.renderFormExercise(columnId)}</Modal>}
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
