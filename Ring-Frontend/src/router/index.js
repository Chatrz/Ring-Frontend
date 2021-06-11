// Importing Vue-router modules
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login-Register/Login'
import Register from '@/components/Login-Register/Register'
import Dashboard from '@/components/Game/Dashboard'
import Factory from '@/components/Game/Factory'
import Land from '@/components/Game/Land'
import Market from '@/components/Game/Market'
import AdminDash from '@/components/Admin/AdminDash'

// Initializing vue-router
Vue.use(Router)

// Exporting routers
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/Factory',
      name: 'factory',
      component: Factory
    },
    {
      path: '/Land',
      name: 'land',
      component: Land
    },
    {
      path: '/Market',
      name: 'market',
      component: Market
    },
    {
      path: '/AdminDash',
      name: 'admindash',
      component: AdminDash
    }
  ]
})
