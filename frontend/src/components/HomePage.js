import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="home-container">
      <h2>Bem-vindo!</h2>
      <div className="button-container">
        <button onClick={handleLoginClick} className="login-button">
          Login
        </button>
        <button onClick={handleSignupClick} className="signup-button">
          Cadastro
        </button>
      </div>
    </div>
  );
};

export default HomePage;
