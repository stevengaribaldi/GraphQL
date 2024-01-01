import { Express } from 'express'
import { graphqlHTTP as expressGraphQL } from 'express-graphql'

const app = express()

app.listen(4000, () => {
  console.log('Listening')
})
