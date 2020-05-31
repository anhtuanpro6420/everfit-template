import axios from 'src/axios';
import queryString from 'query-string';
import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_ERRORS
} from 'src/store/actions/actionTypes';

export const getPosts = (params) => dispatch => {
	const queryParams = queryString.stringify(params);
	dispatch({
		type: GET_POSTS_REQUEST
	});
	axios
		.get(`https://jsonplaceholder.typicode.com/posts?${queryParams}`)
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
