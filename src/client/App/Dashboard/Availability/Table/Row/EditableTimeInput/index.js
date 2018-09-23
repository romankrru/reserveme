// @flow
import React from 'react';
import MaskedInput from 'react-text-mask';
import {branch, compose, defaultProps, renderComponent} from 'recompose';
import type {HOC} from 'recompose';
import styles from './assets/styles.css';

type EditableTimeInputProps = {
	value: string,
	isEditing: boolean,
};

const EditableTimeInput = props => (
	<MaskedInput
		className={styles.timeInput}
		value={props.value}
		mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
	/>
);

const enhance: HOC<*, EditableTimeInputProps> = compose(
	defaultProps({isEditing: false}),
	branch(props => !props.isEditing, renderComponent(props => <span>{props.value}</span>))
);

export default enhance(EditableTimeInput);
