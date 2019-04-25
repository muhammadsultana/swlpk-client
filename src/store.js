import Vue from 'vue'
import Vuex from 'vuex'
import Controller from './services/Controller'
// import LapakController from './services/LapakController'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    submit_success (state, lapak) {
      state.status = 'success'
      state.lapak = lapak
    },
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, { token, user }) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state, token) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    submit_lapak ({ commit }, lapak) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8081/post', { lapak })
          .then(resp => {
            const lapak = resp.data
            console.log(resp)
            console.log(lapak)
            commit('submit_success', lapak)
            resolve(resp)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        Controller.login(user)
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        Controller.register(user)
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isUserLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user,
    token: state => state.token
  }
})
