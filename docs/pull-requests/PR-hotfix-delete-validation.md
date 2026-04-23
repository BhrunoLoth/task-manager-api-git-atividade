# Pull Request: hotfix/delete-validation

## Descrição

Corrige bug em produção relacionado à exclusão de tarefas inexistentes.

## Problema identificado

Ao tentar deletar uma tarefa inexistente, a API não retornava uma resposta adequada de erro.

## O que foi feito

- Adicionada validação para ID inexistente.
- Ajustado retorno para status `404`.
- Criada mensagem padronizada `Task not found`.

## Como testar

1. Rodar a API.
2. Enviar `DELETE /tasks/999`.
3. Verificar se o retorno é status `404`.

## Branch de origem

`hotfix/delete-validation`

## Branch de destino

`main` e depois `develop`
