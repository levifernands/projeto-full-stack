import React from "react";

export const Task = () => {
  return (
    <div className="task">
      <div className="task-titulo">Tarefa</div>
      <div className="task-acoes">
        <button className="task-editar">Editar</button>
        <button className="task-excluir">Excluir</button>
      </div>
    </div>
  )
}