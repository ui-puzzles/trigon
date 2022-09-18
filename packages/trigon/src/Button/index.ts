import { App } from 'vue';

import Button from './Button';

// export Button component
export { Button };

// export component as Vue plugin
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
