import { Injectable } from 'graphql-modules';
import user from '../resolvers/user';
import { PubSub } from 'graphql-subscriptions';

export interface Person {
  id: number;
  username: string;
}

@Injectable()
export class UsersProvider {
  users: Person[] = [
    {
      id: 1,
      username: 'Ravi'
    },
    {
      id: 2,
      username: 'varad'
    }
  ];

  constructor(private pubsub: PubSub) {}

  getUser(id: number) {
    return this.users.find(({ id }) => id === id);
  }

  allUsers() {
    return this.users;
  }

  async create(newUser: Person) {
    this.users.push(newUser);
    this.pubsub.publish('USER_ADDED', { userAdded: {
      mutation: 'UPDATED',
      data: newUser,
    }, 
    })
    
    const val = await this.users.find(({ id }) => id === newUser.id);
    return val
  }
}
