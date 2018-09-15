import React from 'react';
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import styles from './assets/styles.css';

const Layout = props => (
	<div className={styles.layout}>
		<Menu>
			<Menu.Item as={NavLink} to="/" exact>
				Main
			</Menu.Item>

			<Menu.Item as={NavLink} to="/auth">
				Auth
			</Menu.Item>

			<Menu.Item as={NavLink} to="/dashboard/availability">
				Dashboard
			</Menu.Item>
		</Menu>
		{props.children}
	</div>
);

export default Layout;
