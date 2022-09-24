<div align="center">
  <a href="https://ui-puzzles.github.io/rect/?path=/docs/welcome--page" target="_blank">
    <img alt="ui-puzzle logo" width="200" src="https://static-images-1305792369.cos.ap-shanghai.myqcloud.com/puzzle-logo.svg"/>
  </a>

[![CI](https://github.com/ui-puzzles/trigon/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/ui-puzzles/trigon/actions/workflows/main.yml)
![MIT](https://img.shields.io/github/license/ui-puzzles/trigon?color=red)

</div>

<div align="center">
  <h1>@ui-puzzles/trigon</h1>
</div>

<div align="center">

A simple set of components based on Vue3.

</div>

<div align="center">

English | [简体中文](./README-zh_CN.md)

</div>

## Features

- Based on Vue3 framework.
- Supporting JSX and SFC.
- Jest and Vue3 plugins for unit testing.
- Eslint + Prettier + Husky for syntax checking.
- Building with Rollup.
- Vitepress and Vercel for building document site.
- Based on Action CI for CI/CD.

## Install

[npm package](https://www.npmjs.com/package/@ui-puzzles/trigon)

```sh
// npm
npm i @ui-puzzles/trigon

// yarn
yarn add @ui-puzzles/trigon
```

## Usage

```ts
import Vue from 'vue';
import TrigonUI from '@ui-puzzles/trigon';

const App = {
  template: `
    <TButton />
  `,
};

createApp(App).use(TrigonUI).mount('#app');
```

## Browser Support

| IE / Edge | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| --------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Edge      | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Join Discussion Group

## License

This project is [MIT licensed](./LICENSE)
