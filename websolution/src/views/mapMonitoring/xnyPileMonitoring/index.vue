<template>
  <div class="map-container">

    <div class="map-wrapper" id="mapWrapper">

    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'xnyBcPageObjectsMap',
  data() {
    return {
      WrapHeight: 500,
      iconsMap: []
    }
  },
  mounted() {
    this.WrapHeight
    this.map = new AMap.Map('mapWrapper', {
      showBuildingBlock: true,
      animateEnable: true,
      resizeEnable: true,
      zoom: 12 // 地图显示的缩放级别
    })
  },
  methods: {

  },
  activated: function() {

  },
  deactivated: function() {
    // 清理地图之前的标记
    // this.map.clearMap();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .map-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
