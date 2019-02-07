import Vue from 'vue'
// import Store from './store'
import Router from 'vue-router'
import Home from '@/Homepage'
import Admin from './views/Admin.vue'
import Login from './views/Login.vue'
import Detail from './views/DetailLapak.vue'
import SearchResult from './components/SearchResult.vue'
import TambahLapak from './components/TambahLapak.vue'
import MyAccount from './views/MyAccount.vue'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (Store.getters.isUserLoggedIn) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// })

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/detail/:lapakId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/tambah-lapak',
      name: 'TambahLapak',
      component: TambahLapak
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: MyAccount,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
