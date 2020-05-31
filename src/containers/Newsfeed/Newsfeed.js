import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from 'src/store/actions/postsAction';
import Posts from 'src/components/Posts/Posts';
import LoadingIcon from 'src/components/commons/LoadingIcon/LoadingIcon';
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
		const {isLoading, posts} = this.props;
		return (
			<>
				<Link to="/todos">Todos</Link>
				<h1>Newfeeds</h1>
				{isLoading ? <LoadingIcon /> : <Posts data={posts}/>}
			</>	
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors,
	isLoading: state.newsfeed.isLoading,
	posts: state.newsfeed.data
});

const mapDispatchToProps = dispatch => {
	return {
		getPosts: () => dispatch(getPosts())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
