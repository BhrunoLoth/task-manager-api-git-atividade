# Task Manager API — TechNova Solutions

Projeto acadêmico desenvolvido para simular a adoção de Git em uma empresa em crescimento, a **TechNova Solutions**.

A empresa anteriormente compartilhava código por arquivos `.zip`, sem controle claro de versões, histórico de alterações ou organização entre desenvolvedores. Este projeto demonstra uma forma profissional de estruturar um repositório, trabalhar com branches, commits padronizados, Pull Requests simulados, releases e versionamento semântico.

## Descrição do projeto

O **Task Manager API** é uma API simples para gerenciamento de tarefas. Ela permite criar, listar, atualizar e deletar tarefas.

O foco principal do projeto não é a complexidade da API, mas sim a aplicação correta de boas práticas com Git, organização de repositório e fluxo profissional de desenvolvimento.

## Funcionalidades

- Criar tarefa
- Listar tarefas
- Buscar tarefa por ID
- Atualizar tarefa
- Deletar tarefa
- Validação básica dos dados
- Endpoint de status da API

## Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript
- Git
- GitHub/GitLab para hospedagem do repositório

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd task-manager-api-git-atividade
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em modo desenvolvimento

```bash
npm run dev
```

### 4. Rodar em modo produção

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Endpoints da API

### Status da API

```http
GET /health
```

Resposta esperada:

```json
{
  "status": "ok",
  "message": "Task Manager API is running"
}
```

### Criar tarefa

```http
POST /tasks
Content-Type: application/json
```

Body:

```json
{
  "title": "Estudar Git",
  "description": "Praticar branches, commits e tags"
}
```

### Listar tarefas

```http
GET /tasks
```

### Buscar tarefa por ID

```http
GET /tasks/1
```

### Atualizar tarefa

```http
PUT /tasks/1
Content-Type: application/json
```

Body:

```json
{
  "title": "Estudar Git e GitHub",
  "description": "Finalizar atividade prática",
  "completed": true
}
```

### Deletar tarefa

```http
DELETE /tasks/1
```

## Estrutura do projeto

```text
task-manager-api-git-atividade/
├── docs/
│   ├── pull-requests/
│   │   ├── PR-feature-criar-tarefas.md
│   │   ├── PR-feature-listar-tarefas.md
│   │   ├── PR-feature-atualizar-tarefas.md
│   │   ├── PR-feature-deletar-tarefas.md
│   │   └── PR-hotfix-delete-validation.md
│   └── git-flow.md
├── src/
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── services/
│   │   └── taskService.js
│   └── server.js
├── .gitignore
├── CHANGELOG.md
├── package.json
└── README.md
```

## Estratégia de branches

Este projeto utiliza um fluxo baseado em Git Flow simplificado.

### `main`

Branch de produção. Contém apenas versões estáveis e liberadas da aplicação.

### `develop`

Branch de integração. Recebe as funcionalidades aprovadas antes de uma release oficial.

### `feature/*`

Branches utilizadas para desenvolver novas funcionalidades de forma isolada.

Exemplos:

```text
feature/criar-tarefas
feature/listar-tarefas
feature/atualizar-tarefas
feature/deletar-tarefas
```

### `hotfix/*`

Branches utilizadas para corrigir problemas urgentes encontrados em produção.

Exemplo:

```text
hotfix/delete-validation
```

## Fluxo de desenvolvimento

1. Criar uma branch a partir da `develop`.

```bash
git checkout develop
git checkout -b feature/nome-da-feature
```

2. Desenvolver a funcionalidade.

3. Fazer commits pequenos e organizados.

```bash
git add .
git commit -m "feat: adiciona criação de tarefas"
```

4. Enviar a branch para o repositório remoto.

```bash
git push origin feature/nome-da-feature
```

5. Abrir um Pull Request para a branch `develop`.

6. Revisar, testar e aprovar.

7. Fazer merge na `develop`.

8. Após validar a versão, fazer merge da `develop` na `main`.

9. Criar uma tag de versão.

```bash
git tag -a v1.0.0 -m "release: versão 1.0.0"
git push origin v1.0.0
```

## Padrão de commits

O projeto utiliza commits padronizados no estilo Conventional Commits.

### Tipos utilizados

```text
feat: nova funcionalidade
fix: correção de bug
docs: alteração em documentação
refactor: melhoria interna sem alterar comportamento
chore: ajustes de configuração ou manutenção
```

### Exemplos

```bash
git commit -m "feat: adiciona criação de tarefas"
git commit -m "fix: corrige validação ao deletar tarefa"
git commit -m "docs: atualiza instruções do README"
git commit -m "refactor: organiza regras de negócio em service"
```

## Versionamento

Este projeto utiliza Versionamento Semântico.

Formato:

```text
MAJOR.MINOR.PATCH
```

Exemplos aplicados:

```text
v1.0.0 - primeira versão estável
v1.1.0 - adição de novas funcionalidades
v1.1.1 - correção urgente em produção
```

### Regras

- `MAJOR`: mudanças incompatíveis com versões anteriores.
- `MINOR`: novas funcionalidades compatíveis.
- `PATCH`: correções de bugs.

## Pull Requests simulados

Os Pull Requests foram documentados na pasta:

```text
docs/pull-requests/
```

Cada PR contém:

- Descrição clara
- O que foi feito
- Como testar
- Branch de origem
- Branch de destino

## Simulação de hotfix

Foi simulado um bug em produção no endpoint de exclusão de tarefas.

Fluxo utilizado:

1. Bug identificado na branch `main`.
2. Criada a branch `hotfix/delete-validation`.
3. Correção aplicada.
4. Merge realizado diretamente na `main`.
5. Criada a tag `v1.1.1`.
6. Correção também integrada na `develop`.

## Comandos úteis para análise do histórico

Ver histórico de commits:

```bash
git log --oneline --graph --all
```

Ver branches:

```bash
git branch -a
```

Ver tags:

```bash
git tag
```

Ver detalhes de uma tag:

```bash
git show v1.1.1
```

## Conclusão

Este projeto demonstra como uma empresa em crescimento pode sair de um processo desorganizado baseado em arquivos `.zip` e adotar um fluxo profissional com Git, branches, commits padronizados, Pull Requests, releases e versionamento semântico.
