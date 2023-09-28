# Explicação dos comandos:

version: "3.1" versao do compose

services: setando os serviços

db: #nome do serviço
image: postgres:14.2-alpine #setando a imagem
restart: always #definindo estratégia de restart
environment:
POSTGRES_PASSWORD: example #setando a senha
ports: - "5432:5432" #expondo a porta padrão do postgres

- POSTGRES_USER é OPCIONAL. Se nao setar POSTGRES_USER será usado o padrão "postgres"
- POSTGRES_DB é OPCIONAL. Se nao setar POSTGRES_DB será usado o nome do POSTGRES_USER
- FONTE: https://hub.docker.com/_/postgres
- Versão alpine é a versão mais leve, por isso foi usada no exemplo

### comandos criar tabelas SQL

```SQL
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  CREATE  TABLE  IF  NOT  EXISTS  public.users
  (
  id uuid NOT NULL  DEFAULT uuid_generate_v4(),
  nome character varying(100) COLLATE pg_catalog."default"  NOT NULL,
  email character varying(70) COLLATE pg_catalog."default"  NOT NULL,
  senha character varying(255) COLLATE pg_catalog."default"  NOT NULL,
  created_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  updated_at timestamp without time zone  NOT NULL  DEFAULT  now(),
  deleted_at timestamp without time zone,
  CONSTRAINT  "PK_d7281c19c174e152e4c531594a9"  PRIMARY KEY (id)
  );
  ALTER  TABLE  IF  EXISTS  public.users  OWNER  to  root;
```
#Referências:

- https://hub.docker.com/_/postgres
- https://alpinelinux.org/
- https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d

