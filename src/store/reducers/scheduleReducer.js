import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from 'src/store/actions/actionTypes';
import { v4 as uuid } from 'uuid';


const initialData = [
	{
		id: uuid(),
		day: 'MON',
		date: '05',
		workouts: []
	},
	{
		id: uuid(),
		day: 'TUE',
		date: '06',
		workouts: [
			{
				id: uuid(),
				name: 'Chest day - with arm',
				exercises: [
					{
						id: uuid(),
						name: 'Bench Press Med',
						information: '50 lb x 5, 60 lb x 5, 70',
						number: 3
					},
					{
						id: uuid(),
						name: 'Exercise B',
						information: '40 lb x 10',
						number: 1
					}
				]
			}
		]
	},
	{
		id: uuid(),
		day: 'WED',
		date: '07',
		workouts: [
			{
				id: uuid(),
				name: 'Leg Day',
				exercises: [
					{
						id: uuid(),
						name: 'Exercise C',
						information: '40 lb x 10',
						number: 1
					},
					{
						id: uuid(),
						name: 'Exercise D',
						information: '40 lb x 10',
						number: 1
					},
					{
						id: uuid(),
						name: 'Exercise E',
						information: '40 lb x 10',
						number: 1
					}
				]
			},
			{
				id: uuid(),
				name: 'Arm Day',
				exercises: [
					{
						id: uuid(),
						name: 'Exercise F',
						information: '40 lb x 10',
						number: 1
					}
				]
			}
		]
	},
	{
		id: uuid(),
		day: 'THU',
		date: '08',
		workouts: []
	},
	{
		id: uuid(),
		day: 'FRI',
		date: '09',
		workouts: []
	},
	{
		id: uuid(),
		day: 'SAT',
		date: '10',
		workouts: []
	},
	{
		id: uuid(),
		day: 'SUN',
		date: '11',
		workouts: []
	},
];

const initialState = {
	error: null,
	data: initialData,
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
