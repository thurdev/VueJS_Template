import Vue from 'vue';
import App from './App.vue';

import router from './routes/router';
import store from '@/store';

import './globals';

import '@/layouts/';

import '@/assets/styles/theme.scss';

import '@/assets/styles/tooltip.scss';

import axios from 'axios';

import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

// Vue.prototype.$http = axios.create({
//   baseURL: process.env.VUE_APP_API_BASE_URL + '/api/',
// });

import registerComponents from '@/components/';

registerComponents(Vue);

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

Vue.prototype.$version = '1.0.0';

export default new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
