# Workout Log

## Sobre

Aplicação desenvolvida (front e back-end) com o intuito de realizar o controle de exercícios realizados por um usuário.

## Demonstração

[https://trusting-wright-c109c5.netlify.app/](https://trusting-wright-c109c5.netlify.app/)

## Documentação da API

[https://apiworkout.appsnap.com.br/api](https://apiworkout.appsnap.com.br/api)

## Tecnologias utilizadas

- [React](https://pt-br.reactjs.org/)
- [NestJS](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [TypeORM](https://typeorm.io/)
- [Styled components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Execução

_Tenha instalado em sua maquina o [Git](http://git-scm.com/) e [Node.js](http://nodejs.org/) 10.0.0 (ou superior). Caso prefira, instale o [Yarn](https://yarnpkg.com/)._

1. Fork este repositório e crie um novo branch — ou crie um novo branch caso tenha permissão.

2. Depois de obter sua cópia local, acesse cada pasta que tem na raiz da aplicação (backend, frontend e app) e instale suas dependências:

```sh
npm install
```

ou

```sh
yarn
```

3. No diretório `backend` crie os arquivos `.env.development`, com as variáveis e seus valores. Siga o exemplo `.env.example`

4. No diretório `frontend` crie o arquivo `.env`, com as variáveis e seus valores. Siga o exemplo `.env.example`

5. Acesse o diretório `backend` e execute o comando abaixo para executar as migrations do banco de dados PostgreSQL:

```sh
npm run typeorm migration:run
```

ou

```sh
yarn typeorm migration:run
```

6. Acesse o diretório `backend` e execute o comando abaixo para executar o backend:

```sh
npm run start:dev
```

ou

```sh
yarn start:dev
```

7. Acesse o diretório `frontend` e execute o comando abaixo para executar a aplicação web:

```sh
npm start
```

ou

```sh
yarn start
```

## Testes

_Todos os arquivos de testes terminam com `.spec.tsx` ou `.spec.ts`_

Acesse o diretório `backend` ou `frontend` e use comando abaixo para executar os testes:

```sh
npm test
```

ou

```sh
npm test:cov
```

ou

```sh
yarn test
```

ou

```sh
yarn test:cov
```

## Licença

[MIT](https://opensource.org/licenses/MIT)
