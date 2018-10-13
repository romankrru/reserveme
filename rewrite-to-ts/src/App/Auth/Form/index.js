import React from 'react';
import _ from 'lodash';
import {Button, Form, Segment} from 'semantic-ui-react';
import {withFormik} from 'formik';
import Yup from 'yup';
import Input from '../../generic/Input';

const FormExampleForm = props => (
	<Segment>
		<Form onSubmit={props.handleSubmit}>
			<Input
				label="Email"
				id="email"
				name="email"
				placeholder="Email"
				isErrorShown={props.errors.email && props.touched.email}
				value={props.values.email}
				onChange={props.handleChange}
				errorMessage={{
					content: _.capitalize(props.errors.email),
					header: 'Invalid email',
				}}
			/>

			<Input
				label="Password"
				id="password"
				name="password"
				placeholder="Password"
				type="password"
				isErrorShown={props.errors.password && props.touched.password}
				value={props.values.password}
				onChange={props.handleChange}
				errorMessage={{
					content: _.capitalize(props.errors.password),
					header: 'Invalid password',
				}}
			/>

			<Button fluid type="submit">
				Submit
			</Button>
		</Form>
	</Segment>
);

export default withFormik({
	handleSubmit: values => console.log(values),

	mapPropsToValues: () => ({
		email: '',
		password: '',
	}),

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email()
			.required(),

		password: Yup.string()
			.min(8)
			.required(),
	}),
})(FormExampleForm);
