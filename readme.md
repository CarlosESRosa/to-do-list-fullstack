# Boas-vindas ao repositório do projeto ToDoList Fullstack!

## Introdução

O projeto ToDoList Fullstack foi um projeto desenvolvido na escola Trybe, o intuito dele foi criar uma lista de tarefas para ajudar na organização de uma empresa fictícia, ele é um projeto Fullstack onde o Frontend foi desenvolvido utilizando principalmente React.js e o Backend utilizando Node, Express e MySQL.

## Como rodar
    OBS: O projeto possui um docker-compose porém não consegui validar sua funcionalidade, então ensinarei a forma de rodar o projeto sem utilizá-lo.

    Passo 1: Abra um terminal na pasta backend e rode o comando `npm install` para instalar as dependências do projeto.

    Passo 2: Abra um terminal na pasta frontend e rode o comando `npm install` para instalar as dependências do projeto.

    Passo 3: Estabeleça uma conexão MySQL.

    Passo 4: Crie um arquivo .env com as seguintes chaves e preencha-as conforme as informações da sua conexão MySQL.
      Exemplo:
        MYSQL_HOST=yourHost
        MYSQL_USER=yourUser
        MYSQL_PASSWORD=yourPassword
        MYSQL_DATABASE=ToDoList

    Passo 5: Crie o banco de dados dentro da sua conexão MySQl a partir do arquivo ./backend/ToDoList.sql.

    Passo 6: Abra um terminal na pasta backend e rode o comando `npm run dev`.

    Passo 7: Abra um terminal na pasta frontend e rode o comando `npm start`.


## Considerações finais

Esse foi meu primeiro projeto Fullstack, onde criei um banco de dados, uma API e consumi minha própria API no Frontend. Ao longo do desenvolvimento encontrei uma série de dificuldades, principalmente sobre como consumir minha própria API e sobre como instruir outros desenvolvedores que viessem a acessar meu projeto, porém após certo tempo encontrei soluções para essas dificuldades.
