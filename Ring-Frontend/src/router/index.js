// Importing Vue-router modules
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login-Register/Login'

// Initializing vue-router
Vue.use(Router)

// Exporting routers
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
