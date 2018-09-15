import React from 'react';
import {Checkbox, Table} from 'semantic-ui-react';
import styles from './asstes/styles.css';

const Row = props => (
	<Table.Row className={styles.row}>
		<Table.Cell collapsing>
			<Checkbox slider />
		</Table.Cell>
		<Table.Cell collapsing>{props.day.title}</Table.Cell>
		<Table.Cell className={styles.hoursCell}>
			September 14, 2013
			<span className={styles.edit}>edit</span>
		</Table.Cell>
	</Table.Row>
);

export default Row;
