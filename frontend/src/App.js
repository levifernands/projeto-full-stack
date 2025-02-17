import React from 'react';
import './styles/App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskWrapper } from './components/TaskWrapper';
import { LoginPage } from "./components/LoginPage";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<TaskWrapper />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
  );
};

export default App;
