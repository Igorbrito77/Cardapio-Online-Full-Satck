# Dockerfile para uma aplicação Node.js
FROM node:22.9.0

WORKDIR /app

# Copia apenas package.json e package-lock.json para instalar dependências
COPY package*.json ./

RUN npm install

# Agora copia o restante do código
COPY . .

CMD [ "npm", "start" ]
