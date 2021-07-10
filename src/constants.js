const { v4: uuid } = require('uuid')

const posts = [
  {
    id: uuid(),
    title: 'Post 1',
    description: 'Post description 1',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
  {
    id: uuid(),
    title: 'Post 2',
    description: 'Post description 2',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
  {
    id: uuid(),
    title: 'Post 3',
    description: 'Post description 3',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
  {
    id: uuid(),
    title: 'Post 4',
    description: 'Post description 4',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
  {
    id: uuid(),
    title: 'Post 5',
    description: 'Post description 5',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
  {
    id: uuid(),
    title: 'Post 6',
    description: 'Post description 6',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
  {
    id: uuid(),
    title: 'Post 7',
    description: 'Post description 7',
    email: 'bernalesjasper@gmail.com',
    published_date: new Date()
  },
]

module.exports = {
  posts
}