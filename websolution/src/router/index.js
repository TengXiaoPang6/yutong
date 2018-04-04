import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/common/layout/Layout'

/** note: submenu only apppear when children.length>=1
*
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    authCode: ['eap.chagerPowerBattery']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: false                if true ,the page will not be cached(default is false)
  }
**/
// 固定的路由 任意解决方案都会用到
export const constantRouterMap = [
  { path: '/login', component: _import('common/login/index'), hidden: true },
  { path: '/authredirect', component: _import('common/login/authredirect'), hidden: true },
  { path: '/404', component: _import('common/errorPage/404'), hidden: true }, // 页面未找到，待设计出效果图
  { path: '/401', component: _import('common/errorPage/401'), hidden: true } // 页面未授权，待设计出效果图
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

/** node asyncRouterMap
 * 动态挂载的路由, 根据用户的userAuth和路由的authCode匹配后动态挂载 生成当前解决方案
 * TODO 打包时通过node http 发送请求到运营平台，获取指定的解决方案路由列表，实现按解决方案打包和部署
 * 前端资源池目前定义在router/v2文件夹下， 目前是基于微服务的独立部署
 * 上线时可以为每个页面组件（直接挂载在路由上的.vue文件）添加别名，方便线上打补丁
 */
export const asyncRouterMap = [
  {
    path: '',
    component: Layout,
    name: 'vehicleMonitoring',
    redirect: 'xnyBcPageObjectsMap',
    meta: {
      title: 'vehicleMonitoring',
      icon: 'navmenu-vehicle-monitoring'
    },
    children: [
      {
        path: 'xnyBcPageObjectsMap',
        component: _import('mapMonitoring/xnyBcPageObjectsMap/index'),
        name: 'xnyBcPageObjectsMap',
        meta: {
          icon: 'navmenu-vehicle-monitoring',
          title: 'xnyBcPageObjectsMap',
          authCode: ['eap.vehicleMonitor']
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'chargerMonitoring',

    meta: {
      title: 'chargerMonitoring',
      icon: 'navmenu-charger-monitoring'
    },
    children: [
      {
        path: 'xnyPileMonitoring',
        component: _import('mapMonitoring/xnyPileMonitoring/index'),
        name: 'xnyPileMonitoring',
        meta: {
          title: 'xnyPileMonitoring',
          authCode: ['eap.yutongChargerMonitor']
        }
      },
      {
        path: 'eleStation-xc',
        component: _import('mapMonitoring/xnyPileMonitoring/index'),
        name: 'eleStation-xc',
        meta: {
          title: 'xcPileMonitoring',
          authCode: ['eap.otherChargerMonitor']
        }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'diagnosis',
    alwaysShow: true,
    meta: {
      title: 'diagnosis',
      icon: 'navmenu-fault-diagnosis'
    },
    children: [
      {
        path: 'bcPcFaultRecordList',
        component: _import('diagnosis/bcPcFaultRecordList'),
        name: 'bcPcFaultRecordList',
        meta: {
          title: 'bcPcFaultRecordList'
        }
      },
      { path: 'bcPcTerminalStateList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcTerminalStateList', meta: { title: 'bcPcTerminalStateList', authCode: ['eap.equipStatus'] }},
      { path: 'xnyPcCanBusStatusChart', component: _import('diagnosis/bcPcFaultRecordList'), name: 'xnyPcCanBusStatusChart', meta: { title: 'xnyPcCanBusStatusChart', authCode: ['eap.canBusStatusChart'] }},
      { path: 'bcPcChargerFaultRecordList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcChargerFaultRecordList', meta: { title: 'bcPcChargerFaultRecordList', authCode: ['eap.chargerFaultRecord'] }},
      { path: 'bcPcFaultRecordSeriousList', component: _import('diagnosis/bcPcFaultRecordSeriousList'), name: 'bcPcFaultRecordSeriousList', meta: { title: 'bcPcFaultRecordSeriousList', authCode: ['eap.seriousAlarm'] }},
      { path: 'bcPcNtcRecordList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcNtcRecordList', meta: { title: 'bcPcNtcRecordList', authCode: ['eap.ntcRecordList'] }},
      { path: 'bcPcFaultRecordFrequentList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcFaultRecordFrequentList', meta: { title: 'bcPcFaultRecordFrequentList', authCode: ['eap.highFreqAlarm'] }},
      { path: 'bcPcFaultRecordRealtimeList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcFaultRecordRealtimeList', meta: { title: 'bcPcFaultRecordRealtimeList', authCode: ['eap.realTimeAlarm'] }},
      { path: 'predoEngineFaultRecordList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'predoEngineFaultRecordList', meta: { title: 'predoEngineFaultRecordList', authCode: ['eap.engineFaultRecordList'] }},
      { path: 'bcPcFaultMultiDimensionStat', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcFaultMultiDimensionStat', meta: { title: 'bcPcFaultMultiDimensionStat', authCode: ['eap.faultMuliDimStas'] }}
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'fuel',
    alwaysShow: true,
    meta: {
      title: 'fuel',
      icon: 'navmenu-energy-management'
    },
    children: [
      { path: 'bcPcEnergyConsumptionStatisticListXny', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcEnergyConsumptionStatisticListXny', meta: { title: 'bcPcEnergyConsumptionStatisticListXny', authCode: ['eap.energyStatistics'] }},
      { path: 'bcPcEnergyConsumptionDetailList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcEnergyConsumptionDetailList', meta: { title: 'bcPcEnergyConsumptionDetailList', authCode: ['eap.bicycleEnergyDetail'] }},
      { path: 'xnyEnergyEveryChargingList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'xnyEnergyEveryChargingList', meta: { title: 'xnyEnergyEveryChargingList', authCode: ['eap.singleChargeStatistics'] }},
      { path: 'bcPcEnergySupplyDailyStatisticList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcEnergySupplyDailyStatisticList', meta: { title: 'bcPcEnergySupplyDailyStatisticList', authCode: ['eap.batteryChargerDay'] }},
      { path: 'bcPcEnergySupplyDeviceRecordList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcEnergySupplyDeviceRecordList', meta: { title: 'bcPcEnergySupplyDeviceRecordList', authCode: ['eap.chargerChargingRecord'] }},
      { path: 'bcPcEnergySupplyVehicleRecordList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcEnergySupplyVehicleRecordList', meta: { title: 'bcPcEnergySupplyVehicleRecordList', authCode: ['eap.vehicleChargingRecord'] }},
      { path: 'bcPcTBEnergyConsumptionStatisticListXny', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcTBEnergyConsumptionStatisticListXny', meta: { title: 'bcPcTBEnergyConsumptionStatisticListXny', authCode: ['eap.tbEnergyStatistics'] }},
      { path: 'bcPcSaveOilDriveStatisticList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcSaveOilDriveStatisticList', meta: { title: 'bcPcSaveOilDriveStatisticList', authCode: ['eap.saveOilBehiverStat'] }},
      { path: 'bcPcSparePartConsumptionDataList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcSparePartConsumptionDataList', meta: { title: 'bcPcSparePartConsumptionDataList', authCode: ['eap.partsElecConsData'] }},
      { path: 'bcPcSparePartConsumptionDataListHw', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcSparePartConsumptionDataListHw', meta: { title: 'bcPcSparePartConsumptionDataListHw', authCode: ['eap.partsElecConsDataHw'] }}
    ]
  },
  /*  {
    path: '',
    component: Layout,
    name: 'datadig',
    meta: {
      title: 'datadig',
      icon: 'navmenu-data-mining'
    },
    children: []
  },*/
  {
    path: '',
    component: Layout,
    name: 'resource',
    meta: {
      title: 'resource',
      icon: 'navmenu-resource-center'
    },
    children: [
      { path: 'xnyPcVehicleList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'xnyPcVehicleList', meta: { title: 'xnyPcVehicleList', authCode: ['eap.vehicle'] }},
      { path: 'xnyPcLocusDetail', component: _import('diagnosis/bcPcFaultRecordList'), name: 'xnyPcLocusDetail', meta: { title: 'xnyPcLocusDetail', authCode: ['eap.track'] }},
      { path: 'fsbcPcEnergyPlusStationList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'fsbcPcEnergyPlusStationList', meta: { title: 'fsbcPcEnergyPlusStationList', authCode: ['eap.energyStation'] }},
      { path: 'bcPcChargingPileList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcChargingPileList', meta: { title: 'bcPcChargingPileList', authCode: ['eap.energyEquip'] }},
      { path: 'bcPcUserList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcUserList', meta: { title: 'bcPcUserList', authCode: ['eap.user'] }},
      { path: 'bcPcRoleList-xny', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcRoleListXny', meta: { title: 'bcPcRoleListXny', authCode: ['eap.role'] }},
      { path: 'bcPcOrgEdit', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcOrgEdit', meta: { title: 'bcPcOrgEdit', authCode: ['eap.org'] }}
    ]
  },
  {
    path: '',
    component: Layout,
    name: 'business',
    alwaysShow: true,
    meta: {
      title: 'business',
      icon: 'navmenu-business-setting'
    },
    children: [
      { path: 'bcPcChargingPileConfigList', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcChargingPileConfigList', meta: { title: 'bcPcChargingPileConfigList', authCode: ['eap.chargeParamSet'] }},
      { path: 'bcPcIntegratedQueryTemplateSetting', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcIntegratedQueryTemplateSetting', meta: { title: 'bcPcIntegratedQueryTemplateSetting', authCode: ['eap.integratedQueryTmplSet'] }},
      { path: 'bcPcEnterpriseSetting', component: _import('diagnosis/bcPcFaultRecordList'), name: 'bcPcEnterpriseSetting', meta: { title: 'bcPcEnterpriseSetting', authCode: ['eap.entSpecialSet'] }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
