import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/component',
      component: () => import('@/pages/component-manage.vue'),
    },
    {
      path: '/component/:id',
      component: () => import('@/pages/component-edit.vue'),
    },
    {
      path: '/module',
      component: () => import('@/pages/component-manage.vue'),
    },
    {
      path: '/module/:id',
      component: () => import('@/pages/component-edit.vue'),
    },
  ],
});
