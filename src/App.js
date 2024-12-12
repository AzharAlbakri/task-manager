// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './index.css';

const App = () => {
  const loadTasksFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const toggleCompletion = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, status: task.status === 'Completed' ? 'To Do' : 'Completed' } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editTask={editTask} 
        toggleCompletion={toggleCompletion} // Ensure this is passed down here
      />
    </div>
  );
};

export default App;
