// Importing Vue-router modules
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login-Register/Login'
import Register from '@/components/Login-Register/Register'
import Dashboard from '@/components/Game/Dashboard'
import AdminDash from '@/components/Admin/AdminDash'

// Initializing vue-router
Vue.use(Router)

// Creating instance
let router = new Router({
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
      path: '/AdminDash',
      name: 'admindash',
      component: AdminDash
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name == 'admindash')
    console.log("> Admin access");
  next();
})

export default router;