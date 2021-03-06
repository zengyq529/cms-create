import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';
import './common/index.scss';
import './components/index'
import './customComponent/index'
import store from './store'
Vue.use(ElementUI,{size: 'mini'});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
