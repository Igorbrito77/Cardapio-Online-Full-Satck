# Cardápio Online - Projeto Full Stack

## 🧾 Descrição do Projeto

Este é um projeto **Full Stack** desenvolvido para gerenciar pedidos de refeições em ambientes como **lanchonetes**, **refeitórios empresariais**, **escolares** ou **universitários**. A aplicação permite que usuários logados montem seus pratos personalizados, selecionem acompanhamentos e realizem seus pedidos de forma prática e intuitiva por meio de uma **interface web moderna**.

<img src="/front-end/public/prints_readme/tela1.png">
<img src="/front-end/public/prints_readme/tela6.png">
<img src="/front-end/public/prints_readme/tela7.png">
<img src="/front-end/public/prints_readme/tela_api.png">

---

### 💻 Front-end

O front-end foi desenvolvido com **ReactJS**, proporcionando uma experiência fluida e responsiva ao usuário. A interface permite:

- Autenticação de usuários  
- Montagem do prato com seleção de itens  
- Visualização de pedidos anteriores  
- Integração completa com a API para envio e consulta de dados

---

### 🧠 Back-end

A API foi construída com **NodeJS** e **NestJS**, utilizando uma arquitetura modular e escalável. Ela é responsável por:

- Autenticar usuários  
- Gerenciar os dados dos pedidos, pratos e categorias  
- Controlar os direitos de acesso  
- Realizar consultas e persistência no banco de dados

---

### 🗄️ Banco de Dados

Os dados são armazenados em um banco **PostgreSQL**, estruturado com entidades como:

- Usuários  
- Itens do cardápio  
- Pedidos  
- Categorias de alimentos

---

### 🐳 Containerização

Todo o projeto foi containerizado com **Docker**, incluindo um arquivo `docker-compose.yml` que:

- Sobe o banco de dados PostgreSQL com dados iniciais  
- Builda e executa a API NestJS  
- Builda e executa o front-end React  
- Faz a conexão entre os serviços automaticamente

## Passos para executar o projeto:

Com isso, a instalação é extremamente simples:

```bash
docker compose up
```

Em seguida, basta acessar a aplicação web no endereço http://localhost:3000 e o Swagger da api no endereço: http://localhost:3077
