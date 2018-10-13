// @flow
import React from 'react';
import {Checkbox, Table} from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './asstes/styles.css';
import EditableTimeInput from './EditableTimeInput';

const Row = (props: {
	isEditing: boolean,

	day: {
		title: string,
	},

	startEditing: Function,
}) => (
	<Table.Row
		className={classNames(styles.row, {
			[styles.rowEditing]: props.isEditing,
		})}
	>
		<Table.Cell collapsing>
			<Checkbox slider />
		</Table.Cell>

		<Table.Cell collapsing>{props.day.title}</Table.Cell>

		<Table.Cell className={styles.hoursCell} onClick={props.startEditing}>
			<EditableTimeInput isEditing={props.isEditing} value="11:23" />
			{' - '}
			<EditableTimeInput isEditing={props.isEditing} value="14:55" />
			<span className={styles.edit}>edit</span>
		</Table.Cell>
	</Table.Row>
);

export default Row;
