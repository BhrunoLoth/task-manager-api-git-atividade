# Pull Request: feature/deletar-tarefas

## Descrição

Adiciona endpoint para deletar tarefas cadastradas.

## O que foi feito

- Criada função de remoção no service.
- Criado controller para deletar tarefa por ID.
- Criada rota `DELETE /tasks/:id`.

## Como testar

1. Criar uma tarefa.
2. Deletar a tarefa com `DELETE /tasks/:id`.
3. Listar tarefas e confirmar que ela foi removida.

## Branch de origem

`feature/deletar-tarefas`

## Branch de destino

`develop`
