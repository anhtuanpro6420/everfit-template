import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from 'src/store/actions/actionTypes';

const initialState = {
	error: null,
	data: null,
	isLoading: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case GET_POSTS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				data: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
