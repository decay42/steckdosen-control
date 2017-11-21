import Api from '@/services/Api'

export default {
  pswitch (params) {
    return Api().post('switch', params)
  }
}
