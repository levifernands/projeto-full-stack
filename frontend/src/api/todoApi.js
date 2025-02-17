import './App.css';
import React, { useEffect, useState } from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [upperLimit, setUpperLimit] = useState(200);
  const jsonLink = 'https://jsonplaceholder.typicode.com/todos';
  const lowerLimit = 195;


  useEffect(() => {
    fetchData();
  }, []);

  const mockTasks = [
    { id: 1, title: 'Tarefa 1', completed: false },
    { id: 2, title: 'Tarefa 2', completed: true },
    { id: 3, title: 'Tarefa 3', completed: false },
  ];

  const fetchData = () => {
    setTasks(mockTasks);
  };

  const onAdd = async (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setUpperLimit(upperLimit + 1);
  };

  const onDelete = async (id) => {

    setTasks(tasks.filter((task) => task.id !== id));
    setUpperLimit(upperLimit - 1);
  };

  const handleEditTask = async (editValue, id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: editValue } : task
    );
    setTasks(updatedTasks);
  };

  const switchComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='App'>
      <h3>Create Your Task as You Wish</h3>
      <br />
      <AddTask onAdd={onAdd} />
      <div className='allList'>
        {tasks.slice(lowerLimit, upperLimit).map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            onDelete={onDelete}
            handleEditTask={handleEditTask}
            checkComplete={switchComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
