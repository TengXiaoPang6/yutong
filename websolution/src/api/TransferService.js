/** note transferService
 *  用于v+ 3.0 向2.0接口获取数据，2.0开发阶段无需使用
 * */
import BaseModule from './BaseModule'
class TransferService extends BaseModule {
  transfer(config) {
    //x-www-form-urlencoded
    return this.request({ url: '/eap-auth/v2adapter/transfer', method: 'post',headers: {
        'Content-Type': 'application/json'
      }}, {
      url: config.url,
      method: config.type,
      data: config.body
    })
  }

}

export default new TransferService()
