import API from '@/services/APIService'

export default {
  index () {
    return API().get('lokasi')
  }
}
