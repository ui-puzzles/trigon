import { App } from 'vue';

import TButton from './button';
import SFCButton from './SFCButton/index.vue';
import JSXButton from './JSXButton';

export { TButton, SFCButton, JSXButton };

export default {
  install(app: App) {
    app.component(TButton.name, TButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
