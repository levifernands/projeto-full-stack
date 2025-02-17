import React, { useState } from "react";
import { TaskInput } from "./TaskInput";

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
        <button className="TaskEditar" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancelar" : "Editar"}
        </button>
        <button className="TaskExcluir" onClick={() => deleteTask(task.id)}>
          Excluir
        </button>
      </div>

      {isEditing && (
        <TaskInput 
          initialValue={task.task} 
          onSubmit={(newTask) => {
            editTask(task.id, newTask);
            setIsEditing(false);
          }}
          placeholder="Edite sua tarefa..."
        />
      )}
    </div>
  );
};
