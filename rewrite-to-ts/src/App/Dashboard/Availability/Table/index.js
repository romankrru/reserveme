import React from 'react';
import {Table} from 'semantic-ui-react';
import {compose, withStateHandlers} from 'recompose';
import Header from './Header';
import Footer from './Footer';
import Row from './Row';
import OnClickOutside from '../../../generic/OnClickOutside';

const days = [
	{title: 'Monday', value: 'MON'},
	{title: 'Tuesday', value: 'TUE'},
	{title: 'Wednesday', value: 'WED'},
	{title: 'Thursday', value: 'THU'},
	{title: 'Friday', value: 'FRI'},
	{title: 'Saturday', value: 'SAT'},
	{title: 'Sunday', value: 'SUN'},
];

const AvailabilityTable = props => (
	<Table compact celled definition>
		<Header />

		<OnClickOutside onClickOutside={props.stopEditing}>
			<Table.Body>
				{days.map(day => (
					<Row
						isEditing={props.isEditing}
						startEditing={props.startEditing}
						key={day.value}
						day={day}
					/>
				))}
			</Table.Body>
		</OnClickOutside>

		<Footer />
	</Table>
);

export default compose(
	withStateHandlers(
		{
			isEditing: false,
		},

		{
			startEditing: () => () => ({isEditing: true}),
			stopEditing: () => () => ({isEditing: false}),
		}
	)
)(AvailabilityTable);
