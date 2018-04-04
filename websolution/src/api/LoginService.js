import BaseModule from './BaseModule'
import MD5 from '@/utils/md5'
const basicAPI = require('./v2/basic').api
class LoginService extends BaseModule {
  getAppInfo(appid) {
    // TODO:添加getAppInfo的逻辑
  }
  loginByUsername(username, password) {
    const data = {
      url: process.env.BASE_API,
      userName: username,
      pwd: MD5(password)
    }
    return this.request(basicAPI.login, data)
    // V+3.0入口
    /* return this.request({url:'/eap-auth/userauth/login', method: 'post', headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }}, data)*/
  }
  logout() {
    return this.request(basicAPI.logout)
  }
  getUserAccountInfo(token) {
    return this.request(basicAPI.getCurrentUserInfo)
  }
  getUserAuths(token) {
    return this.request(basicAPI.getUserAuths)
  }
}
export default new LoginService()
