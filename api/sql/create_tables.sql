CREATE table public.usuario(
  id serial NOT NULL,
  nome VARCHAR(250) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR NOT NULL,
  PRIMARY KEY (id)
);

create table public.categoria(

	id serial NOT NULL,
	nome VARCHAR(250) NOT NULL,
	PRIMARY KEY (id)

);

create table public.alimento(
	id serial NOT NULL,
	nome VARCHAR(250) NOT NULL,
	categoria_id int4 NOT NULL REFERENCES public.categoria(id),
	url varchar not null,
	PRIMARY KEY (id)
);

create table public.pedido(
	id serial NOT NULL,
	data timestamp not null,
	numero serial not null,
	usuario_id int4 not null REFERENCES public.usuario(id),
	PRIMARY KEY (id)
);

create table public.pedido_alimento(
	id serial NOT NULL,
	pedido_id int4 not null REFERENCES public.pedido(id),
	alimento_id int4 not null REFERENCES public.alimento(id),
	PRIMARY KEY (id)
);
