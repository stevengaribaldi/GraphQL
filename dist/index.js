import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const typeDefs = `#graphql
    type Product {
    name: String
    price: Float
    quantity: Int
    tags: [String]
}
type Query {
  getProduct(id: String): Product
}
  `;
const resolvers = {
    Query: {
        async getProduct() {
            return { name: 'Copper', price: 31.2 };
        },
    },
};
const server = new ApolloServer({
    typeDefs, //typeDef -> definig our Graphql types ( product, query, mutation)
    resolvers, // resolver -> to create logic for certain graphql types(queary, mutation)
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log('server running on ' + url);
