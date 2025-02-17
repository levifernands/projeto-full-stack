import React from 'react';
import { deleteTask } from '../api/todoApi';

const TaskItem = ({ task }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      alert('Tarefa excluída');
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <li>
      {task.text}
      <button onClick={handleDelete}>Excluir</button>
    </li>
  );
};

export default TaskItem;
