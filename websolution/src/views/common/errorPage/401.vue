<template>
  <div class="jw-login" style="padding-top: 101px;width: 100%;height: 100%;background-color: #152A4C; padding-top: 50px;">
    <div style="width:1200px;margin:0 auto;margin-bottom:20px;overflow:hidden">
      <div style="float:left"><img :src="loginLogoUrl" style="vertical-align:middle" /></div>
      <div style="float:left;margin-left:20px">
        <div style="margin-top: 8px;font-size:32px;font-family:microsoft yahei,Arial, Helvetica, sans-serif;color:#fff;line-height:42px;">{{$t('login.title')}}</div>
      </div>
    </div>
    <div class="error-page-bg">
      <div style="width:1200px;margin:0 auto;overflow:auto;text-align: center;">
        <img :src="page404Url"/>
        <div style="margin-top:0px;margin-left:0px;font-family:microsoft yahei,Arial, Helvetica, sans-serif;">
          <p style="color:#5B81B5;font-size: 30px;">{{$t('errorPages.message_401')}}</p>
          <p style="margin-top: 15px;color:#555;font-weight: 100;font-size: 20px;">{{$t('errorPages.detail_401')}}</p>
        </div>
      </div>
    </div>
    <div class="error-page-footer">
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
</template>

<script>
  import loginLogoUrl from '@/assets/login_images/fsbc-login-logo.png'
  import copyRightUrl from '@/assets/login_images/copy-right-icon.png'
  import moreValueUrl from '@/assets/login_images/login1-more-value.png'
  import page404Url from '@/assets/404_images/404-bg.png'

  export default {
    name: 'page401',
    data() {
      return {
        loginLogoUrl,
        copyRightUrl,
        moreValueUrl,
        page404Url
      }
    },
    computed: {
      message() {
        return '......'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .error-page-bg{
    background-color: rgb(238, 238, 238);
    clear: left;
    position: absolute;
    left: 0;
    right: 0;
    top: 120px;
    bottom: 144px;
  }
  .error-page-footer {
    padding-top: 20px;
    text-align: center;
    color: #999;
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(21, 42, 76);
    p {
      margin-top: 10px;
    }
  }
  .more-value-img {
    width: 94px;
    height: 44px;
  }
</style>
