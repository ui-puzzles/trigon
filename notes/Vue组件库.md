# Vue 组件库

## 知识

1. JSX 是一种 JavaScript 的语法插件，最早运用于 react 架构中，可以当作一种模板语言使用。

目前很多 Vue 的组件库都大量使用了 JSX 的语法，对于工程化搭建，要以开发者的使用习惯优先，建议支持。

2. Vue 组件库有两种引入形态：

- 完整引入：一次性引入全部组件，使用 Vue.use 以 Vue 的插件的形式引入；
- 按需引入：按需引入，导出单个组件，使用 Vue.component 注册。

组件库的形态结构需要满足下面要求：

- 默认导出 Vue 插件；
- 每个组件可以单独导出。

## 样式

1. 组件库通常需要搭建一个 CSS 子工程，用于实现自己的类型系统。

2. 2020 年一种叫做 AtomicCSS 的组件风格横空出世，代表作就是 TailwindCSS。

从组件库开发角度讲，使用 Tailwind 提供的样式系统，可以很好地降低 UI 库的开发难度。**利用原子化风格，完全就可以高效完成样式的定制，未必一定需要定制一套语义化样式系统。**

3. UnoCSS

- [Github](https://github.com/unocss/unocss)

4. 原子 CSS 的好处：**基本常用的属性定义都可以通过简单的字符串拼装完成。**

注意：**UnoCSS 默认是按需生成方式，即只生成代码中使用过的样式。** 如果在 class 属性中使用变量，是无法分析变量的取值的，也就无法动态生成样式的。

为了解决这个问题，UnoCSS 提供了安全列表选项。也就是说，把样式定义中变量的取值添加到 Safelist 中去。这样 UnoCSS 就会根据 Safelist 生成样式了。

### 图标

1. 在 UnoCSS 中引入图标，只需要加载 @unocss/preset-icons 预设就可以了

2. [iconfy](https://icones.js.org/)网站中有上万个字体图标可以选择。

## 文档

1. 使用 Vitepress 创建一个文档网站。

Vitepress 是一款基于 Vite 的静态站点生成工具。

优势是：

- 使用 Markdown 语法；
- vitepress 是基于 vite 的；
- 直接运行 Vue 的代码。

通常情况下，开发组件可以在 vitepress 调试代码。

2. 什么是 Markdown 插槽？

```md
:::slot name
:::
```

## 组件的引入

1. 目前组件的按需引入的两个方法：

- 组件单独分包 + 按需导入 + babel-plugin-component ( 自动化按需引入)；
- ESModule + Treeshaking + 自动按需 import（unplugin-vue-components 自动化配置）

### 分包与摇树

1. 传统的解决方案就是将组件库分包导出，比如将组件库分为 List、Button、Card，用到哪个加载哪个，简单粗暴，不足之处：

- 需要了解软件包内部构造 例： import "ui/xxx" or import "ui/package/xxx"；
- 需要不断手工调整组件加载预注册。

结合 babel-plugin-component 可以解决包构造问题

```js
// 全部导入
const TrigonUI = require('trigon-ui');

// 单独导入
const Button = require('trigon-ui/button');

// 转换前
const { Button } = require('trigon-ui');
// 转换后
const Button = require('trigon-ui/button');
```

3. 随着 esmodule 成为前端开发的主流，利用静态编译，在编译阶段就可以判断需要导入哪些包。

### 实现分包导出

> unplugin-vue-component 的自动导入

1. 分包导出相当于将组件库形成无数各子软件包，软件包必须满足一下要求：

- 文件名即组件名；
- 独立的 package.json 定义，包含 esm 和 umd 的入口定义；
- 每个组件必须以 Vue 插件形式进行加载；
- 每个软件包还需要有单独的 css 导出。

2. 编写分包导出脚本

默认导出方式是通过配置 vite.config.ts 的 build 属性完成。但是在分包导出的时候需要每个组件都分别配置自己的配置文件，而且需要由程序自动读取组件文件夹，根据文件夹的名字遍历打包，还需要为每个子组件包配上一个 package.json 文件。

## Icons

> [docs](https://icones.js.org/)

## 要点

1. 在软件工程中有这样一个概念：**一个完整的软件是文档和代码的组合体，** 不知道如何使用的代码是没有任何价值的。**项目文档的建设工作应该越早越好。**

2. markdown 插槽

```makefile
::: slot name
:::
```

3. 建议：用 vitepress 调试代码，这种方式非常理想：

- 方便调试；
- 同步编写文档。

4. Vue3 默认的包是不支持模板编译功能的，即不能使用 template 语法。

在 Vue3.0 中编译功能推荐在构建阶段完成，而不是放到浏览器中运行。如果希望在浏览器中的话，可以选择 ./node_modules/vue/dist/vue.global.js 这个包。

5. git 提交时，默认的 git 修改是忽略大小写的，需要改一下 git 的配置

```sh
git config core.ignorecase false
```
