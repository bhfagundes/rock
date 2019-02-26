import Vue from 'vue';
import Router from 'vue-router';
import Tasks from '@/components/Tasks';
import Content from '@/components/Content';
import Setup from '@/components/Setup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup
    },
  ]
});
