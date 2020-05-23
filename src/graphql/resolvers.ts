import { ping } from '../controllers/index.controller';

export const resolvers = {
  Query: {
    ping,
  },
};
