import 'reflect-metadata';
import { createApplication } from 'graphql-modules';
import { BlogModule } from './modules/blog';
import { UserModule } from './modules/user';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { PubSub } from 'graphql-subscriptions';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

const application = createApplication({
  providers: [{
    provide: PubSub,
    useValue: new PubSub()
  }],
  modules: [ UserModule]
});

const execute = application.createExecution();
const subscribe = application.createSubscription();
const schema = application.schema

const server = express();

server.use(
  '/',
  graphqlHTTP({
    schema,
    customExecuteFn: execute,
    graphiql: true
  })
)

const webServer = createServer(server)

webServer.listen(4000, () => {
  console.log('🚀 Server ready at http://localhost:4000')

  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema  
    },
    {
      server: webServer,
      path: '/'
    }
  )
})

// const WS_PORT = 5000;

// const websocketServer = createServer((_request, response) => {
//   response.writeHead(404);
//   response.end();
// })

// websocketServer.listen(WS_PORT, () => {
//   console.log(`Live http://localhost:${WS_PORT}/graphql`);
// });
// const wsServer = new WebSocketServer({
//   port: 4000,
//   path: '/graphql',
// });

// const execute = application.createExecution();
// const subscribe = application.createSubscription();
// const schema = application.schema


// useServer(
//   {
//     schema,
//     execute,
//     subscribe,
//   },
//   wsServer
// );
