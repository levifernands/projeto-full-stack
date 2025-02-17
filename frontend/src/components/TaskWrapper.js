import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { id: uuidv4(), task: task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: newTask } : task))
    );
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
