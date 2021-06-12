// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Axios from 'axios'
import store from './store'

// Import BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Set the http prototype to Axios module
Vue.prototype.$http = Axios

Vue.config.productionTip = false

// Initialize Vue-Router
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // Vue-router in app importing
  store, // Vuex store in app importing
  components: { App },
  template: '<App/>'
})
