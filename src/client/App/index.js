import React from 'react';
import {Route} from 'react-router-dom';
import Auth from './Auth';
import Layout from './generic/Layout';
import Dashboard from './Dashboard';

export default () => (
	<Layout>
		<Route path="/auth" component={Auth} />
		<Route path="/dashboard" component={Dashboard} />
	</Layout>
);
