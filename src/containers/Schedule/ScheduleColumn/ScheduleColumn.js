import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ScheduleColumn.scss';
import Workout from 'src/containers/Schedule/ScheduleColumn/Workout/Workout';


class ScheduleColumn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderScheduleColumn = () => {
		const {item} = this.props || {};
		const {date, day, id, workouts} = item || {};
		return (
				<div className="schedule-column-wrapper">
					<div className="column-day">{day}</div>
					<div className="column-body">
						<span className="column-date">{date}</span>
						<Workout workouts={workouts} />
					</div>
				</div>
		)		
	}

	render() {
		return this.renderScheduleColumn();
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScheduleColumn));
