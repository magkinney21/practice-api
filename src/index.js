import express from 'express'

const { PORT = 3000 } = process.env

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`)
})
