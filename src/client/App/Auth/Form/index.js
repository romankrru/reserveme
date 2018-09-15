import React from 'react';
import {Button, Form} from 'semantic-ui-react';

const FormExampleForm = () => (
	<Form>
		<Form.Field>
			<label htmlFor="email">
				Email
				<input id="email" placeholder="Email" />
			</label>
		</Form.Field>

		<Form.Field>
			<label htmlFor="password">
				Password
				<input id="password" type="password" placeholder="Password" />
			</label>
		</Form.Field>

		<Button fluid type="submit">
			Submit
		</Button>
	</Form>
);

export default FormExampleForm;
