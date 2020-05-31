import {
	DROP_EXERCISE_SUCCESS
} from 'src/store/actions/actionTypes';

export const dropExercise = (dropData) => dispatch => {
	dispatch({
		type: DROP_EXERCISE_SUCCESS,
		payload: dropData
	});
};
