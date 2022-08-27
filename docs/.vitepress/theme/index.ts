import Theme from 'vitepress/dist/client/theme-default';
import TrigonUI from '../../../src/entry';
// theme styles
import 'vitepress-theme-demoblock/theme/styles/index.css';
// 插件的组件，主要是demo组件
// component of plugin, main are demo components
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(TrigonUI);
    app.use('Demo', Demo);
    app.use('DemoBlock', DemoBlock);
  },
};
