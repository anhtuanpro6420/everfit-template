import React from 'react';
import { v4 as uuid } from 'uuid';
import Exercise from 'src/containers/Schedule/ScheduleColumn/Workout/Exercise/Exercise';
import Options from 'src/components/commons/Options/Options';
import IBtnAdd from 'src/assets/images/btn-add.svg';
import './Workout.scss';
import Modal from '../../../../components/commons/Modal/Modal';
import ExerciseCreate from 'src/containers/Schedule/ScheduleColumn/Workout/ExerciseCreate/ExerciseCreate';
import { addExercise, removeExercise } from 'src/shared/services/exercise';

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

	onDrop = (e, {columnId, workout}) => {
		e.stopPropagation();
		const {schedule} = this.props;
		const exerciseStr = e.dataTransfer.getData('exercise');
		if (!exerciseStr) {
			return;
		}
		const dragExercise = JSON.parse(exerciseStr);
		const removeSchedule = removeExercise(schedule, dragExercise);
		const newSchedule = addExercise({removeSchedule, dragExercise, columnId, workout})
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
					}  else {
						foundWorkout.exercises = [newExercise]
					}
				}
			}
		}
		this.setState({ 
			isModalVisible: false, 
			name: '',
			information: '',
			number: 0 
		})
	}

	renderFormExercise = (columnId) => {
		const {name, information, number} = this.state || {};
		return <ExerciseCreate name={name} information={information} number={number} 
								onSubmit={(e) => this.handleSubmit(e, columnId)}
								onChange={this.handleChange}/>
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
						key={workout.id}
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

export default Workout;
