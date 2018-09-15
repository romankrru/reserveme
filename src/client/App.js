import React, {Component} from 'react';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider, Query} from 'react-apollo';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import gql from 'graphql-tag';
import './app.css';

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

const q = gql`
	{
		me {
			username
		}
	}
`;
export default class App extends Component {
	state = {username: null};

	componentDidMount() {
		fetch('/api/getUsername')
			.then(res => res.json())
			.then(user => this.setState({username: user.username}));
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<Query query={q}>
					{data => {
						if (data.loading) {
							return <p>loading...</p>;
						}

						return (
							<div>
								<p>
									Hello,
									{data.data.me.username}
								</p>
								{this.state.username}
							</div>
						);
					}}
				</Query>
			</ApolloProvider>
		);
	}
}
