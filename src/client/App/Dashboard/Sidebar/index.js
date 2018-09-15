import React from 'react';
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const Sidebar = () => (
	<Menu fluid vertical tabular>
		<Menu.Item as={NavLink} name="View My Bookings" to="/dashboard/bookings" />
		<Menu.Item as={NavLink} name="Times and availability" to="/dashboard/availability" />
		<Menu.Item as={NavLink} name="pics" to="/dashboard/settings" />
	</Menu>
);

export default Sidebar;
