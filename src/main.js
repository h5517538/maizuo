// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import Axios from './api/axios'
import '../static/css/reset.css';

Vue.config.productionTip = false;
Vue.use(Axios);
Vue.filter('abc',function (i) {
  let str = String.fromCharCode(i + 64);
  return str;
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});



