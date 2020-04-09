<h1 align="center">
  Semana Omnistack 11
</h1>

<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#built-with">Built With</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#deployment">Deployment</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<br>

# Project

Projeto Be The Hero foi desenvolvido durante a Semana Omnistack 11 da Rocketseat (Março/2020).

O BeTheHero é uma forma de conectar pessoas a ONGs que estejam precisando de doações em dinheiro. Para isso as ONGs publicam incidentes em um portal web, e o público utiliza um aplicativo mobile para exibir as ONGs e entrar em contato com elas. O contato pode ser feito através de e-mail ou Whatsapp.

<br>

## Frontend

![Frontend](./assets/frontend/frontend.gif?v=4&s=100)

<br>

## Mobile

<!---<img src="./assets/mobile/mobile.gif" height="500"> --->
 ![Frontend](./assets/mobile/mobile.gif) 

<br>

# Built With

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Jest](https://www.npmjs.com/package/jest)
- [Insomnia](https://insomnia.rest/download/)

<br>

# Installation

## Requirements

- Node
- Yarn
- Expo-cli

  ```
  yarn global add install expo-cli
  ```

<br>

## Installation Steps

- Clone this repository

  ```
  git clone https://github.com/renanxr3/semanaomnistack11
  ```

- Install Backend dependencies

  ```
  cd omnistack10-backend
  yarn install
  ```

- Create database

  ```
  yarn knex migrate:latest
  ```

- Install frontend dependencies

  ```
  cd omnistack10-frontend
  yarn install
  ```

- Install mobile dependencies

  ```
  cd omnistack10-mobile
  yarn install
  ```

<br>

# Deployment

## Backend

```
cd omnistack11-backend
yarn dev
```

## Frontend

```
cd omnistack11-frontend
yarn start
```

## Mobile

```
cd omnistack11-mobile
yarn start
```

<br/>

# Authors

- [Renan Santos](https://github.com/renanxr3)

<br/>

# License

This project is licensed under the [MIT License](LICENSE.md).

<br/>

# Acknowledgments

- [Rocketseat](https://rocketseat.com.br/)
- [Semana Omnistack 10 ](https://rocketseat.com.br/week-11/aulas)
