Minha To-Do List (Front-end + API)

Este projeto é uma aplicação de lista de tarefas (To-Do List) desenvolvida com HTML, CSS e JavaScript (ES Modules), integrada a uma API REST criada em Node.js + Express.

Funcionalidades

A API e o front-end foram estruturados para suportar as seguintes operações:
- Criar uma tarefa (POST /tarefas)
- Listar todas as tarefas (GET /tarefas)
- Buscar tarefa por ID (GET /tarefas/:id)
- Atualizar uma tarefa (PUT /tarefas/:id)
- Atualizar apenas o status (PATCH /tarefas/:id/status)
- Deletar uma tarefa (DELETE /tarefas/:id)

O front possui uma interface simples, centralizada, com estética suave e cores pastéis, simulando uma pequena “janelinha” de aplicação.

⚠️ Problema encontrado

Durante o desenvolvimento, ocorreu um erro de CORS (Cross-Origin Resource Sharing) entre o front-end e a API.

Erro principal:
- Access to fetch at 'http://localhost:3000/tarefas'
from origin 'http://127.0.0.1:5500'
has been blocked by CORS policy

O que isso significa?

O navegador bloqueou a comunicação entre o front-end e a API porque o servidor não estava configurado corretamente para aceitar requisições de outra origem.

Esse erro ocorre quando:
- O front roda em uma porta/origem diferente da API
- O servidor não retorna o header Access-Control-Allow-Origin
  
Como consequência:
- O botão Adicionar não executa a ação
- O front aparenta “congelar”
- As requisições fetch falham antes de chegar à API

Status atual do projeto
- Estrutura do front-end concluída
- Estrutura da API definida
- Integração front ↔ API em ajuste devido ao CORS

💬 Observação importante

Peço desculpas por o projeto não estar funcionando completamente no momento.
Esse desafio fez parte do meu processo de aprendizado com APIs e integração front-end/back-end, e o erro identificado já faz parte dos próximos ajustes planejados.
Mesmo com esse obstáculo, o projeto foi essencial para consolidar conceitos importantes de desenvolvimento web.

Próximos passos
- Corrigir a configuração de CORS no servidor
- Garantir a navegação correta entre telas
- Melhorar feedback visual no front-end
- Finalizar testes de todas as rotas da API

✨ Projeto desenvolvido para fins de estudo e evolução contínua.

