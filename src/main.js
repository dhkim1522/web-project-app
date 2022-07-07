import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes/routes'
import store from './store/store';

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

import './registerServiceWorker'

// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  mode: 'history', // URL '#' 제거
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
