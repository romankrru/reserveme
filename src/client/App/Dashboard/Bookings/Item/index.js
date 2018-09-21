import React from 'react';
import {Item, Button, Dropdown, Label} from 'semantic-ui-react';
import cn from 'classnames';
import styles from './assets/styles.css';

const BookingItem = props => (
	<Item
		className={cn(styles.item, {
			[styles.canceled]: props.data.status === 'canceled',
		})}
	>
		<Item.Content>
			{props.data.status === 'canceled' && (
				<Label as="a" color="red" ribbon>
					Canceled
				</Label>
			)}

			<Item.Header>Booked by {props.data.bookedBy.firstName}</Item.Header>

			<Item.Meta>
				<p>
					<b>{props.data.startTime}</b>
				</p>

				<p>
					<b>Duration {props.data.duration}</b>
				</p>
			</Item.Meta>

			<Item.Description>Booking made on 15.09.18 19:52</Item.Description>

			<Button.Group color="teal" className={styles.actions}>
				<Button>Details</Button>

				<Dropdown button>
					<Dropdown.Menu>
						<Dropdown.Item>Rebook</Dropdown.Item>
						<Dropdown.Item>Reschedule</Dropdown.Item>
						<Dropdown.Item>Cancel</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Button.Group>
		</Item.Content>
	</Item>
);

export default BookingItem;
