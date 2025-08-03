insert into "usuario" (nome, email, senha) values('Igor', 'igor@gmail.com', '123');
insert into "usuario" (nome, email, senha) values('João', 'joao@gmail.com', '123');
insert into "usuario" (nome, email, senha) values('Maria', 'maria@gmail.com', '123');
insert into "usuario" (nome, email, senha) values('Melissa', 'melissa@gmail.com', '123');
insert into "usuario" (nome, email, senha) values('Caio', 'caio@gmail.com', '123');


-- Insert de categorias

insert into "categoria" (nome) values('Acompanhamento');
insert into "categoria" (nome) values('Proteína');
insert into "categoria" (nome) values('Bebida');
insert into "categoria" (nome) values('Sobremesa');


-- Insert de alimentos


insert into "alimento" (nome, categoria_id, url) values('Frango grelhado', 

														(select id from categoria where nome = 'Proteína' limit 1 ),
														
														'https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F9ba0d1f77f5244113cc7503ac636d459e90e8143.png&w=1080&q=70'



);


insert into "alimento" (nome, categoria_id, url) values('Lasanha', 

														(select id from categoria where nome = 'Proteína' limit 1 ),
														
														'https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg'


);


insert into "alimento" (nome, categoria_id, url) values('Carne de panela', 

														(select id from categoria where nome = 'Proteína' limit 1 ),
														
														'https://paolacarosella.com.br/cms/wp-content/uploads/2024/01/107_Carne-de-panela-scaled.jpg'


);



insert into "alimento" (nome, categoria_id, url) values('Peixe frito', 

														(select id from categoria where nome = 'Proteína' limit 1 ),
														
														'https://canaldareceita.com.br/wp-content/uploads/2025/04/File-de-Peixe-Frito-1200x900.jpg'


);



insert into "alimento" (nome, categoria_id, url) values('Arroz', 

														(select id from categoria where nome = 'Acompanhamento' limit 1 ),
														
														'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2021/02/04/1572294240-aprenda-como-fazer-um-arroz-dos-deuses-fonte-pinterest-500x500.jpg'


);

insert into "alimento" (nome, categoria_id, url) values('Feijão', 

														(select id from categoria where nome = 'Acompanhamento' limit 1 ),
														
														'https://essareceitafunciona.com.br/wp-content/uploads/2023/04/Como-fazer-feijao-preto-Essa-Receita-Funciona-8-500x375.jpg'


);


insert into "alimento" (nome, categoria_id, url) values('Macarrão', 

														(select id from categoria where nome = 'Acompanhamento' limit 1 ),
														
														'https://images.ecycle.com.br/wp-content/uploads/2023/08/16115133/pexels-engin-akyurt-1437267-scaled.jpg.webp'


);


insert into "alimento" (nome, categoria_id, url) values('Purê de batata', 

														(select id from categoria where nome = 'Acompanhamento' limit 1 ),
														
														'https://www.receiteria.com.br/wp-content/uploads/pure-de-batata-com-maionese-01.jpg'


);




insert into "alimento" (nome, categoria_id, url) values('Suco de Maracujá', 

														(select id from categoria where nome = 'Bebida' limit 1 ),
														
														'https://receitadaboa.com.br/wp-content/uploads/2024/08/fresh-passionfruit-smoothie-macro-shot.jpg'


);


insert into "alimento" (nome, categoria_id, url) values('Suco de Uva', 

														(select id from categoria where nome = 'Bebida' limit 1 ),
														
														'https://wx.mlcdn.com.br/ponzi/production/portaldalu/58836.jpg'


);


insert into "alimento" (nome, categoria_id, url) values('Coca-Cola', 

														(select id from categoria where nome = 'Bebida' limit 1 ),
														
														'https://carrefourbrfood.vtexassets.com/arquivos/ids/190162/501530_10.jpg?v=637272422019430000'


);


insert into "alimento" (nome, categoria_id, url) values('Guaracamp', 

														(select id from categoria where nome = 'Bebida' limit 1 ),
														
														'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrc8uv7tm9t027'


);




insert into "alimento" (nome, categoria_id, url) values('Bolo no pote', 

														(select id from categoria where nome = 'Sobremesa' limit 1 ),
														
														'https://lh5.googleusercontent.com/proxy/Wsp3m6TZ3eISDto9hQziS9ewGGKWu0wt_8XDbjHRfZrUEuIAxdb8ychucrjuJBtdDR3-mDjsXp1SbaTsgxt9rb92yyxfHnvMQAh8oVgUTtDkW1suTVYsjFFNBZE5l55UJ33ySQ'


);


insert into "alimento" (nome, categoria_id, url) values('Pavê de Bis', 

														(select id from categoria where nome = 'Sobremesa' limit 1 ),
														
														'https://www.padariapampulha.com.br/wp-content/uploads/2023/10/Pave-de-bis.png'


);

insert into "alimento" (nome, categoria_id, url) values('Sundae de Morango', 

														(select id from categoria where nome = 'Sobremesa' limit 1 ),
														
														'https://larissajanuario.com.br/wp-content/uploads/2023/02/sundae.jpg'


);


insert into "alimento" (nome, categoria_id, url) values('Açaí na tigela', 

														(select id from categoria where nome = 'Sobremesa' limit 1 ),
														
														'https://alergiazero.blog/wp-content/uploads/2023/02/20230301_1614257e26136777551617747967.jpg'


);




