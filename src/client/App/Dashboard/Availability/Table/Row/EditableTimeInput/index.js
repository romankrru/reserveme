import React from 'react';
import MaskedInput from 'react-text-mask';
import {branch, renderComponent} from 'recompose';
import styles from './assets/styles.css';

const EditableTimeInput = props => (
	<MaskedInput
		className={styles.timeInput}
		value={props.value}
		mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
	/>
);

export default branch(
	props => !props.isEditing,
	renderComponent(props => <span>{props.value}</span>)
)(EditableTimeInput);
