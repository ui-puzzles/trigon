import { App } from 'vue';

import Button from './button';
import SFCButton from './SFCButton/index.vue';
import JSXButton from './JSXButton';

export { Button, SFCButton, JSXButton };

export default {
  install(app: App) {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
