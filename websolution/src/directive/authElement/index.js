/** note v-auth
 *  V+ 2.0 bc-auth-element 的Vue指令实现
 *  用于验证用户是否有权限看到某个元素
 *  用法
 *  <el-button v-auth='eap.user.add'>{{$t('route.addUser')}}</el-button>
 */
import Auth from './auth'
const install = function(Vue) {
  Vue.directive('auth', Auth)
}

if (window.Vue) {
  window.Auth = Auth
  Vue.use(install); // eslint-disable-line
}
Auth.install = install
export default Auth
