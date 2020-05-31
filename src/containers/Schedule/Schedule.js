import React from 'react';
import { connect } from 'react-redux';
import './Schedule.scss';
import ScheduleColumn from './ScheduleColumn/ScheduleColumn';

class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderSchedule = () => {
		const {schedule} = this.props;
		console.log(schedule)
		let scheduleRender = null;
		if (schedule && schedule.length) {
			scheduleRender = schedule.map(item => {
				return <ScheduleColumn item={item}/>
			})
		}
		return scheduleRender;
	}

	render() {
		return <div className="schedule-container">{this.renderSchedule()}</div>
	}
}

const mapStateToProps = state => ({
	schedule: state.schedule.data
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
