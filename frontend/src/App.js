import React from 'react';
import './styles/App.css'; 
import { TaskWrapper } from './components/TaskWrapper';
const App = () => {
  return (
    <div className="App">
      <h1>Minha Lista de Tarefas</h1>
      <TaskWrapper />
    </div>
  );
};

export default App;
