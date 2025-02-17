import React, { useState } from "react";

export const TaskInput = ({ initialValue = "", onSubmit, placeholder }) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onSubmit(value);
    setValue(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="TaskInput">
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder={placeholder} 
        className="task-input"
      />
      <button type="submit" className="task-botao">Salvar</button>
    </form>
  );
};