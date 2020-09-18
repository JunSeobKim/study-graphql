import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
require("dotenv").config();

const PORT = process.env.PORT;

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers, // resolvers: resolvers 의 es6 문법
});

server.start({ port: PORT }, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
