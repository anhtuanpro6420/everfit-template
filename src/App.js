import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'src/App.scss';
import Schedule from 'src/containers/Schedule/Schedule';

const App = props => {
	const routes = (
		<Switch>
			<Route path="/schedule" component={Schedule} />
			<Route path="/" exact component={Schedule} />
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
