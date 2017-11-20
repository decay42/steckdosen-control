import Api from '@/services/Api'
import config from '@/config'

export default {
  on () {
    Api().get(`switch/${config.systemCode}/${config.unitCode}/1`)
  },
  off () {
    Api().get(`switch/${config.systemCode}/${config.unitCode}/0`)
  }
}
