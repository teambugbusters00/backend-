import React, { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';

const TaskList = ({ tasks, onTaskUpdated }) => {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleToggle = async (task) => {
    try {
      await updateTask(task.id, { ...task, completed: !task.completed });
      onTaskUpdated();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      onTaskUpdated();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task)}
            />
            <div className="task-content">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;