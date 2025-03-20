import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => setTasks(res.data));
  }, []);

  const addTask = () => {
    if (text.trim()) {
      axios.post(API_URL, { text }).then((res) => {
        setTasks([...tasks, res.data]);
        setText("");
      });
    }
  };

  const deleteTask = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="container py-5 text-center bg-light">
      <h2>Task Manager</h2>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div class="row g-2">
            <div className="col-sm-10">
              <input
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>

          <ul className="list-group mt-5">
            {tasks.map((task) => (
              <li className="list-group-item d-flex justify-content-between" key={task.id}>
                {task.text}{" "}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
