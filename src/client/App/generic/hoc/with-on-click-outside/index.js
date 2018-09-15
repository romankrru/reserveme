import {compose, lifecycle} from 'recompose';

let handler = null;

const withOnClickOutside = params =>
	compose(
		lifecycle({
			componentDidUpdate() {
				if (handler) return;

				const resolvedParams = params(this.props);

				if (!resolvedParams.domRef) return;

				handler = e => {
					if (resolvedParams.domRef.contains(e.target)) return;
					resolvedParams.handler(e);
				};

				document.addEventListener('click', handler);
			},

			componentWillUnmount() {
				document.removeEventListener('click', handler);
			},
		})
	);

export default withOnClickOutside;
