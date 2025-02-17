import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const TaskWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:3000/tasks", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTasks(response.data);
        } catch (error) {
          console.error("Erro ao carregar as tarefas:", error);
        }
      }
    };

    checkAuth();
    fetchTasks();
  }, [navigate]);

  const addTask = async (task) => {
    const token = localStorage.getItem("token");

    if (!task.title || task.title.trim() === "") {
      setErrorMessage("O título da tarefa é obrigatório.");
      return; // Impede o envio caso o título esteja vazio
    }

    const taskData = {
      title: task.title,
      description: task.description || "",
      status: task.status || "pendente",
      createdAt: task.createdAt || new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/tasks",
        taskData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTasks([...tasks, response.data]);
    } catch (error) {
      setErrorMessage("Erro ao adicionar tarefa.");
      console.error(
        "Erro ao adicionar tarefa:",
        error.response?.data || error.message
      );
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pendente" ? "completa" : "pendente",
            }
          : task
      )
    );
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(tasks.filter((task) => task.id !== id)); // Remover a tarefa da lista
    } catch (error) {
      setErrorMessage("Erro ao excluir tarefa.");
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const editTask = async (id, newTask) => {
    const token = localStorage.getItem("token");
    const taskData = {
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/tasks/${id}`,
        taskData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      setErrorMessage("Erro ao editar tarefa.");
      console.error("Erro ao editar tarefa:", error);
    }
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
