import React, { useState } from "react"
import { TaskForm } from "./TaskForm"
import { v4 as uuidv4 } from 'uuid';
import { Task } from "./Task";
uuidv4();

export const TaskWrapper = () => {
  const [tasks,setTasks]  = useState([])
  const addTask = (task) => {
    setTasks([...tasks, {id:uuidv4(), task:task, completed:false, isEditing:false}])
    console.log(tasks)
  }
  return (
    <div className="task-wrapper">
      <TaskForm addTask={addTask} />
      <Task />
    </div>
  )
}
