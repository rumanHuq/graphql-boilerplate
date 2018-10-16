import { GraphQLServer } from "graphql-yoga";

const typeDefs: string = `
  type Query {
    name: String!
    bio: String!
  }
`;
const resolvers = {
  Query: {
    name: () => "Ruman",
    bio: () => "HEllo"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
const port = process.env.PORT || 1111;

server.start({ port }, () => {
  console.log("FINALLY WORKING");
  console.log(`started on port ✅ ${port}`);
});
