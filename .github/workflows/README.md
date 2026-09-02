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

- **Build & Teste:** Validação do código Node.js e compilação do container Docker.
- **Branch `develop`:** Dispara deploy automatizado para Staging.
- **Branch `main`:** Dispara deploy automatizado para Produção.

---

## 🔒 3. Checklist de Segurança

Atendendo aos requisitos de tratamento de dados sensíveis da Lacrei Saúde:

- [x] **Gerenciamento de Secrets:** Credenciais tratadas via **GitHub Secrets**.
- [x] **HTTPS/TLS obrigatório:** Tráfego criptografado na AWS via ACM (AWS Certificate Manager).
- [x] **CORS:** Middleware configurado no Node.js para restringir requisições não autorizadas.
- [x] **Princípio do Menor Privilégio:** Roles IAM de execução restritas apenas aos serviços necessários.
- [x] **Containerização Segura:** Uso de imagem base leve para diminuir superfícies de vulnerabilidade.

---

## 🔄 4. Processo de Rollback Funcional

1. **Reversão via Git (Recomendado):**
   ```bash
   git revert HEAD
   git push origin main