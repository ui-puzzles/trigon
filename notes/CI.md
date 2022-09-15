# 持续集成 - CI

> 开箱即用是一个开源产品最基本的要求。

1. 开发过程中，有很多因素会导致版本库中的代码，如：

- 依赖库的升级；
- 开发环境不同；
- 强制提交代码跳过单元测试检查。

2. 为了完全起见，需要一种独立的验证机制，去除开发环境和开发者的影响。这种机制需要在每次提交后触发，并且使用一个全新的系统运行，并执行需要的验证动作。如果验证通过会直接颁发徽章，并且实时反映到 Github 的 README 上面。

3. 持续集成被认为是一种优秀的开发实践，可以在代码变更时及时反映代码的状态。

持续集成需要服务器的支持，可以考虑通过 gitlab ci 或者 jenkins 自己搭建持续集成服务器，更好的办法是使用第三方的持续集成服务，目前比较流行的有：

- Travis CI；
- CircleCI；
- Github Action。

对开源项目，完全可以使用第三方持续集成服务。

## Github Action

1. Github Action 是一个集成服务，你可以认为它是一台远程运行的服务器。

2. GA 的配置文件需要放在项目根目录下 .github/workflows 中:

- 每一个配置文件是一个工作流 workflow；
- 一个工作流可以配置多个自动化(Job);

3. 组件库的持续集成分为两个任务(Job):

- 一个任务是运行单元测试进行回归校验；
- 一个是自动运行 lint 脚本检验代码风格。

### 创建 Job

1. Job 是一个运行任务。

2. 设定 runs-on 属性，指定运行环境(Linux or Mac)，可以理解为该任务虚拟机的环境。

Github 可用的虚拟机有：

- windows-(xxx version)；
- ubuntu-(xxx version)；
- Macos-(xxx version)。

3. 每一个 Job 包含多个 step，每一个 step 是串行执行的。

4. 举个例子，在一个空的操作系统上，进行单元测试，需要完成的任务：

- 安装 git；
- 检出 checkout 项目代码；
- 安装 pnpm；
- 使用 pnpm 安装依赖；
- 运行 scripts；

5. 编写 step 可以使用下面三个方式：

- run：执行 shell 命令行命令；
- env：设置环境变量；
- uses：运行第三方 Action 脚本。

6. uses 可以用于 Action。Action 可以认为是 Github 提前写好的一些常用的脚本，当然这些脚本也支持自己定义。可以在 [Marketplace](https://github.com/marketplace?type=actions&query=actions) 查找：
