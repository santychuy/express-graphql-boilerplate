import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

export const initGraphql = (app: Application): Application => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app });
  return app;
};
