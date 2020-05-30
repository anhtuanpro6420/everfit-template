import axios from 'src/axios';
import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_ERRORS
} from 'src/store/actions/actionTypes';

export const getPosts = () => dispatch => {
	dispatch({
		type: GET_POSTS_REQUEST
	});
	axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then(res => {
			dispatch({
				type: GET_POSTS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response
			});
		});
};
