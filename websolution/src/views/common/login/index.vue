<template>
  <div class="login-container">
    <div class="login1-bg-image">
      <div class="login1-container">
        <div class="banner-logo" style="color:whitesmoke">
          <img :src="loginLogoUrl">
          {{$t('login.siteTitle')}}
        </div>
        <div class="login1-main">
          <div class="login1-main-wrap">
            <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
              <div class="title-container">
                <h3 class="title">{{$t('login.title')}}</h3>
                <lang-select class="set-language"></lang-select>
              </div>
              <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                  <svg-icon icon-class="user" />
                </span>
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="off" :placeholder="$t('login.username')" />
              </el-form-item>
              <el-form-item prop="password">
                <span class="svg-container">
                  <svg-icon icon-class="password" />
                </span>
                <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="off" :placeholder="$t('login.password')"  />
                <span class="show-pwd" @click="showPwd">
                  <svg-icon icon-class="eye" />
                </span>
              </el-form-item>
              <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
              <el-button class="thirdparty-button" type="primary" @click="showDialog=true">{{$t('login.thirdparty')}}</el-button>
            </el-form>
          </div>
        </div>

        <div class="login1-left-bg">
          <div class="login1-data-mountain"></div>
        </div>

        <div class="login-footer">
          <img class="more-value-img" :src="moreValueUrl"/>
          <p>
            <span>Powered by Vehicle+ V3.0.0 ，2014-2019{{$t('footer.copyright')}} </span>
          </p>
          <p>
            <a target="_blank" href="http://www.miibeian.gov.cn"
               style="display:inline-block;text-decoration:none;color:#fff;">
              {{$t('footer.copyrightBeiAn')}}</a> &nbsp;&nbsp;|&nbsp;&nbsp;
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41012202000144"
               style="display:inline-block;text-decoration:none;color:#fff;">
              <img :src="copyRightUrl"/> {{$t('footer.copyrightSafe')}}
            </a>
          </p>
        </div>
      </div>
    </div>
    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog" append-to-body>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import SocialSign from './socialsignin'
import loginLogoUrl from '@/assets/login_images/fsbc-login-logo.png'
import copyRightUrl from '@/assets/login_images/copy-right-icon.png'
import moreValueUrl from '@/assets/login_images/login1-more-value.png'
import Cookies from 'js-cookie'
export default {
  components: { LangSelect, SocialSign },
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        // callback(new Error('Please enter the correct user name'))
        callback(new Error(this.$t('login.usernameTip')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(this.$t('login.passwordTip')))
      } else {
        callback()
      }
    }
    return {
      loginLogoUrl: loginLogoUrl,
      moreValueUrl: moreValueUrl,
      copyRightUrl: copyRightUrl,
      loginForm: {
        // TODO 登录页面交互定稿后修改按设置保存用户名
        username: Cookies.get('username') || 'xnyshidd',
        password: Cookies.get('password') || 'xny123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            Cookies.set('username', this.loginForm.username)
            // FIXME  应该保存MD5值，登录service做相应修改
            Cookies.set('password', this.loginForm.password)
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .login-container{
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #eee;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #4073B1 inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
    .el-button{
      height: 40px;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #0E3D7E;
  .login1-bg-image {
    height: 100%;
  }
  .banner-logo {
    position: relative;
    padding-bottom: 40px;
    color: #5C95E6;
    font-size: 32px;
    > img {
      margin-right: 10px;
      vertical-align: -8px;
    }
  }
  .login1-container {
    width: 1200px;
    margin: 0 auto;
  }
  .login1-left-bg {
    position: relative;
    width: 820px;
    height: 400px;
    background: url('../../../assets/login_images/fsbc-login-bg.png') no-repeat 0 0;
    .login1-data-mountain {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url('../../../assets/login_images/login-background.png') no-repeat bottom center;
    }
  }
  .login1-main {
    position: relative;
    float: right;
    width: 350px;
    height: 400px;
    background-color: #4073B1;
    border-radius: 4px;
    .login1-main-wrap {
      padding: 30px;
    }
    .login-title {
      color: #84ffe6;
      font-size: 21px;
    }
  }
  .login-footer {
    margin-top: 50px;
    text-align: center;
    color: #999;
    font-size: 12px;
    p {
      margin-top: 10px;
    }
  }
  .more-value-img {
    width: 94px;
    height: 44px;
  }
  .login1-bg-image {
    padding-top: 200px;
  }
  .login-form{
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 21px;
        font-weight: 400;
        color: #84ffe6;
        margin: 0px auto 32px auto;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 20px;
    }
  }
  @media screen and (max-height: 800px) {
    .login1-bg-image {
      padding-top: 70px;
    }
  }
  @media screen and (max-height: 900px) and (min-height: 800px) {
    .login1-bg-image {
      padding-top: 150px;
    }
  }

  @media screen and (max-height: 1200px) and (min-height: 900px) {
    .login1-bg-image {
      padding-top: 200px;
    }
  }
  @media screen and (max-height: 1500px) and (min-height: 1200px) {
    .login1-bg-image {
      padding-top: 290px;
    }
  }
  @media screen and (min-height: 1500px) {
    .login1-bg-image {
      padding-top: 360px;
    }
  }
}
</style>
