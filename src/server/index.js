const express = require('express');
const os = require('os');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');

const app = express();
app.use(cors());

const schema = gql`
	type Query {
		me: User
	}

	type User {
		username: String!
	}
`;

const resolvers = {
	Query: {
		me: () => ({
			username: 'Roman',
		}),
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
