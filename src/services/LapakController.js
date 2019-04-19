import API from '@/services/APIService'

export default {
  index () {
    return API().get('post')
  },
  posting (lapak) {
    return API().post('post', lapak)
  },
  show (id) {
    return API().get(`post/${id}`)
  }
}
