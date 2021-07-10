import axios from 'axios'

const client = axios.create({
  baseURL: '/api',
  headers: {
  }
})

export default client;