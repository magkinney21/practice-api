import { GraphQLSchema } from 'graphql'

import Query from './types/Query'

// Construct a schema, using GraphQL schema language
export default new GraphQLSchema({
  query: Query,
})
