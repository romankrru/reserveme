// @flow
import * as React from 'react';
import {findDOMNode} from 'react-dom';

class OnClickOutside extends React.Component<{
	children: React.Element<any>,
	onClickOutside: Function,
}> {
	componentDidMount() {
		/* eslint-disable-next-line react/no-find-dom-node */
		const node = findDOMNode(this);

		this.handler = (e: Event) => {
			if (node && e.target instanceof Node && node.contains(e.target)) return;
			this.props.onClickOutside(e);
		};

		document.addEventListener('click', this.handler);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handler);
	}

	handler = () => {};

	render() {
		return React.Children.only(this.props.children);
	}
}

export default OnClickOutside;
