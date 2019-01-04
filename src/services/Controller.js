import API from '@/services/APIService'

export default {
  index () {
    return API().get('posts')
  },
  details (lapakId) {
    return API().get(`posts/${lapakId}`)
  }
}
