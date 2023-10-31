/**
 * Here is defined all layouts of the application.
 */

import BlankLayout from './BlankLayout.vue';

const registerLayouts = (app) => {
  app.component('BlankLayout', BlankLayout);
};

export { registerLayouts };
