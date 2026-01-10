require("dotenv").config();

const express = require('express')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cors())

// Routes

// Get all todos
app.get('/todos', (req, res) => {
  res.send(200).json({message: "Hello World"})
})

// Create a new todo
app.post('/todos', (req, res) => {
  res.send(201).json({message: "Todo created"})
})
// Update a todo
app.put('/todos/:id', (req, res) => {
  res.send(200).json({message: "Todo updated"})
})
// Delete a todo
app.delete('/todos/:id', (req, res) => {
  res.send(200).json({message: "Todo deleted"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})