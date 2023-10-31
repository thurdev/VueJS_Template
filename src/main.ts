import { createApp } from 'vue';
import router from './routes/router';
import store from '@/store';
import { registerLayouts } from '@/layouts/';
import App from './App.vue';
import './globals';
import '@/assets/styles/theme.scss';
import '@/assets/styles/tooltip.scss';

const app = createApp(App);
registerLayouts(app);
app.use(router).use(store).mount('#app');
