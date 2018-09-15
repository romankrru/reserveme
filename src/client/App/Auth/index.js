import React from 'react';
import {Link} from 'react-router-dom';
import {withPropsOnChange, compose} from 'recompose';
import Form from './Form';
import styles from './assets/styles.css';

const Auth = props => (
	<div className={styles.auth}>
		<h2>{props.isLogin ? 'Login' : 'Register'}</h2>
		<Form />

		<h5>
			{props.isLogin ? (
				<Link to="/auth/register">Switch to Register</Link>
			) : (
				<Link to="/auth">Switch to Login</Link>
			)}
		</h5>
	</div>
);

export default compose(
	withPropsOnChange(['location'], props => ({
		isLogin: props.location.pathname === '/auth',
	}))
)(Auth);
