import React from 'react';
import {Message, Form} from 'semantic-ui-react';

const Input = props => (
	<Form.Field error={props.isErrorShown}>
		<label htmlFor={props.id}>
			{props.label}

			<input
				type={props.type}
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.onChange}
			/>
		</label>

		{props.isErrorShown && (
			<Message negative>
				<Message.Header>{props.errorMessage.header}</Message.Header>
				<p>{props.errorMessage.content}</p>
			</Message>
		)}
	</Form.Field>
);

export default Input;
