# Pull Request: feature/criar-tarefas

## Descrição

Adiciona endpoint para criação de tarefas na API.

## O que foi feito

- Criado service para armazenar tarefas em memória.
- Criado controller com validação de título obrigatório.
- Criada rota `POST /tasks`.

## Como testar

1. Rodar o projeto com `npm run dev`.
2. Enviar requisição `POST /tasks` com título e descrição.
3. Validar retorno com status `201`.

## Branch de origem

`feature/criar-tarefas`

## Branch de destino

`develop`
