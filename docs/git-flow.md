# Git Flow adotado no projeto

Este documento registra o fluxo de trabalho adotado pela equipe TechNova Solutions.

## Branches principais

- `main`: código em produção.
- `develop`: integração das funcionalidades.

## Branches temporárias

- `feature/*`: criação de novas funcionalidades.
- `hotfix/*`: correção urgente de bugs em produção.

## Fluxo de feature

```bash
git checkout develop
git checkout -b feature/nome-da-feature
# desenvolver
git add .
git commit -m "feat: descreve a funcionalidade"
git checkout develop
git merge --no-ff feature/nome-da-feature
```

## Fluxo de release

```bash
git checkout main
git merge --no-ff develop
git tag -a v1.0.0 -m "release: versão 1.0.0"
```

## Fluxo de hotfix

```bash
git checkout main
git checkout -b hotfix/nome-do-hotfix
# corrigir
git add .
git commit -m "fix: descreve correção"
git checkout main
git merge --no-ff hotfix/nome-do-hotfix
git tag -a v1.1.1 -m "release: hotfix versão 1.1.1"
git checkout develop
git merge --no-ff hotfix/nome-do-hotfix
```
