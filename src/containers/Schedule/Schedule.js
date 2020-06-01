import React from 'react';
import { connect } from 'react-redux';
import './Schedule.scss';
import ScheduleColumn from './ScheduleColumn/ScheduleColumn';
import { setSchedule } from 'src/store/actions/scheduleAction'

class Schedule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleSetSchedule = schedule => {
		this.props.onSetSchedule(schedule)
	}

	renderSchedule = () => {
		const {schedule} = this.props;
		let scheduleRender = null;
		if (schedule && schedule.length) {
			scheduleRender = schedule.map(item => {
				return <ScheduleColumn key={item.id} schedule={schedule} scheduleItem={item} onSetSchedule={this.handleSetSchedule}/>
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
		onSetSchedule: schedule => dispatch(setSchedule(schedule))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
