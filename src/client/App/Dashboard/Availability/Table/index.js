import React from 'react';
import {Table} from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import Row from './Row';

const days = [
	{title: 'Monday', value: 'MON'},
	{title: 'Tuesday', value: 'TUE'},
	{title: 'Wednesday', value: 'WED'},
	{title: 'Thursday', value: 'THU'},
	{title: 'Friday', value: 'FRI'},
	{title: 'Saturday', value: 'SAT'},
	{title: 'Sunday', value: 'SUN'},
];

const AvailabilityTable = () => (
	<Table compact celled definition>
		<Header />

		<Table.Body>
			{days.map(day => (
				<Row key={day.value} day={day} />
			))}
		</Table.Body>

		<Footer />
	</Table>
);

export default AvailabilityTable;
