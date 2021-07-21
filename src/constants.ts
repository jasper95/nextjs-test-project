import { v4 as uuid } from 'uuid';
import { Post } from './models/post';

export const posts: Post[] = [
  {
    id: uuid(),
    title: 'Post 1',
    description: 'Post description 1',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
  {
    id: uuid(),
    title: 'Post 2',
    description: 'Post description 2',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
  {
    id: uuid(),
    title: 'Post 3',
    description: 'Post description 3',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
  {
    id: uuid(),
    title: 'Post 4',
    description: 'Post description 4',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
  {
    id: uuid(),
    title: 'Post 5',
    description: 'Post description 5',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
  {
    id: uuid(),
    title: 'Post 6',
    description: 'Post description 6',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
  {
    id: uuid(),
    title: 'Post 7',
    description: 'Post description 7',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date(),
  },
];
