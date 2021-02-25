import Vue from 'vue'
import VueRouter from 'vue-router'
import Components from './components';


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Components.Index
        }
    ],
    mode: 'history'
});

export default router;