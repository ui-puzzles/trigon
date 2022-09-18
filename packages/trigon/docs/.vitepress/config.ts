const sidebar = [
  {
    text: '快速开始',
    items: [{ text: '', linkL: '/' }],
  },
  {
    text: '通用',
    items: [
      {
        text: 'Button 按钮',
        link: '/components/button/',
      },
    ],
  },
  {
    text: '导航',
    items: [{ text: '', linkL: '/' }],
  },
  {
    text: '反馈',
    items: [{ text: '', linkL: '/' }],
  },
  {
    text: '数据录入',
    items: [{ text: '', linkL: '/' }],
  },
  {
    text: '数据展示',
    items: [{ text: '', linkL: '/' }],
  },
  {
    text: '布局',
    items: [{ text: '', linkL: '/' }],
  },
];

const config = {
  title: 'Trigon-UI',
  lang: 'zh-CN',
  description: '一套基于 Vue3.x 高可用的 UI 组件库',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
