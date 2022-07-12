import { UsersProvider } from '../providers/users';

export default {
  Query: {
    users: (_root: any, _args: {}, { injector }: GraphQLModules.Context) =>
      injector.get(UsersProvider).allUsers(),
    user: (_root: any, { id }: any, { injector }: GraphQLModules.Context) =>
      injector.get(UsersProvider).getUser(id),
  },
};
