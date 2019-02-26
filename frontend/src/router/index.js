import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Setup from '@/components/Setup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/teste',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Index',
      component: Home
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    },
  ]
});
