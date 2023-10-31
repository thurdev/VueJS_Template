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

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/HomeView.vue'),
    meta: {
      layout: 'blank-layout',
    },
  },
];
