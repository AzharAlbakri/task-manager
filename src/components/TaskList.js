// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, toggleCompletion }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          editTask={editTask} 
          toggleCompletion={toggleCompletion} 
        />
      ))}
    </div>
  );
};

export default TaskList;
