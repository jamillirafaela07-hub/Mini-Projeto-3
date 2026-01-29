export function cardTarefa(tarefa, handlers) {
  const article = document.createElement("article");

  article.innerHTML = `
    <h3>${tarefa.título}</h3>
    <p>${tarefa.descrição}</p>
    <span>Status: ${tarefa.status}</span>
  `;

  const concluir = document.createElement("button");
  concluir.textContent = "Alterar Status";
  concluir.onclick = () =>
    handlers.status(tarefa.id);

  const editar = document.createElement("button");
  editar.textContent = "Atualizar Tudo";
  editar.onclick = () =>
    handlers.update(tarefa);

  const excluir = document.createElement("button");
  excluir.textContent = "🗑️";
  excluir.onclick = () =>
    handlers.delete(tarefa.id);

  article.append(concluir, editar, excluir);
  return article;
}
