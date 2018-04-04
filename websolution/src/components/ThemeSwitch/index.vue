<template>
  <el-dropdown trigger="click"  @command="setTheme">
    <div>
      <el-button type="primary">
        <i class="el-icon-arrow-down"></i>
      </el-button>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item, index) in themeList" :key="index" :command="item.name">
          <div class="theme-record" :style="{'background-color':item.element}"></div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'themeSwitch',
  data() {
    return {
      themeList: [
        {
          name: 'default',
          element: '#0093EE'
        },
        {
          name: 'green',
          element: '#91CA50'
        }
      ]
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    setTheme(themeName) {
      let basePath = ''
      let mainPath = ''
      const themeBaseLink = document.querySelector('link[name="theme-base"]')
      const themeMainLink = document.querySelector('link[name="theme-main"]')
      const stylePath = './static/theme/'
      if (themeName === 'default') {
        basePath = ''
        mainPath = ''
      } else {
        basePath = stylePath + themeName + '/base.min.css'
        mainPath = stylePath + themeName + '/main.min.css'
      }

      themeBaseLink.setAttribute('href', basePath)
      themeMainLink.setAttribute('href', mainPath)
    }
  }
}
</script>

<style scoped>
.theme-record {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px;
}
</style>


