# 📝 **Gestão de Tarefas - Projeto Full Stack Dockerizado**

Bem-vindo ao projeto **Lista de Tarefas**! Este repositório contém o código de um sistema de gerenciamento de tarefas que usa Docker para facilitar o desenvolvimento e execução de todos os seus componentes: **Backend**, **Frontend**, **Banco de Dados** e **Cache (Redis)**.

---

## 🛠️ **Pré-requisitos**

Antes de começar, você precisa ter o Docker e/ou o Docker Compose instalados na sua máquina. Se ainda não os tem, siga os links abaixo para instalação:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🚧 **Passo a Passo para Execução**

### 1. 📥 **Clone o Repositório**

Comece clonando este repositório em sua máquina local:

```bash
git clone https://github.com/levifernands/projeto-full-stack.git
cd projeto-full-stack
```

## ⚙️ **Configuração do `.env`**

O arquivo `.env` contém as configurações essenciais para a execução do projeto, como banco de dados, cache e JWT. Certifique-se de configurar corretamente o arquivo de variáveis de ambiente. Contate-me se precisar do .env.example.

## 🐋 **Inicie os Containers Docker**

No diretório raiz do projeto, execute o comando para iniciar os containers Docker:

```bash
docker-compose up --build
```

Este comando irá:

- Construir e rodar os containers para o **Backend**, **Frontend**, **Banco de Dados (MySQL)** e **Redis**.

---

## 📡 **Portas de Acesso**

Aqui estão as portas que você deve usar para acessar os diferentes componentes do sistema de lista de tarefas:

- **Frontend (Lista de Tarefas)**: [localhost:3001](http://localhost:3001)
- **Backend (API)**: [localhost:3000](http://localhost:3000)
- **Documentação Swagger (para testar os endpoints)**: [localhost:3000/swagger](http://localhost:3000/swagger)
---

## 🧑‍🔧 **Tecnologias Utilizadas**

- **Frontend**: React.js
- **Backend**: NestJS (TypeScript)
- **Banco de Dados**: MySQL
- **Cache**: Redis
- **Autenticação**: JWT
- **Docker**: Docker Compose para orquestração dos containers

---

## ⚠️ **Melhorias Futuras**

Este projeto será evoluído, e várias melhorias estão sendo planejadas. Isso inclui otimização de performance, melhorias na interface de usuário e término/adição de novas funcionalidades.
