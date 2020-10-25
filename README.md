## API Brasileirão

<h4 align="center"> 
	🚧 Em construção...  🚧
</h4>

<p align="center">
 <a href=#sobre-o-projeto>Sobre</a> •
 <a href=#funcionalidades>Funcionalidades</a> •
  <a href=#-descrição>Descriçãot</a> • 
 <a href=#tecnologias>Tecnologias Utilizadas</a>  • 
 <a href=#autora>Autora</a>
</p

---

## 💻 Sobre o projeto

API Brasileirão é uma API RESTful que calcula e fornece tabelas do Campeonato Brasileiro de Futebol; possui integração com banco de dados e autenticação para atualização de jogos.
Trata-se de uma experiência educacional desenvolvida no âmbito do curso Programação do Zero da @cubosAcademy

---

## ⚙️ Funcionalidades

-   [x] Calcula a tabela geral de classificação do Campeonato Brasileiro
-   [x] Ordena a tabela por número de pontos, número de vitórias, saldo de gols
-   [x] A tabela indica, para cada time:
    -   Quantidade de jogos
    -   Quantidade de pontos
    -   Numero de vitórias
    -   Número de empatess
    -   Número de derrotas
    -   Gols Feitos
    -   Gols Sofridos
    -   Saldo de Gols
-   [x] Permite a visualização de jogos por rodada do Campeonato
-   [x] Permite a atualização de resultados dos jogos, mediante autenticação de usuário
-   [x] Permite cadastrar um novo jogo
-   [x] Permite deletar um jogo a partir do id

---

## 🚀 Descrição

É um projeto de Back-End com integração a banco de dados.
A pasta source (scr) recebe as funções controloladoras, que se dividem entre "jogos", onde está a lógica de montagem final das tabelas para a usuária; "helpers" que são controllers auxiliares
que fazem os cálculos das tabelas; "auth", onde está a função de autenticação e "response" que formata as respostas do servidor.

A pasta middleares contém um único arquivo, com a função responsável por fazer a checagem da sessão de usuário

A pasta repositories guarda as funções voltadas para o banco de dados que contém duas tabelas: jogos e users. As funções para cada tabela estão nos arquivos com nomes equivalentes.
Elas utilizam SQL.

Utils guarda as informações de conexão com o banco de dados e criptografia de senha

Os endpoints estão no arquivo "routes" e atualmente são quatro: GET para obter jogos, GET para ober tabelas, POST para autenticação e cadastro de um novo jogo; PUT para atualização de jogo e Delete para remover um jogo do banco de datos.

No arquivo .env-exemplo estão as variáveis de ambiente que podem ser configuradas: as informações de conexão com o banco de dados e o segredo do token de autenticação.

O projeto foi escrito em JavaScript e rodado em node.

> > Próximos passos: Há outras funcionalidades a implementar como a possibilidade cadastrar ou deletar novas usuárias, com níveis diferentes de permissões de acesso.

---

## 🛠 Tecnologias Utilizadas

-   Node.js
-   Nodemon
-   ESlint
-   Prettier
-   Airbnb Base
-   Koa
-   Koa-bodyparser
-   Koa-router
-   dotenv
-   bcrypt
-   jsonWebtoken
-   pg

-   SQL
-   BDeaver
-   Heroku

-   VSCode
-   Insominia

---

## 🦸 Autora

Carolina Guimarães • dev fullstack em formação
![Twitter Badge](https://img.shields.io/badge/-@carolguimari-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/carolguimari)

---

Este Readme foi elaborado a partir do template da ROCKETSEAT
