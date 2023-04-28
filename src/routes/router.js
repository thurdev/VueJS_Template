/**
 * Here contains the routes of the application.
 * And is imported in the main.js file.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
