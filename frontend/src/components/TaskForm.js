import React, { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pendente");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    addTask({
      title: task,
      description,
      status,
      createdAt: new Date().toISOString(),
    });

    setTask("");
    setDescription("");
    setStatus("pendente");
  };
  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite sua tarefa aqui"
        className="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <textarea
        placeholder="Digite a descrição da tarefa"
        className="task-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluída">Concluída</option>
      </select>
      <button type="submit" className="task-botao">
        Adicionar
      </button>
    </form>
  );
};
