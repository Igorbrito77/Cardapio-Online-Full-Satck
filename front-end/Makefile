IMAGE_TAG=manager-cardapio-diario

#Instala docker de repositórios APT 
# install: 
# 	-sudo apt-get install docker.io \
# 	&& sudo groupadd docker || true \
# 	&& sudo usermod -aG docker $(USER)

#Executa todos os passos necessários para desenvolvimento local
run : build  npm-install server-dev

# Constrói a imagem do Docker
build: 
	docker build -t $(IMAGE_TAG) .

# Executa um container com shell interativo para instalar funções novas e fixar problemas como permissões
shell: 
	docker run -it --rm \
		--name cardapio-dev \
		--user 0 \
		\
		-v ${PWD}:/app \
		\
		$(IMAGE_TAG) bash

# Instala as dependências do node para desenvolvimento
npm-install:
	docker run -it --rm \
		--name cardapio-dev \
		\
		-v ${PWD}:/app \
		\
		$(IMAGE_TAG) npm install --prefer-offline 


# Executa servidor em modo de desenvolvimento
server-dev: 
	docker run -it --rm \
		--name cardapio-dev \
		--network host \
		-- port 3044:3044 \
		-v ${PWD}:/app \
		$(IMAGE_TAG) npm start
		

