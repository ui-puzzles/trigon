<div align="center">
  <a href="https://ui-puzzles.github.io/rect/?path=/docs/welcome--page" target="_blank">
    <img alt="ui-puzzle logo" width="200" src="https://static-images-1305792369.cos.ap-shanghai.myqcloud.com/puzzle-logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>@ui-puzzles/trigon</h1>
</div>

<div align="center">

基于 Vue3 的简单的组件 UI 库。

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

## 特性

- 基于 Vue3 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于 Action CI 实现持续集成与交付
- 组件采用 TypeScript 编写的，对类型编程友好
- 开箱即用的高质量组件, 可以覆盖绝大部份的业务场景

## 安装

[npm package](https://www.npmjs.com/package/@ui-puzzles/trigon)

```sh
// npm
npm i @ui-puzzles/trigon

// yarn
yarn add @ui-puzzles/trigon
```

## 使用

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

## 文档

查看<a href="https://trigon.vercel.app" target="_blank">文档</a>以了解更多内容。

## 浏览器兼容性

| IE / Edge | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| --------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Edge      | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## License

[MIT 协议](./LICENSE)
