// @flow
import React from 'react';
import {withPropsOnChange, compose} from 'recompose';
import Form from './Form';
import styles from './assets/styles.css';
import LoginMessage from './LoginMessage';
import SignupMessage from './SignupMessage';

const Auth = (props: {isLogin: boolean}) => (
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
