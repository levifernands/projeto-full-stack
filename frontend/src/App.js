import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskWrapper } from "./components/TaskWrapper";
import { LoginPage } from "./components/LoginPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { SignupPage } from "./components/SignUpPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route
        path="/tarefas"
        element={<ProtectedRoute element={<TaskWrapper />} />}
      />
    </Routes>
  );
};

export default App;
