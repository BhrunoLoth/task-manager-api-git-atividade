# Pull Request: feature/atualizar-tarefas

## Descrição

Adiciona endpoints para buscar e atualizar tarefas existentes.

## O que foi feito

- Criada busca por ID.
- Criada atualização de título, descrição e status.
- Criadas rotas `GET /tasks/:id` e `PUT /tasks/:id`.

## Como testar

1. Criar uma tarefa.
2. Buscar a tarefa pelo ID.
3. Atualizar a tarefa com `PUT /tasks/:id`.
4. Verificar se os dados foram alterados corretamente.

## Branch de origem

`feature/atualizar-tarefas`

## Branch de destino

`develop`
