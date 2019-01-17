import API from '@/services/APIService'

export default {
  post (lapak) {
    return API().post('post', lapak)
  },
  show (lapakId) {
    return API().get(`post/${lapakId}`)
  }
}
