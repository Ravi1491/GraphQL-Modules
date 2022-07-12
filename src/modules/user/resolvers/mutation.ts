import { UsersProvider } from '../providers/users';

export default {
  Mutation: {
    createUser: async (_root: any, args: any, { injector }: GraphQLModules.Context) => {
      const val = await injector.get(UsersProvider).create(args) 
      return val
    }
  },
};
