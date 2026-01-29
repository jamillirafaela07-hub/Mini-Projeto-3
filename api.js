const API_URL = "http://localhost:3000/tarefas";

export const api = {
  listar: () =>
    fetch(API_URL).then(r => r.json()),

  buscarPorId: (id) =>
    fetch(`${API_URL}/${id}`).then(r => r.json()),

  criar: (tarefa) =>
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarefa)
    }).then(r => r.json()),

  atualizar: (id, tarefa) =>
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tarefa)
    }),

  atualizarStatus: (id, status) =>
    fetch(`${API_URL}/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    }),

  deletar: (id) =>
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
};
