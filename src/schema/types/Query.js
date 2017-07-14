import { GraphQLObjectType, GraphQLBoolean } from 'graphql'


export default new GraphQLObjectType({
  name: 'Query',
  description: 'This is the Query type',
  fields: {
    Health: {
      type: GraphQLBoolean,
      resolve() {
        return true
      },
    },
  },
})
