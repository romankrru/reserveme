// @flow
import React from 'react';
import {pure} from 'recompose';
import {Button, Icon, Table} from 'semantic-ui-react';

const Footer = () => (
	<Table.Footer fullWidth>
		<Table.Row>
			<Table.HeaderCell />
			<Table.HeaderCell colSpan="4">
				<Button floated="right" icon labelPosition="left" primary size="small">
					<Icon name="user" /> Add User
				</Button>
				<Button size="small">Approve</Button>
				<Button disabled size="small">
					Approve All
				</Button>
			</Table.HeaderCell>
		</Table.Row>
	</Table.Footer>
);

export default pure(Footer);
