import { Injectable } from 'graphql-modules';
import { Users } from '../../user/providers/users';
import { PubSub } from 'graphql-subscriptions';

// const posts = [
//   {
//     _id: 0,
//     authorId: 0,
//     title: 'Title 1',
//   },
//   {
//     _id: 1,
//     authorId: 1,
//     title: 'Title 2',
//   },
//   {
//     _id: 2,
//     authorId: 0,
//     title: 'Title 3',
//   },
// ];

export interface Post {
  author: string;
  comment: string;
}

@Injectable()
export class Blog {
  // constructor(private users: Users) {}
  constructor(private pubSub: PubSub) {}
  posts: Post[] = [];

  // getPostsOf(userId: number) {
  //   return posts.filter(({ authorId }) => userId === authorId);
  // }

  addPost(post: Post) {
    this.posts.push(post);
    this.pubSub.publish('POST_ADDED', { postAdded: post });
  }

  // allPosts() {
  //   return posts;
  // }

  // getAuthor(postId: number) {
  //   const post = posts.find(({ _id }) => _id === postId);

  //   if (post) {
  //     return this.users.getUser(post.authorId);
  //   }
  // }
}
