const express = require('express')
const next = require('next')
const { v4: uuid } = require('uuid')
const { posts } = require('./src/constants')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(express.json())
  server.get('/api/posts', (req, res) => {
    const copy = [...posts]
    copy.reverse()
    res.send(copy.slice(0, 5))
  })

  server.post('/api/posts', (req, res) => {
    const data = {...req.body, id: uuid()}
    posts.push(data)
    res.send(data)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${process.env.HOSTNAME}:${port}`)
  })
})