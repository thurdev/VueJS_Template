/**
 * Here is defined all routes of the application with their respective layouts & views.
 * And exported to be used at the router.js file.
 * Example:
 *  {
 *     path: '/',
 *     name: 'home',
 *     component: Views.Home,
 *     meta: {
 *        layout: 'blank-layout'
 *     }
 *  }
 */

import Views from '@/views/';

export default [
  {
    path: '/',
    component: Views.ExampleView,
    meta: {
      layout: 'blank-layout',
    },
  },
];
