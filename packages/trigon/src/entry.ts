import { App } from 'vue';
import 'uno.css';

import { Button } from './Button';

// export component independently
export { Button };

export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
