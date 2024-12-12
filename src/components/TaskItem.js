// src/components/TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    editTask(updatedTask);
    setIsEditing(false);
  };

  const handleCompletionChange = () => {
    toggleCompletion(task.id);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-blue-500">
      {isEditing ? (
        <form onSubmit={handleSubmitEdit}>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleEditChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleEditChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleEditChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <select
            name="priority"
            value={updatedTask.priority}
            onChange={handleEditChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select
            name="status"
            value={updatedTask.status}
            onChange={handleEditChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600">
            Save Changes
          </button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.status === 'Completed'}
            onChange={handleCompletionChange}
            className="mr-4"
          />
          <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          <p className="text-sm text-gray-500">Priority: {task.priority}</p>
          <p className="text-sm text-gray-500">Status: {task.status}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 text-blue-500 hover:text-blue-700 font-semibold"
          >
            Edit Task
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="mt-2 text-red-500 hover:text-red-700 font-semibold ml-4"
          >
            Delete Task
          </button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
