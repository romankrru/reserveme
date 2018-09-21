// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const client = new ApolloClient({
	cache: new InMemoryCache(),

	link: ApolloLink.from([
		onError(({graphQLErrors, networkError}) => {
			if (graphQLErrors)
				graphQLErrors.map(({message, locations, path}) =>
					console.log(
						`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
					)
				);

			if (networkError) console.log(`[Network error]: ${networkError}`);
		}),

		new HttpLink({
			credentials: 'same-origin',
			uri: 'http://localhost:8080/graphql',
		}),
	]),
});

const app = (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>
);

const root = document.getElementById('root');

if (root) {
	ReactDOM.render(app, root);
}
