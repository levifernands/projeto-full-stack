import React, { useState } from "react";
import { Popup } from "./Popup";

export const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="Task">
      <div className="TaskTitulo">
        <p 
          onClick={() => toggleComplete(task.id)} 
          className={`${task.completed ? "concluída" : ""}`}
        >
          {task.task}
        </p>
      </div>
      <div className="TaskAcoes">
      <button className="TaskEditar" onClick={() => setIsEditing(true)}>Editar</button>
      <button className="TaskExcluir" onClick={() => deleteTask(task.id)}>Excluir</button>
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
