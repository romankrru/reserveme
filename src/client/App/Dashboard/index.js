// @flow
import React from 'react';
import {Grid} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import Sidebar from './Sidebar';
import Availability from './Availability';
import Bookings from './Bookings';

const Dashboard = () => (
	<Grid>
		<Grid.Column width={4}>
			<Sidebar />
		</Grid.Column>

		<Grid.Column stretched width={12}>
			<Route path="/dashboard/availability" component={Availability} />
			<Route path="/dashboard/bookings" component={Bookings} />
		</Grid.Column>
	</Grid>
);

export default Dashboard;
