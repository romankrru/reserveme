import React from 'react';
import {Segment, Item as ItemUI} from 'semantic-ui-react';
import Item from './Item';

const data = [
	{
		bookedBy: {
			email: 'test@test.com',
			firstName: 'John',
			lastName: 'Doe',
		},

		createdOn: '15.09.18 19:52',
		duration: '1 hour',
		id: '1',
		startTime: '17.09.2018 8:00',
		status: 'canceled',
	},

	{
		bookedBy: {
			email: 'test@test.com',
			firstName: 'John',
			lastName: 'Doe',
		},

		createdOn: '15.09.18 19:52',
		duration: '1 hour',
		id: '2',
		startTime: '17.09.2018 8:00',
	},
];

const Bookings = () => (
	<div>
		<h1>Bookings</h1>

		<Segment>
			<ItemUI.Group divided>
				{data.map(d => (
					<Item key={d.id} data={d} />
				))}
			</ItemUI.Group>
		</Segment>
	</div>
);

export default Bookings;
