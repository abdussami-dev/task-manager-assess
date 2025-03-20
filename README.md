Task Manager Application

1. Setup Instructions

#1.1 Clone the Repository

git clone https://github.com/abdussami-dev/task-manager-assess.git

cd task-manager

2. Backend Setup (Node.js + Express)

#2.1 Install Dependencies

cd backend
npm install

#2.2 Start the Server

node server.js

#2.3 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | `/tasks` | Get all tasks |
| POST   | `/tasks` | Add a new task |
| DELETE | `/tasks/:id` | Delete a task |

3. Frontend Setup (React.js)

#3.1 Install Dependencies

cd frontend
npm install

#3.2 Start the Frontend

npm start

4. JSON Data Storage
Tasks are stored in a **tasks.json** file in the backend.  

Example JSON structure:  json
[
  {
    "id": 1742500614047,
    "text": "Call"
  }
]
