import React from 'react';
import TaskList from './components/TaskList';
import './styles/App.css'; 
const App = () => {
  return (
    <div className="App">
      <h1>Minha Lista de Tarefas</h1>
      <TaskList />
    </div>
  );
};

export default App;
