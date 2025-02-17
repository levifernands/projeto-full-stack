import React, { useState } from "react"


export const TaskForm = ({addTask}) => {
  const [task, setTask] = useState("")
  const handleSubmit = e => {
    e.preventDefault();

    addTask(task);

    setTask("");
  }
  return (
    <form className="TaskForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite sua tarefa aqui" className="task-input" value={task} onChange={(e) => setTask(e.target.value) }/>
      <button type="submit" className="task-botao">
        Adicionar
      </button>
    </form>
  )
}