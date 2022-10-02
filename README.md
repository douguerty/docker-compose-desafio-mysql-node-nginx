# Desafio Full Cycle - Docker

## 💻 Desafio MySQL + Node + Nginx com Docker Compose
Quando um usuário acessar o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
O retorno da aplicação node.js para o nginx deverá ser uma listagem contendo os dados cadastrados no banco de dados

## 🧪 Tecnologias
- [NodeJS](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com)
- [NGINX](https://www.nginx.com)
- [Docker](https://www.docker.com)

## 🚀 Como executar
```bash
# Clone o repositório
git clone https://github.com/douguerty/docker-compose-desafio-mysql-node-nginx.git

# Entre no repositório
cd docker-compose-desafio-mysql-node-nginx

# Inicio os containers
docker-compose up -d --build
```
Acesse [localhost:8080](http://localhost:8080/)