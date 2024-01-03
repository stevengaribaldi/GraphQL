import express from 'express'
import { graphqlHTTP as expressGraphQL } from 'express-graphql'

const app = express()
app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
  })
)
app.listen(4000, () => {
  console.log('Listening')
})
