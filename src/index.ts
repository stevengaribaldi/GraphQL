import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { v4 as uuidv4 } from "uuid";
import couchbase, {
  Bucket,
  Collection,
  GetResult,
  MutationResult,
} from "couchbase";
const typeDefs = `#graphql
    type Product {
    name: String
    author: String
    price: Float
    quantity: Int
    tags: [String]
}

input ProductInput{
    name: String
    author: String
    price: Float
    quantity: Int
    tags: [String]
    }

type Query {
  getProduct(id: String): Product
}

type Mutation {
  createProduct(product: ProductInput): Product
  deleteProduct(id: String): Boolean
  updateProduct(id: String, product: ProductInput): Product
}
  `;
//mutation->
//X createProduct
//X deleteProduct
//_updateProduct

const resolvers = {
  Query: {
    async getProduct(_, args, contextValue) {
      const { id } = args;

      const bucket: Bucket =
        contextValue.couchbaseCluster.bucket("store-bucket");

      const collection: Collection = bucket
        .scope("product-scopr")
        .collection("products");

      const getResult: GetResult = await collection.get(id).catch((error) => {
        console.log(error);
        throw error;
      });
      return getResult.content;
    },
  },
  Mutation: {
    async createProduct(_, args, contextValue) {
      const { product } = args;

      const bucket: Bucket =
        contextValue.couchbaseCluster.bucket("store-bucket");

      const collection: Collection = bucket
        .scope("product-scopr")
        .collection("products");
      const key = uuidv4();
      const createMutationResult: MutationResult = await collection
        .insert(key, product)
        .catch((error) => {
          console.log(error);
          throw error;
        });
      return product;
    },
    async deleteProduct(_, args, contextValue) {
      const { id } = args;

      const bucket: Bucket =
        contextValue.couchbaseCluster.bucket("store-bucket");

      const collection: Collection = bucket
        .scope("product-scopr")
        .collection("products");

      const deletedMutationResult: MutationResult = await collection
        .remove(id)
        .catch((error) => {
          console.log(error);
          throw error;
        });

      return true;
    },
    async updateProduct(_, args, contextValue) {
      const { id, product } = args;

      const bucket: Bucket =
        contextValue.couchbaseCluster.bucket("store-bucket");

      const collection: Collection = bucket
        .scope("product-scopr")
        .collection("products");

      const updatedMutationResult: MutationResult = await collection
        .replace(id, product)
        .catch((error) => {
          console.log(error);
          throw error;
        });
      return product;
    },
  },
};
const server = new ApolloServer({
  typeDefs, //typeDef -> definig our Graphql types ( product, query, mutation)
  resolvers, // resolver -> to create logic for certain graphql types(queary, mutation)
});

const clusterConnStr = "couchbases://cb.rw5qp7l9jchtbwvd.cloud.couchbase.com"; // Replace this with Connection String
const username = "ion"; // Replace this with username from database access credentials
const password = "p5@ieExMrAvC7QF12123"; // Replace this with password from database access credentials

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => ({
    couchbaseCluster: await couchbase.connect(clusterConnStr, {
      username: username,
      password: password,
      // Use the pre-configured profile below to avoid latency issues with your connection.
      configProfile: "wanDevelopment",
    }),
  }),
});

console.log("server running on " + url);
