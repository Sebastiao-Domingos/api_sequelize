install o node modules
### npm install

iniciando o npm 
### npm init

instalando o Sequelize
### npm install --save sequelize

instalando o tipo de banco de dado que sera utilizada
### npm install --save mysql2

instalando o sequelize cli para poder usar linha de comando
### npm install --save-dev sequelize-cli

iniciando o sequelize  cli criando os seus arquivos
### npx sequelize-cli init

criando variavel de ambiente
## npm install --save dotenv

criar migrations
## npx sequelize-cli migration:generate --name create-users
criar model
## npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string



executar a migration
## npx sequelize-cli db:migrate
rodar o projecto 
### npm run dev



## Para quem baixar.

install o node modules
### npm install
criando a base de dados "sequelizenode" no banco de dados MySQL.
### create database sequelizenode character set collate utf8md4_unicode_ci

Alterar no projecto as credenciais do banco de dados no arquivo .env

executar as migrations
## npx sequelize-cli db:migrate

executar o programa 
## npm run dev