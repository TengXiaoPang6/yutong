/** note Mock.js
 * 1.生成各种模拟数据
 * 2.拦截某些请求 转向其他接口 比如3.0 转向2.0
 * 参考 http://mockjs.com
 * */
import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import remoteSearchAPI from './remoteSearch'
import transactionAPI from './transaction'
import TransferService from '@/api/TransferService'
// Mock.setup({
//   timeout: '350-600'
// })

// Mock.mock(/\/eap-auth\/userauth\/login/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/basic\/userauth\/login/, 'post', loginAPI.loginByUsername)
// Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
// Mock.mock(/\/basic\/userinfo\/getUserAccountInfo/, 'post', loginAPI.getUserAccountInfo)
// Mock.mock(/\/basic\/userinfo\/getUserAccountInfo/, 'get', loginAPI.getUserAccountInfo)

Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
// Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
// Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

//拦截某个微服务 转向3.0 可以在此实现
/*  Mock.mock(/\/predo\//, 'post', (config)=> {
  TransferService.transfer(config)
})*/

export default Mock
