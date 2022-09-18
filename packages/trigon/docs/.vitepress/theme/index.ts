import Theme from 'vitepress/theme';
import 'vitepress-theme-demoblock/theme/styles/index.css';
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';

import TrigonUI from '../../../src/entry';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(TrigonUI);
    app.component('Demo', Demo);
    app.component('DemoBlock', DemoBlock);
  },
};
