// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    status: 'To Do', // Default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({ title: '', description: '', dueDate: '', priority: 'Medium', status: 'To Do' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-md mx-auto">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
