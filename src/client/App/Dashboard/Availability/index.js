import React from 'react';
import {Segment} from 'semantic-ui-react';
import Table from './Table';

const Availability = () => (
	<div>
		<h1>When are you available for bookings?</h1>

		<Segment>
			<Table />
		</Segment>
	</div>
);

export default Availability;
