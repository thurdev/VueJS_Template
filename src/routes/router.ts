/**
 * Here contains the routes of the application.
 * And is imported in the main.js file.
 */

import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
