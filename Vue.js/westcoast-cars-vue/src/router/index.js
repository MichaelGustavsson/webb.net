import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Sales from '../components/Sales.vue';
import Leasing from '../components/Leasing.vue';
import Vehicles from '../components/Vehicles.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/sale',
    name: 'Sales',
    component: Sales,
  },
  {
    path: '/leasing',
    name: 'Leasing',
    component: Leasing,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Vehicles,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
