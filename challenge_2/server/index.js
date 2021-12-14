const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/')))

app.get('/silly', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})