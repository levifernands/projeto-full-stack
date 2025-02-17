import React, { useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";

export const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), task: task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newTask) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, task: newTask } : task
    ));
  };

  return (
    <div className="TaskWrapper">
       <h1>Minha Lista de Tarefas</h1>
      <TaskForm addTask={addTask} />
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask} 
          editTask={editTask}
        />
      ))}
    </div>
  );
};
