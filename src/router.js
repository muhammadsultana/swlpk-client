import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Homepage'
import Admin from './views/Admin.vue'
import Login from './views/Login.vue'
import Detail from './views/DetailLapak.vue'
import SearchResult from './components/SearchResult.vue'
import TambahLapak from './components/TambahLapak.vue'
import MyAccount from './views/MyAccount.vue'
import EditProfile from './views/EditProfile.vue'
import ListLapak from './views/ListLapak.vue'
import RegisterUser from './views/RegisterUser.vue'
import ListUser from './views/ListUser.vue'
import ListLapakEdit from './views/ListLapakEdit.vue'

Vue.use(Router)

// Router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (Store.getters.isLoggedIn) {
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
      component: TambahLapak,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: MyAccount,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myaccount/:userid',
      name: 'editprofile',
      component: EditProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/list-user',
      name: 'listuser',
      component: ListUser,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'registeruser',
      component: RegisterUser
    },
    {
      path: '/list-lapak',
      name: 'listlapak',
      component: ListLapak,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/lapak-edit/:lapakId',
      name: 'editlapak',
      component: ListLapakEdit,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
