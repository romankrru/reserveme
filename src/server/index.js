const express = require('express');
const os = require('os');
const uuidv4 = require('uuid/v4');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');

const app = express();
app.use(cors());

const schema = gql`
	type Query {
		users: [User!]
		me: User
		user(id: ID!): User
		messages: [Message!]!
		message(id: ID!): Message!
	}

	type User {
		id: ID!
		messages: [Message!]
		username: String!
	}

	type Message {
		id: ID!
		text: String!
		user: User!
	}

	type Mutation {
		createMessage(text: String!): Message!
		deleteMessage(id: ID!): Boolean!
	}
`;

const users = {
	1: {
		id: '1',
		messageIds: [1],
		username: 'Robin Wieruch',
	},
	2: {
		id: '2',
		messageIds: [2],
		username: 'Dave Davids',
	},
};

let messages = {
	1: {
		id: '1',
		text: 'Hello World',
		userId: '1',
	},
	2: {
		id: '2',
		text: 'By World',
		userId: '2',
	},
};

const resolvers = {
	Message: {
		user: message => users[message.userId],
	},

	Mutation: {
		createMessage: (parent, {text}, {me}) => {
			const id = uuidv4();

			const message = {
				id,
				text,
				userId: me.id,
			};

			messages[id] = message;
			users[me.id].messageIds.push(id);

			return message;
		},

		deleteMessage: (parent, {id}) => {
			const {[id]: message, ...otherMessages} = messages;

			if (!message) {
				return false;
			}

			messages = otherMessages;

			return true;
		},
	},

	Query: {
		me: (parent, args, {me}) => me,
		message: (parent, {id}) => messages[id],
		messages: () => Object.values(messages),
		user: (parent, args) => users[args.id],
		users: () => Object.values(users),
	},

	User: {
		messages: user => Object.values(messages).filter(message => message.userId === user.id),
	},
};

const server = new ApolloServer({
	context: {
		me: users[1],
	},

	resolvers,
	typeDefs: schema,
});

server.applyMiddleware({app, path: '/graphql'});

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({username: os.userInfo().username}));
app.listen(8080, () => console.log('Listening on port 8080!'));
