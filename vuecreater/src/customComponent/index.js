// global-xxx-xxx 开始的才注册全局

import Vue from 'vue';
const components = require.context('./', true, /\w+.vue$/);
components.keys().forEach((key) => {
  const comp = components(key).default || components(key);
  const compPreName = comp.name;
  if(compPreName){
    Vue.component(compPreName, comp);
  }
});