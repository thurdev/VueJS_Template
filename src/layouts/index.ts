/**
 * Here is defined all layouts of the application.
 */

import Vue from 'vue';

Vue.component(
  'blank-layout',
  () => import(/* webpackChunkName: "BlankLayout" */ './BlankLayout.vue')
);
Vue.component(
  'authenticated-layout',
  () => import(/* webpackChunkName: "AuthenticatedLayout" */ './AuthenticatedLayout.vue')
);