/*
 * @Author: your name
 * @Date: 2020-07-07 18:36:45
 * @LastEditTime: 2020-07-20 08:28:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecmsf:\github开源项目\cms-create\vuecreater\src\router\index.js
 */ 
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: '/common-manage/module' 
    },
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
      component: () => import('@/pages/module-edit/index.vue'),
    },
  ],
});
