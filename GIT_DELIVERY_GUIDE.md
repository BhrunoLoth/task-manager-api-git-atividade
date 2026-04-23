# Guia para entregar no GitHub

Este projeto já está com Git inicializado, branches simuladas, commits padronizados e tags criadas.

## 1. Criar repositório no GitHub

Crie um repositório público ou privado com o nome:

```text
task-manager-api-git-atividade
```

Não marque a opção de criar README no GitHub, pois este projeto já possui README.

## 2. Conectar este projeto ao GitHub

Dentro da pasta do projeto, rode:

```bash
git remote add origin https://github.com/SEU_USUARIO/task-manager-api-git-atividade.git
```

## 3. Enviar branches principais

```bash
git push -u origin main
git push -u origin develop
```

## 4. Enviar branches de feature e hotfix

```bash
git push origin feature/criar-tarefas
git push origin feature/listar-tarefas
git push origin feature/atualizar-tarefas
git push origin feature/deletar-tarefas
git push origin hotfix/delete-validation
```

Caso copie e cole, corrija se aparecer erro de digitação: o comando correto sempre começa com `git push`.

## 5. Enviar tags de versão

```bash
git push origin --tags
```

## 6. Conferir histórico

```bash
git log --oneline --graph --all
```

## 7. Entrega final

Entregar ao professor:

- Link do repositório no GitHub.
- README completo.
- Histórico de commits.
- Branches `main`, `develop`, `feature/*` e `hotfix/*`.
- Tags `v1.0.0`, `v1.1.0` e `v1.1.1`.
