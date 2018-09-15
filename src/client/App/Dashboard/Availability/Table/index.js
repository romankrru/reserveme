import React from 'react';
import {Table, Ref} from 'semantic-ui-react';
import {compose, withStateHandlers, withState} from 'recompose';
import {withOnClickOutside} from '../../../generic/hoc';
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

const AvailabilityTable = props => (
	<Ref innerRef={props.setDomRef}>
		<Table compact celled definition>
			<Header />

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

			<Footer />
		</Table>
	</Ref>
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
	),

	withState('domRef', 'setDomRef', null),

	withOnClickOutside(props => ({
		domRef: props.domRef,
		handler: props.stopEditing,
	}))
)(AvailabilityTable);
