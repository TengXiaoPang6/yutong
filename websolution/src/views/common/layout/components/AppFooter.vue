<template>
  <footer class="app-footer">
    <div class="frame-copyright">Powered by Vehicle+ V3.0.0, 2014-2019{{$t('footer.copyright')}} </div>
    <div class="right-menu" @click="onlineServiceClick">
      <div class="right-menu-item">{{$t('footer.onlineService')}}</div>
      <div class="right-menu-item icon-wrapper"><svg-icon icon-class="onlineService" /></div>
    </div>
  </footer>
</template>

<script>
import openWindow from '@/utils/openWindow'
export default {

  data() {
    return {

    }
  },
  methods: {
    // 在线客服 沿用V+ 2.0 ?
    onlineServiceClick() {
      const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/authredirect')
      const enterUrl = location.href
      const url = 'http://ytkf.yutong.com:8880/live800/chatClient/chatbox.jsp?companyID=8973&configID=42&skillId=36&enterurl=' + enterUrl + '&pagereferrer=&k=1'
      openWindow(url, '', 800, 600)
    }
  }
}
</script>
