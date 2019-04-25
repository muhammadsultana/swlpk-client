import API from '@/services/APIService'

export default {
  index () {
    return API().get('users')
  },
  show (id) {
    return API().get(`user/${id}`)
  },
  update (id) {
    return API().post(`user/${id}`)
  },
  delete (id) {
    return API().delete(`user/${id}`)
  }
}
