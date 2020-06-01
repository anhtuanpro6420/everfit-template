export const addWorkout = (schedule, dragWorkout, dropColumnId) => {
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

export const removeWorkout = (schedule, dragWorkout) => {
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