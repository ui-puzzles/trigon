// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-browser';

import TButton from './button/Button';
// import SFCButton from './SFCButton/index.vue';
// import JSXButton from './JSXButton';
import TrigonUI from './entry';

createApp({
  template: `
    <div>
      <TButton color="blue" round plain icon="search"></TButton>
      <TButton color="indigo">普通按钮</TButton>
      <TButton color="purple">普通按钮</TButton>
      <TButton color="pink">普通按钮</TButton>
    </div>
  `,
})
  .use(TrigonUI)
  .mount('#app');
