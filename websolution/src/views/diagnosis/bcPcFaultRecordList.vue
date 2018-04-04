<template>
  <div class="page-container">
    <el-tag>渲染次数：{{createdTimes}}</el-tag>
    <el-tabs style='margin-top:15px;' v-model="activeName" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
        <keep-alive>
          <tab-pane v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import tabPane from './components/tabPane'
  export default {
    name: 'tab',
    components: { tabPane },
    data() {
      return {
        activeName: 'CN',
        createdTimes: 0
      }
    },
    computed: {
      tabMapOptions() {
        return [
          { label: this.$t('route.bcPcFaultRecordList'), key: 'CN' },
          { label: this.$t('route.bcPcFaultRecordSeriousList'), key: 'US' },
          { label: this.$t('route.bcPcTerminalStateList'), key: 'JP' }
        ]
      }
    },
    methods: {
      showCreatedTimes() {
        this.createdTimes = this.createdTimes + 1
      }
    }
  }
</script>
