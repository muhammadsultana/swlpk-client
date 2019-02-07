import API from '@/services/APIService'

export default {
  index () {
    return API().get('posts')
  },
  posting (lapak) {
    return API().post('post', lapak)
  },
  show (lapakId) {
    return API().get(`posts/${lapakId}`)
  }
}
