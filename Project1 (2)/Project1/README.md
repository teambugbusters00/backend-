# Task Manager - Simple CRUD App

A minimal task management application with Flask backend and React frontend.

## Features
- Add, edit, delete tasks
- Mark tasks as completed
- Filter tasks (All, Pending, Completed)
- Clean, responsive design

## Project Structure
```
├── backend/
│   ├── app.py           # Flask API
│   ├── models.py        # Database model
│   ├── requirements.txt # Dependencies
│   └── tests/
│       └── test_api.py  # Tests
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── App.css
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## Setup

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Server runs on http://localhost:5000

### Frontend
```bash
cd frontend
npm install
npm start
```
App runs on http://localhost:3000

### Tests
```bash
cd backend
python -m pytest tests/ -v
```

## API Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks/<id>` - Update task
- `DELETE /api/tasks/<id>` - Delete task

## Tech Stack
- Backend: Flask, SQLAlchemy, SQLite
- Frontend: React, Axios
- Testing: pytest