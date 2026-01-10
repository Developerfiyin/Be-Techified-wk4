require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors');


app.use(express.json())
app.use(cors('*'));



// In-memory data store for todos Fake database 
//Array of todo objects
const todos = [
    { id: 1, task: 'Finish a week project', completed: false },
    { id: 2, task: 'Read a book', completed: false },
    { id: 3, task: 'Deploy a website today !!', completed: true },
];


// Routes

// Get all todos
app.get('/todos', (req, res) => {res.send(200).json(todos)
});


// Create a new todo
app.post('/todos', (req, res) => {
    const {task} = req.body;
    const newTodo = {
        id: todos.length + 1, task, completed: false};
    todos.push(newTodo);
  res.send(201).json({message: " new Todo created"})
})

// Get a specific todo
app.get('/todos/:id', (req, res) => {
    const {id} = req.params;
    const todo = todos.find(t => t.id === parseInt(id));
  res.send(200).json({message: "Todo fetched successfully", todo})
})


app.put('/todos/:id', (req, res) => {
    const {task, completed} = req.body;     
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (todo) {
        todo.task = task;
        todo.completed = completed;
    }
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