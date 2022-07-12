import { PubSub } from 'graphql-subscriptions';

export default {    
  Subscription: {
    userAdded: {
      // subscribe(_root: any, _args: {}, { injector }: GraphQLModules.Context) {
      //   const val = injector.get(PubSub).asyncIterator(['USER_ADDED']);
      //   console.log("DONE ------ ",val)
        
      // },

      subscribe (parent, args, { pubsub }) {
        console.log("------------------");
        return pubsub.asyncIterator('USER_ADDED');
      }
      // resolve: (payload) => {
      //   console.log("------------------",payload);
      //   return payload;
      // },
    },
  },
};