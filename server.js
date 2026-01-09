require("dotenv").config();

const express = require('express')

const app = express()

const port = process.env.PORT

app.use(express.json())

app.get('/todos', (req, res) => {
  res.send('Hello Worlsd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})