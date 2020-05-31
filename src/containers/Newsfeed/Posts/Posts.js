import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Posts.scss';
import Card from 'src/components/commons/Card/Card';


class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleRedirect = (id) => {
		this.props.history.push(`/posts/${id}`)
	}

	renderPosts = (posts) => {
		let postsRender = null;
		if (posts && posts.length) {
			postsRender = (
				<ul>
					{posts.map((item, index) => <li key={item.id} onClick={() => this.handleRedirect(item.id)}><Card onClick={() => this.handleRedirect(item.id)} item={item}/></li>)}
				</ul>
			)
		}
		return postsRender;
	}

	render() {
		const {posts} = this.props;
		return this.renderPosts(posts)
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Newsfeed));
