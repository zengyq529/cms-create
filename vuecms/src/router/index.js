import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', redirect: '/server/index' },
    {
      path: '/login',
      component: () => import('@/pages/login/index.vue'),
    },
    {
      path: '/server',
      component: () => import('@/pages/index.vue'),
      // beforeEnter: (to, from, next) => {
      //   next()
      // },
      children: [
        {
          path: 'index',
          component: () => import('@/pages/server-index.vue'),
        },
        {
          path: 'page/:type',
          component: () => import('@/pages/manage-pages/index.vue'),
        },
      ]
    },
  ],
});
