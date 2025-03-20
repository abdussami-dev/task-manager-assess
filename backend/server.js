const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const FILE_PATH = "./tasks.json";

app.use(cors());
app.use(bodyParser.json());

// Read data
const readTasks = () => {
  try {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
  } catch (error) {
    return [];
  }
};

// Create Data
const writeTasks = (tasks) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
};

// API to Fetch Data
app.get("/tasks", (req, res) => {
  res.json(readTasks());
});

// Add new task
app.post("/tasks", (req, res) => {
  const tasks = readTasks();
  const newTask = { id: Date.now(), text: req.body.text };
  tasks.push(newTask);
  writeTasks(tasks);
  res.json(newTask);
});

// Delete
app.delete("/tasks/:id", (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter((task) => task.id !== parseInt(req.params.id));
  writeTasks(tasks);
    res.json({ message: "Task Deleted Successfully."});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));