import API from '@/services/APIService'

export default {
  register (credentials) {
    return API().post('register', credentials)
  },
  login (credentials) {
    return API().post('login', credentials)
  },
  update (id) {
    return API().post(`user/${id}`)
  }
}
