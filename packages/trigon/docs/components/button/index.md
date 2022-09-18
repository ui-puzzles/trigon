# TButton 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 TButton 的样式。

```vue
<template>
  <div style="margin-bottom:20px;">
    <TButton color="blue">主要按钮</TButton>
    <TButton color="green">绿色按钮</TButton>
    <TButton color="gray">灰色按钮</TButton>
    <TButton color="yellow">黄色按钮</TButton>
    <TButton color="red">红色按钮</TButton>
  </div>
  <div style="margin-bottom:20px;">
    <TButton color="blue" plain>朴素按钮</TButton>
    <TButton color="green" plain>绿色按钮</TButton>
    <TButton color="gray" plain>灰色按钮</TButton>
    <TButton color="yellow" plain>黄色按钮</TButton>
    <TButton color="red" plain>红色按钮</TButton>
  </div>
  <div style="margin-bottom:20px;">
    <TButton size="small" plain>小按钮</TButton>
    <TButton size="medium" plain>中按钮</TButton>
    <TButton size="large" plain>大按钮</TButton>
  </div>
  <div style="margin-bottom:20px;">
    <TButton color="blue" round plain icon="search">搜索按钮</TButton>
    <TButton color="green" round plain icon="edit">编辑按钮</TButton>
    <TButton color="gray" round plain icon="check">成功按钮</TButton>
    <TButton color="yellow" round plain icon="message">提示按钮</TButton>
    <TButton color="red" round plain icon="delete">删除按钮</TButton>
  </div>
  <div style="margin-bottom:20px;">
    <TButton color="blue" round plain icon="search"></TButton>
    <TButton color="green" round plain icon="edit"></TButton>
    <TButton color="gray" round plain icon="check"></TButton>
    <TButton color="yellow" round plain icon="message"></TButton>
    <TButton color="red" round plain icon="delete"></TButton>
  </div>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <div class="flex flex-row">
    <TButton icon="edit" plain></TButton>
    <TButton icon="delete" plain></TButton>
    <TButton icon="share" plain></TButton>
    <TButton round plain icon="search">搜索</TButton>
  </div>
</template>
```
