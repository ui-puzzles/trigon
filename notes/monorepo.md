# monorepo

1. 组件库一般都会有周边产品，如：admin，template，cli 工具等。周边产品都是关联的多个项目，更准确的说法是多个软件包。

**建议使用 monorepo 方式组织代码，可以高效的在多个项目之间同时交替开发，同时发布，保持版本之间没有冲突。**

2. 传统 Mutirepo(MutiPackage-MutiRepo) 方式的不足

Mutirepo，即一个软件包一个 repo 仓库，目前是前端多项目场景下的常见管理模式。

**这种方式的最大问题是在多个项目间切换开发会非常不方便。**

优化的方案，是使用 npm link 方式把几个项目的本地目录链接起来。但是这种方法依然有弊端，比如在团队开发的时候，你必须随时同步所有的代码仓库。另外如果你的代码不希望公开到 Npm 上，你还需要建立私有的 Npm 仓库。

## monorepo 的优势

1. Monorepo 其实就是将多个项目 （pacakage 软件包）放到同一个仓库 （Repo） 中进行管理。这种代码组织形式可以更好地管理多 Package 项目。主要的优点有：

- 可见性(Visibility)：每个开发者都可以方便得查看多个包的代码，方便修改跨 package 的 Bug;
- 更简单的包管理方式(Simpler dependency management)：由于共享依赖简单，因此所有模块都托管在同一个存储库中，因此不需要私有包管理器；
- 唯一依赖源(Single Source of Truth)：每个依赖只有一个版本，可以防止版本冲突，没有依赖地狱；
- 原子提交：方便大规模重构，开发者可以一次提交多个包(package)。

2. **越复杂的场景，上面的优势会更加明显。**

## 方案选型

1. 目前 JS 中常见的 Monorepo 的方案：

- Lerna;
- Pnpm workspace;

2. lernaJS 是由 Babel 团队编写的多包管理工具。因为 Babel 体系的规模庞大后有很多子包需要管理，放在多个仓库管理起来比较困难。

3. 2021 年底 Pnpm 横空出世，闪电般的性能一下子征服了所有前端开发者。更重要的是它还附带 monorepo 方案。 目前 vue3 由 lerna 改为了 pnpm workspace.

## 实现

1. 在根目录重新初始化一个 npm，在软件包中禁用 npm 和 yarn。这一步的目的是允许项目使用 pnpm 进行模块管理。不然的话会出现不兼容问题。

- 添加 preinstall npm hook 钩子，这个钩子会在安装模块前触发，检查该代码是否是使用 pnpm 运行。如果不是的话会推出并提示错误；

实现细节：

```json
{
  "scripts": {
  "preinstall": "node ./scripts/preinstall.js"
}
}

// or
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
}
}
```

```js
'use strict';

if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log();
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager for scripts to work properly.\u001b[39m\n `
  );

  process.exit(1);
}
```

2. 初始化工作空间

在 monorepo 项目中，每个软件包都会存放在工作空间，方便管理。

首先需要创建一个 pnpm-workspace.yaml，这个文件用于声明所有软件包全部存放在 packages 目录之中。其实目前 monorepo 风格的项目也普遍使用 packages 作为默认软件包目录位置。

3. 安装依赖

多个软件包依赖一个 npm 包，可以将依赖安装到 workspace 中：

```sh
# install into workspace
pnpm i vite -w

# install into sub package
pnpm i vue -r --filter [package-name]
```
