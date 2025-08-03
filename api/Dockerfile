# Etapa 1: Build da aplicação
FROM node:22-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência e instala os pacotes
COPY package*.json ./
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Etapa 2: Imagem final, somente com o necessário para rodar
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Define a porta padrão usada pelo NestJS
EXPOSE 3000

# Comando para rodar a API
CMD ["npm", "run", "start:dev"]
