import { PubSub } from 'graphql-subscriptions'

export default {
  Subscription: {
    postAdded: {
      subscribe(_root: any, _args: {}, { injector }: GraphQLModules.Context) {
        return injector.get(PubSub).asyncIterator(['POST_ADDED']);
      },
    },
  },
};
