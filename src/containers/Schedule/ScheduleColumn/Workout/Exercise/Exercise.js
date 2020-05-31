import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from 'src/components/commons/Card/Card';
import './Exercise.scss';

class Exercise extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderExercise = () => {
		const {exercises} = this.props;
		let exercisesRender = null;
		if (exercises && exercises.length) {
			exercisesRender = exercises.map(item => {
				return <Card item={item}/>
			})
		}
		return exercisesRender;
	}

	render() {
		return this.renderExercise();
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Exercise));
