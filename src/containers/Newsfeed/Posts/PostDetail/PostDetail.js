import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPosts } from 'src/store/actions/postsAction';
import LoadingIcon from 'src/components/commons/LoadingIcon/LoadingIcon';
import './PostDetail.scss';
import Card from '../../../../components/commons/Card/Card';

class PostDetail extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const {match} = this.props || {};
		const {params} = match || {};
		this.props.onGetPostDetail(params)
	}

	renderDetailPost = () => {
		const {posts} = this.props;
		let postDetail = null;
		if (posts && posts.length) {
			postDetail = (
				<Card item={posts[0]}/>
			)
		}
		return postDetail;
	}

	render() {
		const {isLoading} = this.props;
		return isLoading ? <LoadingIcon /> : this.renderDetailPost();
	}
}

const mapStateToProps = state => ({
	errors: state.errors,
	isLoading: state.posts.isLoading,
	posts: state.posts.data
});

const mapDispatchToProps = dispatch => {
	return {
		onGetPostDetail: (params) => dispatch(getPosts(params))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostDetail));
