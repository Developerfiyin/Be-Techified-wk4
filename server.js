require("dotenv").config();

const express = require('express')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use()
app.get('/todos', (req, res) => {
  res.send(200).json({message: "Hello World"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})