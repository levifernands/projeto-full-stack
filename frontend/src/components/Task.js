import React from "react";

export const Task = ({task, toggleComplete, deleteTask}) => {
  return (
    <div className="Task">
      <div className="TaskTitulo"><p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "concluída" : ""}`} >{task.task}</p></div>
      <div className="TaskAcoes">
        <button className="TaskEditar">Editar</button>
        <button className="TaskExcluir" onClick={() => deleteTask(task.id)}>Excluir</button>
      </div>
    </div>
  )
}