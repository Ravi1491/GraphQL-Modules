import { createModule, gql } from 'graphql-modules';
import { UsersProvider } from './providers/users';
import resolvers from './resolvers';

export const UserModule = createModule({
  id: 'user',
  dirname: __dirname,
  providers: [UsersProvider],
  resolvers,
  typeDefs: gql`
    type Subscription {
      userAdded: UserPayload
    }

    type UserPayload {
      mutation: String!
      data: User!
    }

    type User {
      id: Int!
      username: String
    }
    
    type Query {
      users: [User]
      user(id: Int!): User
    }

    type Mutation {
      createUser(id: Int!, username: String!): User
    }

  `,
});
