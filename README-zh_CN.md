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

### 友好

UI 开发过程中，首先考虑的是如何让组件更人性化，让用户用的舒服。

### 美观

在保证组件性能的情况下，持续追求极致的美观。

### 效率

在代码设计过程中，我们一直在权衡利弊，以求在组件复用，业务使用边界以及代码使用规范之间达到最佳平衡。

### 易扩展

考虑到业务情况差异，框架中的代码均有作用域限制，易被覆盖。

### 全面

开箱即用的高质量组件, 可以覆盖绝大部份的业务场景。

### 支持 TypeScript

所有组件都是采用 TypeScript 编写的，对类型编程友好。

## 安装

[npm package](https://www.npmjs.com/package/@ui-puzzles/rect)

```sh
// npm
npm i @ui-puzzles/rect

// yarn
yarn add @ui-puzzles/rect
```

## 使用

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ui-puzzles/rect';
import '@ui-puzzles/rect/dist/index.css';

function App() {
  return <Button btnType="primary" label="Hello World" />;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## 文档

查看<a href="https://ui-puzzles.github.io/rect/?path=/docs/welcome--page" target="_blank">文档</a>以了解更多内容。

## 浏览器兼容性

| IE / Edge | Firefox         | Chrome          | Safari          | Opera           | Electron        |
| --------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Edge      | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## License

[MIT 协议](./LICENSE)
