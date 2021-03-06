// @flow
import React from 'react';
import {pure} from 'recompose';
import {Table} from 'semantic-ui-react';

const Header = () => (
	<Table.Header>
		<Table.Row>
			<Table.HeaderCell />
			<Table.HeaderCell>Day</Table.HeaderCell>
			<Table.HeaderCell>Hours</Table.HeaderCell>
		</Table.Row>
	</Table.Header>
);

export default pure(Header);
