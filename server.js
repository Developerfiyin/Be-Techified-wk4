require("dotenv").config();

const express = require('express')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cors())

const cors = require('cors');

// In-memory data store for todos Fake database 
//Array of todo objects
const todos = [
    { id: 1, task: 'Finish a week project', completed: false },
    { id: 2, task: 'Read a book', completed: false },
    { id: 3, task: 'Deploy a website today !!', completed: true },
];


// Routes

// Get all todos
app.get('/todos', (req, res) => {

  res.send(200).json({message: "Tdos fetched successfully", todos})
})


// Create a new todo
app.post('/todos', (req, res) => {
    const {task} = req.body;
    const newTodo = {
        id: todos.length + 1, task, completed: false};
    todos.push(newTodo);
  res.send(201).json({message: "Todo created"})
})
// Update a todo
app.put('/todos/:id', (req, res) => {
    const (!todos)
  res.send(200).json({message: "Todo updated"})
})
// Delete a todo
app.delete('/todos/:id', (req, res) =>
     {
  res.send(200).json({message: "Todo deleted"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})