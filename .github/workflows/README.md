# Desafio Técnico DevOps - Lacrei Saúde 🚀

Este repositório contém a solução do desafio técnico para a construção de um pipeline de deploy seguro, escalável e eficiente com suporte a ambientes de **Staging** e **Produção**.

---

## 🏗️ 1. Arquitetura e Setup dos Ambientes (AWS)

A aplicação foi projetada para rodar em containers na **AWS** garantindo isolamento e alta disponibilidade:

- **Staging (Homologação):** Alimentado automaticamente por pushes na branch `develop`. Hospedado no AWS ECS (Fargate) / App Runner em subnet privada com menor capacidade computacional.
- **Produção:** Alimentado por pushes na branch `main`. Hospedado no AWS ECS (Fargate) com autoscaling ativo e Load Balancer (ALB) com suporte a HTTPS/TLS.

---

## 🔄 2. Fluxo da Pipeline de CI/CD (GitHub Actions)

O fluxo automatizado é disparado a cada `push` ou `pull request`: