export const addExercise = ({removeSchedule, dragExercise, columnId, workout}) => {
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

export const removeExercise = (schedule, dragExercise) => {
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