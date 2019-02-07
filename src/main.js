import Vue from 'vue'
import User from './User.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import { sync } from 'vuex-router-sync'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/dist/css/swiper.css'

Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(User)
}).$mount('#app')
