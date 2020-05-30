import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'src/store/actions/newsfeedAction';
import './Newsfeed.scss';

class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getPosts();
	}

	render() {
		return (
			<p>Hahahha Home page already</p>
		);
	}
}

const mapStateToProps = state => ({
	success: state.newsfeed.success,
	errors: state.errors,
	isLoading: state.newsfeed.isLoading,
	data: state.newsfeed.data
});

const mapDispatchToProps = dispatch => {
	return {
		getPosts: () => dispatch(getPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
