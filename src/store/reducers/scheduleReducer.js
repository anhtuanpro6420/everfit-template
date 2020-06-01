import { SET_SCHEDULE_SUCCESS } from 'src/store/actions/actionTypes';
import { v4 as uuid } from 'uuid';
import { getDatesOfWeek } from 'src/shared/utils/dateHelper';

const initialData = [
	{
		id: uuid(),
		day: 'MON',
		workouts: []
	},
	{
		id: uuid(),
		day: 'TUE',
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
		workouts: []
	},
	{
		id: uuid(),
		day: 'FRI',
		workouts: []
	},
	{
		id: uuid(),
		day: 'SAT',
		workouts: []
	},
	{
		id: uuid(),
		day: 'SUN',
		workouts: []
	},
];

const initDates = () => {
	const dates = getDatesOfWeek();
	const initialDataWithDates = initialData.map((item, index) => ({
		...item,
		date: dates[index].slice(-2)
	}))
	return initialDataWithDates;
}

const initialState = {
	error: null,
	data: initDates()
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SCHEDULE_SUCCESS: {
			const newData = [...action.payload]
			return {
				...state,
				data: newData
			};
		}
		default:
			return state;
	}
};

export default reducer;
