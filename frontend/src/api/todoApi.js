
export const getTasks = async () => {
  const response = await fetch(process.env.API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar tarefas');
  }
  return response.json();
};

export const addTask = async (todo) => {
  const response = await fetch(process.env.API_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar tarefa');
  }
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${process.env.API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao excluir tarefa');
  }
  return response.json();
};
