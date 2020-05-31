import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Newsfeed.scss';
import Card from 'src/components/commons/Card/Card';


class Newsfeed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderPosts = (posts) => {
		let postsRender = null;
		if (posts && posts.length) {
			postsRender = (
				<ul>
					{posts.map((item, index) => <li key={item.id}><Card item={item}/></li>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
