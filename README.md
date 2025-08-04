# Cardápio Online - Projeto Full Stack

Este é um projeto Full Stack desenvolvido para gerenciar pedidos de refeições em ambientes como lanchonetes, refeitórios empresariais, escolares ou universitários. A aplicação permite que usuários logados montem seus pratos personalizados, selecionem acompanhamentos e realizem seus pedidos de forma prática e intuitiva por meio de uma interface web moderna.

💻 Front-end
O front-end foi desenvolvido com ReactJS, proporcionando uma experiência fluida e responsiva ao usuário. A interface permite:

Autenticação de usuários

Montagem do prato com seleção de itens

Visualização de pedidos anteriores

Integração completa com a API para envio e consulta de dados

🧠 Back-end
A API foi construída com NodeJS e NestJS, utilizando uma arquitetura modular e escalável. Ela é responsável por:

Autenticar usuários

Gerenciar os dados dos pedidos, pratos e categorias

Controlar os direitos de acesso

Realizar consultas e persistência no banco de dados

🗄️ Banco de Dados
Os dados são armazenados em um banco PostgreSQL, estruturado com entidades como:

Usuários

Itens do cardápio

Pedidos

Categorias de alimentos

🐳 Containerização
Todo o projeto foi containerizado com Docker, incluindo um arquivo docker-compose.yml que:

Sobe o banco de dados PostgreSQL com dados iniciais

Builda e executa a API NestJS

Builda e executa o front-end React

Faz a conexão entre os serviços automaticamente

Com isso, a instalação é extremamente simples:

bash
Copiar
Editar
docker compose up
Essa linha é suficiente para iniciar toda a aplicação em ambiente local, com tudo pronto para uso.

<img src="/front-end/public/prints_readme/tela1.png">
<img src="/front-end/public/prints_readme/tela2.png">
<img src="/front-end/public/prints_readme/tela3.png">
<img src="/front-end/public/prints_readme/tela5.png">


## Passos para executar o projeto:

Executar o comando `docker compose up` no terminal na pasta do projeto para o Docker instalar todo o necessário

Acessar a aplicação no endereço http://localhost:3000
