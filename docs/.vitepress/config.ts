const sidebar = {
  '/': [
    {
      text: '快速开始',
      items: [{ text: '', linkL: '/' }],
    },
    {
      text: '通用',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button/',
        },
      ],
    },
    {
      text: '导航',
    },
    {
      text: '反馈',
    },
    {
      text: '数据录入',
    },
    {
      text: '数据展示',
    },
    {
      text: '布局',
    },
  ],
};

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
