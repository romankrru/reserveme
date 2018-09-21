import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

class OnClickOutside extends Component {
	handler = null;

	componentDidMount() {
		/* eslint-disable-next-line react/no-find-dom-node */
		const node = findDOMNode(this);

		this.handler = e => {
			if (node.contains(e.target)) return;
			this.props.onClickOutside(e);
		};

		document.addEventListener('click', this.handler);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handler);
	}

	render() {
		return React.Children.only(this.props.children);
	}
}

export default OnClickOutside;
