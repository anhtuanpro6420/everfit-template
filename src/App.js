import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'src/App.scss';
import Newsfeed from 'src/containers/Newsfeed/Newsfeed';
import Todos from 'src/containers/Todos/Todos';
import PostDetail from 'src/containers/Newsfeed/Posts/PostDetail/PostDetail';

const App = props => {
	const routes = (
		<Switch>
			<Route path="/posts/:id" component={PostDetail} />
			<Route path="/todos" component={Todos} />
			<Route path="/" exact component={Newsfeed} />
			<Redirect exact to="/" />
		</Switch>
		);

	return (
			<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
	);
};

const mapStateToProps = state => {
	return {
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
