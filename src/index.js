import express from 'express'

import graphqlHTTP from 'express-graphql'

import Schema from '../src/schema/index'


const { PORT = 3000 } = process.env

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`)
})
