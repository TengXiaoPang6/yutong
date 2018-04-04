<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!--<keep-alive :include="cachedViews">-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  },
  created() {
    // 可以加一个debugger 测试一下 无论有没有keep-alive,layout组件都只会加载1次，重新渲染的只是appMain里面的页面
  }
}
</script>
