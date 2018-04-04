/** note: BaseModule
 *  利用面向对象继承特性，将公用代码抽到父类中
 *  使模块接口封装得到简化，
 *  若接口的公共部分有变动，
 *  在BaseModule中维护即可
 **/
import axios from 'axios'
import qs from 'query-string'
// 单独引入消息组件 提示错误信息
import { Message } from 'element-ui'
// 用户登录获取的token 保存在cookie中，方便将来做SSO 单点登录
import { getToken, removeToken } from '@/utils/auth'

class BaseModule {
  constructor() {
    // 构造函数沿用V+2.0命名和使用习惯
    this.$http = axios.create({
      baseURL: process.env.BASE_API, // api的base_url
      timeout: 60000 // request timeout in ms
    })
    this.dataMethodDefaults = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // request interceptor 发送请求前的拦截器
    this.$http.interceptors.request.use(config => {
      // Do something before request is sent
      if (getToken()) {
        config.headers['AuthToken'] = getToken() // 让每个请求携带AuthToken--
      }
      if (config.method === 'get') { // 延续2.0的逻辑，为每个get请求加上时间戳
        config.params = {
          _dc: new Date().getTime(),
          ...config.params
        }
      }
      if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.transformRequest = [function(data) {
          return qs.stringify(data)
        }]
      }
      return config
    }, error => {
      // Do something with request error
      console.log(error) // for debug
      Promise.reject(error)
    })

    // respone interceptor 收到响应时的拦截器
    this.$http.interceptors.response.use(
      response => {
        /**
         * 下面的注释为通过response自定义code来标示请求状态
         * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中 2.0的这部分实现略复杂稍后再实现兼容
         */
        const res = response.data
        if (res.code !== 1) {
          if (res.msg) {
            Message({
              message: res.msg,
              type: 'error',
              duration: 5 * 1000
            })
          }
          // 会话无效:非法的AuthToken或AuthToken过期;
          if (res.code === 0) {
            removeToken()
            location.reload()// 为了重新实例化vue-router对象 避免bug
          }
          return Promise.reject('error')
        } else {
          return res
        }
      },
      error => {
        console.log('err' + error)// for debug
        Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(error)
      })
  }
  /** note: 兼容2.0
   * config: {} url,method,content-type
   * data: {}
   **/
  request(config, data = undefined) {
    if (config.method && config.method.toLowerCase() === 'post') {
      return this.post(config.url, data, config)
    } else {
      return this.$http({
        url: config.url,
        method: 'get',
        params: data
      })
    }
  }
  // 以下方法用于3.0 REST API 调用
  get(url, config = {}) {
    return this.$http.get(url, config)
  }

  post(url, data = undefined, config = {}) {
    return this.$http.post(url, data, { ...this.dataMethodDefaults, ...config })
  }

  put(url, data = undefined, config = {}) {
    return this.$http.put(url, data, { ...this.dataMethodDefaults, ...config })
  }

  delete(url, config = {}) {
    return this.$http.delete(url, config)
  }
}
// BaseModule 只会用于继承，因此不需要new
export default BaseModule
