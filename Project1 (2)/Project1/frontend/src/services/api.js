import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const getTasks = () => axios.get(`${API_BASE_URL}/tasks`);
export const createTask = (task) => axios.post(`${API_BASE_URL}/tasks`, task);
export const updateTask = (id, task) => axios.put(`${API_BASE_URL}/tasks/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/tasks/${id}`);
export const addComment = (taskId, comment) => axios.post(`${API_BASE_URL}/tasks/${taskId}/comments`, comment);
export const deleteComment = (commentId) => axios.delete(`${API_BASE_URL}/comments/${commentId}`);