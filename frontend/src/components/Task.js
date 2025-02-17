import React, { useState } from "react";
import { Popup } from "./Popup";

export const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pendente":
        return "status-pendente";
      case "em andamento":
        return "status-andamento";
      case "concluída":
        return "status-concluida";
      default:
        return "";
    }
  };

  return (
    <div className="Task">
      <div className="TaskTitulo">
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.status === "concluída" ? "em andamento" : "pendente"}`}
        >
          {task.title}
        </p>
      </div>
      <div className="TaskDescricao">
        <p>{task.description}</p>
      </div>

      <div className={`TaskStatus ${getStatusClass(task.status)}`}>
        <p>{task.status}</p>
      </div>

      <div className="TaskDataCriacao">
        <p>Data de Criação: {formatDate(task.createdAt)}</p>
      </div>
      <div className="TaskAcoes">
        <button className="TaskEditar" onClick={() => setIsEditing(true)}>
          Editar
        </button>
        <button className="TaskExcluir" onClick={() => deleteTask(task.id)}>
          Excluir
        </button>
      </div>

      {isEditing && (
        <Popup
          task={task}
          onSave={editTask}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};
