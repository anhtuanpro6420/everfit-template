import {
	DROP_EXERCISE_SUCCESS,
	SET_SCHEDULE_SUCCESS
} from 'src/store/actions/actionTypes';

export const dropExercise = (dropData) => dispatch => {
	dispatch({
		type: DROP_EXERCISE_SUCCESS,
		payload: dropData
	});
};

export const setSchedule = (schedule) => dispatch => {
	dispatch({
		type: SET_SCHEDULE_SUCCESS,
		payload: schedule
	});
};
