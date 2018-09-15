import React from 'react';
import {Route} from 'react-router-dom';
import Auth from './Auth';
import Layout from './generic/Layout';

export default () => (
	<Layout>
		<Route path="/auth" component={Auth} />
	</Layout>
);
