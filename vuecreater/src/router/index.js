import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/common-manage/:type',
      component: () => import('@/pages/common-list.vue'),
    },
    {
      path: '/component/:id',
      component: () => import('@/pages/component-edit.vue'),
    },
    {
      path: '/module/:id',
      component: () => import('@/pages/module-edit.vue'),
    },
  ],
});
