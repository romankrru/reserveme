const express = require('express');
const os = require('os');
const path = require('path');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');

const app = express();
app.use(cors());

const schema = gql`
	type Query {
		users: [User!]
		me: User
		user(id: ID!): User
	}

	type User {
		id: ID!
		username: String!
	}
`;

const users = {
	1: {
		id: '1',
		username: 'Robin Wieruch',
	},
	2: {
		id: '2',
		username: 'Dave Davids',
	},
};

const me = users[1];

const resolvers = {
	Query: {
		me: () => me,
		user: (parent, args) => users[args.id],
		users: () => Object.values(users),
	},
};

const server = new ApolloServer({
	resolvers,
	typeDefs: schema,
});

server.applyMiddleware({app, path: '/graphql'});

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({username: os.userInfo().username}));
app.listen(8080, () => console.log('Listening on port 8080!'));
