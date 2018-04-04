import BaseModule from './BaseModule'
const predoAPI = require('./v2/predo').api
class DiagnosisService extends BaseModule {
  // 若是不对父类的构造函数做扩展，constructor可以省略
  fetchList(query) {
    return this.request({ url: '/article/list' }, query)
  }
  fetchArticle() {
    return this.request({ url: '/article/detail' })
  }
  getWbReminderList() {
    return this.request(predoAPI.getWbReminderList)
  }
  userSearch(name) {
    return this.request({ url: '/search/user' }, name)
  }
}
export default new DiagnosisService()
