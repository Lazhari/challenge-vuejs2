import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'

import App from './components/app/index.vue';

Vue.use(ElementUI, { locale })
Vue.use(VueRouter);

import Forms from './components/forms/index.vue';
import Home from './components/home/index.vue';
import EventsList from './components/events-list/index.vue'
const routes = [
    { path: '/forms', component: Forms },
    { path: '/', component: Home },
    { path: '/events-list', component: EventsList }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
