# Pull Request: feature/listar-tarefas

## Descrição

Adiciona endpoint para listagem de tarefas cadastradas.

## O que foi feito

- Criada função de listagem no service.
- Criado controller para retornar todas as tarefas.
- Criada rota `GET /tasks`.

## Como testar

1. Criar uma tarefa com `POST /tasks`.
2. Chamar `GET /tasks`.
3. Verificar se a tarefa criada aparece na resposta.

## Branch de origem

`feature/listar-tarefas`

## Branch de destino

`develop`
