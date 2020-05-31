import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import './Schedule.scss';
import ScheduleColumn from './ScheduleColumn/ScheduleColumn';

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

class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			schedule: initialData
		};
	}

	handleSetSchedule = schedule => {
		this.setState({ schedule })
	}

	renderSchedule = () => {
		const {schedule} = this.state;
		let scheduleRender = null;
		if (schedule && schedule.length) {
			scheduleRender = schedule.map(item => {
				return <ScheduleColumn schedule={schedule} scheduleItem={item} onSetSchedule={this.handleSetSchedule}/>
			})
		}
		return scheduleRender;
	}

	render() {
		return <div className="schedule-container">{this.renderSchedule()}</div>
	}
}

const mapStateToProps = state => ({
	// schedule: state.schedule.data
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
