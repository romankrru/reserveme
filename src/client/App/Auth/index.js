import React from 'react';
import {Link} from 'react-router-dom';
import {withPropsOnChange, compose} from 'recompose';
import {Message, Icon} from 'semantic-ui-react';
import Form from './Form';
import styles from './assets/styles.css';

const LoginMessage = () => (
	<Message attached="bottom" warning>
		<Icon name="help" />
		Dont&apos;t have an account?&nbsp;
		<Link to="/auth/register">Sign up here.</Link>
	</Message>
);

const SignupMessage = () => (
	<Message attached="bottom" warning>
		<Icon name="help" />
		Already signed up?&nbsp;
		<Link to="/auth">Switch to Login.</Link>
	</Message>
);

const Auth = props => (
	<div className={styles.auth}>
		<h2>{props.isLogin ? 'Login' : 'Register'}</h2>
		<Form />
		{props.isLogin ? <LoginMessage /> : <SignupMessage />}
	</div>
);

export default compose(
	withPropsOnChange(['location'], props => ({
		isLogin: props.location.pathname === '/auth',
	}))
)(Auth);
