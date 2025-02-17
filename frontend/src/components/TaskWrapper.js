import React, { useState } from "react"
import { TaskForm } from "./TaskForm"
import { v4 as uuidv4 } from 'uuid';
import { Task } from "./Task";
uuidv4();

export const TaskWrapper = () => {
  const [tasks,setTasks]  = useState([])


  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, { id: uuidv4(), task: task, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };
  return (
    <div className="TaskWrapper">
      <TaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <Task 
        task={task}
        key={task.id}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}
