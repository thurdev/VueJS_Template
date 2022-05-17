import Vue from 'vue'
import App from './App.vue'

import router from './routes/router';
import store from '@/store';

import './globals';

import '@/layouts/'

import '@/assets/styles/variables.scss'

Vue.config.productionTip = false

import { VuejsDatatableFactory } from 'vuejs-datatable';

Vue.use( VuejsDatatableFactory );

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

import http from './http/httpClass';

Vue.prototype.request = http;

import {
  Example
} from '@/components/';

Vue.component('example', Example);

Vue.prototype.$version = "1.0.0";

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
