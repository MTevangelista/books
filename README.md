<p align="center">
   <img width="300px" src="https://fontmeme.com/permalink/200925/efcf9910a8451c782f58dd27fbdf43b8.png" alt="Books web" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/VSCode-v1.43.2-blue" />
  <img src="https://img.shields.io/badge/Yarn-v1.22.4-lightblue" />
  <img src="https://img.shields.io/badge/Javascript-ECMAScript 2018-yellow" /> 
  <img src="https://img.shields.io/badge/VueJs-v2.6.10-lightgreen" />
  <img src="https://img.shields.io/badge/Vuex-v3.5.1-green" />
  <img src="https://img.shields.io/badge/VueRouter-v3.4.3-green" />
  <img src="https://img.shields.io/badge/Sweetalert2-v9.17.1-orange" />
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Frontend](#frontend)
  - [API](#api)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)

## Sobre o Projeto

A proposta do projeto é um CRUD de books. A aplicação possui as seguintes funcionalidades:

- Validar se já existe um slug cadastrado no banco de dados;
- Cadastrar livro;
- Listar livro;
- Listar livro por slug;
- Editar livro;
- Apagar livro;

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [Visual Studio Code](https://code.visualstudio.com/) - O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

- [Yarn](https://yarnpkg.com/) - Yarn é um gerenciador de pacotes que também atua como gerente de projeto. Quer você trabalhe em projetos únicos ou grandes monorepos, como um aquarista ou um usuário corporativo, temos o que você precisa.

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript) - JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. 

- [Vue.Js](https://vuejs.org/) - Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única. Ao contrário de outras estruturas monolíticas, o Vue foi projetado desde o início para ser adotado de forma incremental. A biblioteca central concentra-se apenas na camada de visualização e é fácil de selecionar e integrar com outras bibliotecas ou projetos existentes. Por outro lado, o Vue também é perfeitamente capaz de fornecer aplicativos sofisticados de página única quando usado em combinação com ferramentas modernas e bibliotecas de suporte .

- [Sweetalert2](https://sweetalert2.github.io/) - Um substituto bonito, responsivo, altamente customizável e acessível (WAI-ARIA) para as caixas pop-up do JavaScript.

## Começando

Para conseguir utilizar ou visualizar o projeto, seja através do Visual Studio Code ou outro editor de código, siga os passos abaixo:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
- É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
- É **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
books-web
├── public/
│       └── index.html
├── src/
│    ├── assets/
│    │       └── logo.png
│    │                  
│    ├── components/
│    │           ├── BookCard.vue
│    │           ├── BookDetails.vue
│    │           └── PageHeader.vue
│    ├── pages/
│    │      ├── BookForm.vue
│    │      ├── EditBook.vue
│    │      └── Home.vue
│    ├── store/
│    │      ├── modules/ 
│    │      │         └── books.js
│    │      └── index.js
│    ├── App.vue   
│    ├── main.js
│    └── router.js
├── .gitignore
├── package.json
├── babel.config.js
├── README.md
└── yarn.lock
```

### Instalação

Para instalar esse projeto, o processo é bem simples. Basta utilizar o seguinte comando no terminal:

```bash
# Clone este repositório
$ git clone https://github.com/MTevangelista/books-web.git
```

### Frontend

```bash
# Instale as depedencias
$ yarn ou npm install

# Rode a aplicação
$ yarn serve ou npm run serve

# O servidor inciará na porta: 8080 - acesse http://localhost:8080 
```

- Link do deploy do frontend: https://books-web.vercel.app/

### API

O back-end do projeto foi desenvolvido com: Typescript, Node.Js, Express.

- Link do deploy do back-end: https://books-backend-api.herokuapp.com/

- Repositório do projeto: https://github.com/MTevangelista/books-api

---

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

## Contato

👤  **Matheus Evangelista**

[![Github Badge](https://img.shields.io/badge/-Github-000?style=round-square&logo=Github&logoColor=white&link=https://github.com/MTevangelista)](https://github.com/MTevangelista)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=round-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheus01/)](https://www.linkedin.com/in/matheus01/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=round-square&logo=Gmail&logoColor=white&link=mailto:matheusevangelistadev@gmail.com)](mailto:matheusevangelistadev@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-ba164a?style=round-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/_matheusrj/?hl=pt-br)](https://www.instagram.com/_matheusrj/?hl=pt-br)
