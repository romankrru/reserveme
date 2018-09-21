// @flow
import React from 'react';
import {Message, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const LoginMessage = () => (
	<Message attached="bottom" warning>
		<Icon name="help" />
		Dont&apos;t have an account?&nbsp;
		<Link to="/auth/register">Sign up here.</Link>
	</Message>
);

export default LoginMessage;
