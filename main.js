import { api } from "./api.js";

// 🔹 Pegando as telas
const telaCriar = document.getElementById("tela-criar");
const telaPainel = document.getElementById("tela-painel");

// 🔹 Elementos do formulário
const form = document.getElementById("task-form");
const lista = document.getElementById("task-list");

// 🔹 TROCA DE TELAS
function irParaPainel() {
  telaCriar.hidden = true;
  telaPainel.hidden = false;
}

function irParaCriar() {
  telaCriar.hidden = false;
  telaPainel.hidden = true;
}

// 🔹 LISTAR TAREFAS (GET)
async function carregarTarefas() {
  lista.innerHTML = "";

  const tarefas = await api.listar();

  tarefas.forEach(tarefa => {
    const article = document.createElement("article");

    article.innerHTML = `
      <strong>${tarefa.título}</strong>
      <p>${tarefa.descrição}</p>
      <span>Status: ${tarefa.status}</span>
    `;

    // 🔸 BOTÃO STATUS (PATCH)
    const btnStatus = document.createElement("button");
    btnStatus.textContent = "Alterar Status";
    btnStatus.onclick = async () => {
      await api.atualizarStatus(tarefa.id, "concluída");
      carregarTarefas();
    };

    // 🔸 BOTÃO DELETE
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "🗑️";
    btnDelete.onclick = async () => {
      await api.deletar(tarefa.id);
      carregarTarefas();
    };

    article.append(btnStatus, btnDelete);
    lista.appendChild(article);
  });
}

// 🔹 SUBMIT — CRIAR TAREFA (POST)
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = document.getElementById("title").value;
  const descricao = document.getElementById("description").value;
  const status = document.getElementById("status").value;

  await api.criar({
    título: titulo,
    descrição: descricao,
    status: status
  });

  form.reset();

  // 👇 ESSAS LINHAS ESTAVAM FALTANDO
  irParaPainel();
  carregarTarefas();
});

// 🔹 BOTÃO VOLTAR
document.getElementById("btn-voltar")
  .addEventListener("click", irParaCriar);
