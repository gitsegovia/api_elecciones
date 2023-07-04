import 'dotenv/config'
import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema } from '@graphql-tools/schema'

import schemaFiles from './schema';

import models from './models';

const PORT = process.env.PORT || 5000;
const ALTER = false;
const FORCE = false;

const schema = makeExecutableSchema({
  typeDefs: schemaFiles.typeDefs,
  resolvers: schemaFiles.resolvers,
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({
    models
  }),
});

models.sequelize.sync({ alter: ALTER, force: FORCE }).then(() => {
  server
    .listen({ port: PORT })
    .then(({ url }) => console.log(`🚀 Running on ${url} (${process.env.NODE_ENV})`));
});