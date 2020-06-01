import {
	SET_SCHEDULE_SUCCESS
} from 'src/store/actions/actionTypes';

export const setSchedule = (schedule) => dispatch => {
	dispatch({
		type: SET_SCHEDULE_SUCCESS,
		payload: schedule
	});
};
