// @flow
import React from 'react';
import {Message, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const SignupMessage = () => (
	<Message attached="bottom" warning>
		<Icon name="help" />
		Already signed up?&nbsp;
		<Link to="/auth">Switch to Login.</Link>
	</Message>
);

export default SignupMessage;
