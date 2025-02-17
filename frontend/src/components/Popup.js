import React, { useEffect, useState } from "react";

export const Popup = ({ task, onSave, onClose }) => {
  const [newText, setNewText] = useState(task.title);

  useEffect(() => {
    setNewText(task.title);
  }, [task]);

  const handleSave = () => {
    onSave(task.id, newText);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Editar Tarefa</h3>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="popup-input"
        />
        <div className="popup-buttons">
          <button onClick={handleSave} className="save-botao">
            Salvar
          </button>
          <button onClick={onClose} className="close-botao">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
