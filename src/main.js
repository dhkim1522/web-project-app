import Vue from 'vue';
import App from './App.vue';
import router from './routes/routes';
import store from './store/store';

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'
import HighchartsVue from 'highcharts-vue'

import './registerServiceWorker'

// plugin setup
Vue.use(LightBootstrap)
Vue.use(HighchartsVue)

//////////////////////////////////
//  Vue 전역 객체 생성             //
//  사용 모듈 : router, store     //
//////////////////////////////////
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
///////////////////////////////////
