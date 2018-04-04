<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">

    <el-table-column width="95" :label="$t('faults.rowNo')">
      <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
      </template>
    </el-table-column>

    <el-table-column width="140" align="center" :label="$t('faults.province')">
      <template slot-scope="scope">
        <span>{{scope.row.province}}</span>
      </template>
    </el-table-column>

    <el-table-column width="140" :label="$t('faults.area')">
      <template slot-scope="scope">
        <span>{{scope.row.city}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center"  width="95" :label="$t('faults.route')">
      <template slot-scope="scope">
        <span>{{scope.row.pageviews}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center"  width="95" :label="$t('faults.vehicle')">
      <template slot-scope="scope">
        <span>{{scope.row.pageviews}}</span>
      </template>
    </el-table-column>

    <el-table-column   min-width="95" :label="$t('faults.alert')">
      <template slot-scope="scope">
        <span>{{scope.row.alert}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center"  width="95" :label="$t('faults.times')">
      <template slot-scope="scope">
        <span>{{scope.row.pageviews}}</span>
      </template>
    </el-table-column>

    <el-table-column align="center"  width="140" :label="$t('faults.date')">
      <template slot-scope="scope">
        <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import service from '@/api/DiagnosisService'
export default {
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      this.$emit('create') // for test
      service.fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.loading = false
      })
    }
  }
}
</script>

