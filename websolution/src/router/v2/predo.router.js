var predoURL = 'predo/' // 获取产品引用URL
/* *
 * 预防性与预测性维护产品路由配置
 * 预防性与预测性维护产品的功能页面在此进行配置
 * */
var predoRouter = [
  {
    'state': 'jwPcMaterialWBillList',
    'url': 'jwPcMaterialWBillList',
    'directive': 'jwPcMaterialWBillList',
    'authCode': 'eap.materialWbill',
    'params': [],
    'files': [
      predoURL + 'pages/predoMaterialWBillList-jw/js/controller.js',
      predoURL + 'pages/predoMaterialWBillList-jw/js/directive.js',
      predoURL + 'pages/predoMaterialWBillList-jw/js/service.js'
    ],
    'dependencies': [
      'bcGridMenu',
      'bdDateTimeField',
      'bcPagination',
      'bdTextInput',
      'bdDropDown',
      'bcGrid',
      'jwFilters'
    ]
  },
  {
    'state': 'jwPcWbillEdit',
    'url': 'jwPcWbillEdit',
    'directive': 'jwPcWbillEdit',
    'authCode': 'eap.materialWbill.add',
    'params': [
      'wbillId'
    ],
    'files': [
      predoURL + 'pages/predoWbillEdit-jw/js/controller.js',
      predoURL + 'pages/predoWbillEdit-jw/js/directive.js',
      predoURL + 'pages/predoWbillEdit-jw/js/service.js'
    ],
    'dependencies': [
      'bcGridMenu',
      'bcPaginationDropDown',
      'bdDateTimeField',
      'bcPagination',
      'bdTextInput',
      'bcGrid',
      'BizControlResolver',
      'FieldValidate',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jwPcMaterialBillList',
    'url': 'jwPcMaterialBillList',
    'directive': 'jwPcMaterialBillList',
    'authCode': 'eap.materialRecord',
    'params': [],
    'files': [
      predoURL + 'pages/predoMaterialBillList-jw/js/controller.js',
      predoURL + 'pages/predoMaterialBillList-jw/js/directive.js',
      predoURL + 'pages/predoMaterialBillList-jw/js/service.js'
    ],
    'dependencies': [
      'bcGridMenu',
      'bcOrgSelector',
      'bcPaginationDropDown',
      'bcPagination',
      'bdTextInput',
      'bdDateField',
      'bdDropDown',
      'bcGrid'
    ]
  },
  {
    'state': 'jwPcRepairRecord',
    'url': 'jwPcRepairRecord',
    'directive': 'jwPcRepairRecord',
    'authCode': 'eap.repairRecord',
    'params': [
      'orgToReord',
      'factory'
    ],
    'files': [
      predoURL + 'pages/predoRepairRecord-jw/js/controller.js',
      predoURL + 'pages/predoRepairRecord-jw/js/directive.js',
      predoURL + 'pages/predoRepairRecord-jw/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'bdTextInput',
      'bcOrgSelector',
      'bdCheckboxGroup',
      'bcPaginationDropDown',
      'bdCheckboxGroupDropDown',
      'bizCommon',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcRepairOverviewFactory',
    'url': 'jwPcRepairOverviewFactory',
    'directive': 'jwPcRepairOverviewFactory',
    'authCode': 'eap.repairOverViewFactory',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairOverviewFactory-jw/js/controller.js',
      predoURL + 'pages/predoRepairOverviewFactory-jw/js/directive.js',
      predoURL + 'pages/predoRepairOverviewFactory-jw/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bcPagination',
      'bcPaginationDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'Authorization',
      'DataProvider',
      'echartsDiagram',
      'bcGrid'
    ]
  },
  {
    'state': 'jwPcRepairOverviewOrg',
    'url': 'jwPcRepairOverviewOrg',
    'directive': 'jwPcRepairOverviewOrg',
    'authCode': 'eap.repairOverViewOrg',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairOverviewOrg-jw/js/controller.js',
      predoURL + 'pages/predoRepairOverviewOrg-jw/js/directive.js',
      predoURL + 'pages/predoRepairOverviewOrg-jw/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcPagination',
      'bcAgGrid',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'echartsDiagram',
      'jwArrowDateField'
    ]
  },
  {
    'state': 'jwPcRepairForecast',
    'url': 'jwPcRepairForecast',
    'directive': 'jwPcRepairForecast',
    'authCode': 'eap.repairForcast',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairForecast-jw/js/controller.js',
      predoURL + 'pages/predoRepairForecast-jw/js/directive.js',
      predoURL + 'pages/predoRepairForecast-jw/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdTextInput',
      'bcOrgSelector',
      'bcPaginationDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'DataProvider',
      'bcRouteSelector',
      'utilFilters',
      'Utils'
    ]
  },
  {
    'state': 'jwPcRepairPlanList',
    'url': 'jwPcRepairPlanList',
    'directive': 'jwPcRepairPlanList',
    'authCode': 'eap.repairPlanList',
    'params': [
      'orgId',
      'routeId',
      'vehicleLike',
      'repairTypeId',
      'factoryId'
    ],
    'files': [
      predoURL + 'pages/predoRepairPlanList-jw/js/controller.js',
      predoURL + 'pages/predoRepairPlanList-jw/js/directive.js',
      predoURL + 'pages/predoRepairPlanList-jw/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'jwBdDateField',
      'bcPagination',
      'bcGrid',
      'bdTextInput',
      'bcOrgSelector',
      'bcPaginationDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'DataProvider',
      'bcRouteSelector',
      'utilFilters',
      'Utils'
    ]
  },
  {
    'state': 'jwPcRepairTaskList',
    'url': 'jwPcRepairTaskList',
    'directive': 'jwPcRepairTaskList',
    'authCode': 'eap.repairPlanSheet',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairTaskList-jw/js/controller.js',
      predoURL + 'pages/predoRepairTaskList-jw/js/directive.js',
      predoURL + 'pages/predoRepairTaskList-jw/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdTextInput',
      'bcOrgSelector',
      'bcPaginationDropDown',
      'bizCommon',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'TipService',
      'DataProvider',
      'bcRouteSelector',
      'utilFilters',
      'jwFilters',
      'I18n',
      'Utils'
    ]
  },
  {
    'state': 'jwPcFactoryList',
    'url': 'jwPcFactoryList',
    'directive': 'jwPcFactoryList',
    'authCode': 'eap.factory',
    'params': [],
    'files': [
      predoURL + 'pages/predoFactoryList-jw/js/controller.js',
      predoURL + 'pages/predoFactoryList-jw/js/directive.js',
      predoURL + 'pages/predoFactoryList-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcPagination',
      'bdTextInput',
      'bdDropDown',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'FieldValidate'
    ]
  },
  {
    'state': 'jwPcRepairMachineSet',
    'url': 'jwPcRepairMachineSet',
    'directive': 'jwPcRepairMachineSet',
    'authCode': 'eap.reportMachineSet',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairMachineSet-jw/js/controller.js',
      predoURL + 'pages/predoRepairMachineSet-jw/js/directive.js',
      predoURL + 'pages/predoRepairMachineSet-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdRadioGroup',
      'bdDropDown',
      'bdTimeField',
      'bdTextInput',
      'bizCommon',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'JwBaseServices',
      'jwFilters',
      'BizPageManager'
    ]
  },
  {
    'state': 'jwPcRepairMaConfList',
    'url': 'jwPcRepairMaConfList',
    'directive': 'jwPcRepairMaConfList',
    'authCode': 'eap.reportMachineParam',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairMaConfList-jw/js/controller.js',
      predoURL + 'pages/predoRepairMaConfList-jw/js/directive.js',
      predoURL + 'pages/predoRepairMaConfList-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcPagination',
      'bdTextInput',
      'bdDropDown',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcFaultTreeManage',
    'url': 'jwPcFaultTreeManage',
    'directive': 'jwPcFaultTreeManage',
    'authCode': 'eap.faultTree',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultTreeManage-jw/js/controller.js',
      predoURL + 'pages/predoFaultTreeManage-jw/js/directive.js',
      predoURL + 'pages/predoFaultTreeManage-jw/js/service.js'
    ],
    'dependencies': [
      'jwDropDown',
      'bcObjectTree',
      'bdRadioGroup',
      'jwSchemeActionTreeV2',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'jwFilters'
    ]
  },
  {
    'state': 'jydjwPcFaultTreeManage',
    'url': 'jydjwPcFaultTreeManage',
    'directive': 'jydjwPcFaultTreeManage',
    'authCode': 'eap.faultTree',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultTreeManage-jyd/js/controller.js',
      predoURL + 'pages/predoFaultTreeManage-jyd/js/directive.js',
      predoURL + 'pages/predoFaultTreeManage-jyd/js/service.js'
    ],
    'dependencies': [
      'jwDropDown',
      'bcObjectTree',
      'bdRadioGroup',
      'jwSchemeActionTreeV2',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'jwFilters'
    ]
  },
  {
    'state': 'jydPcFaultMonitorSettings',
    'url': 'jydPcFaultMonitorSettings',
    'directive': 'jydPcFaultMonitorSettings',
    'authCode': 'eap.alarm.param',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultMonitorSettings-jyd/js/controller.js',
      predoURL + 'pages/predoFaultMonitorSettings-jyd/js/directive.js',
      predoURL + 'pages/predoFaultMonitorSettings-jyd/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bizCommon',
      'BizControlResolver',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcActionSet',
    'url': 'jwPcActionSet',
    'directive': 'jwPcActionSet',
    'authCode': 'eap.repairAction',
    'params': [],
    'files': [
      predoURL + 'pages/predoActionSet-jw/js/controller.js',
      predoURL + 'pages/predoActionSet-jw/js/directive.js',
      predoURL + 'pages/predoActionSet-jw/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdRadioGroup',
      'bdDropDown',
      'bcObjectTree',
      'bizCommon',
      'BizPageManager',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcSchemeActionSet',
    'url': 'jwPcSchemeActionSet',
    'directive': 'jwPcSchemeActionSet',
    'authCode': 'eap.schemeAction',
    'params': [],
    'files': [
      predoURL + 'pages/predoSchemeActionSet-jw/js/controller.js',
      predoURL + 'pages/predoSchemeActionSet-jw/js/directive.js',
      predoURL + 'pages/predoSchemeActionSet-jw/js/service.js'
    ],
    'dependencies': [
      'jwDropDown',
      'bcObjectTree',
      'bcGrid',
      'bdCheckboxGroup',
      'jwSchemeActionTree',
      'jwLevelCheckboxGroup',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'FieldValidate',
      'Logger',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcRepairStatSettings',
    'url': 'jwPcRepairStatSettings',
    'directive': 'jwPcRepairStatSettings',
    'authCode': 'eap.repairStatSetting',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairStatSettings-jw/js/controller.js',
      predoURL + 'pages/predoRepairStatSettings-jw/js/directive.js',
      predoURL + 'pages/predoRepairStatSettings-jw/js/service.js'
    ],
    'dependencies': [
      'jwDropDown',
      'bcObjectTree',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'bdTimeField',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'BizPageManager',
      'JwBaseServices'
    ]
  },
  {
    'state': 'jwPcRepairPlanSettings',
    'url': 'jwPcRepairPlanSettings',
    'directive': 'jwPcRepairPlanSettings',
    'authCode': 'eap.repairPlanSetting',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairPlanSettings-jw/js/controller.js',
      predoURL + 'pages/predoRepairPlanSettings-jw/js/directive.js',
      predoURL + 'pages/predoRepairPlanSettings-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'bdTimeField',
      'JwBaseServices',
      'BizPageManager'
    ]
  },
  {
    'state': 'jwPcRepairTypeList',
    'url': 'jwPcRepairTypeList',
    'directive': 'jwPcRepairTypeList',
    'authCode': 'eap.repairType',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairTypeList-jw/js/controller.js',
      predoURL + 'pages/predoRepairTypeList-jw/js/directive.js',
      predoURL + 'pages/predoRepairTypeList-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdTextInput',
      'bdTextArea',
      'bdDropDown',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcSchemeLevel',
    'url': 'jwPcSchemeLevel',
    'directive': 'jwPcSchemeLevel',
    'authCode': 'eap.schemeLevel',
    'params': [
      'entId'
    ],
    'files': [
      predoURL + 'pages/predoSchemeLevel-jw/js/controller.js',
      predoURL + 'pages/predoSchemeLevel-jw/js/directive.js',
      predoURL + 'pages/predoSchemeLevel-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdRadioGroup',
      'bdDropDown',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DialogService',
      'FieldValidate',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcSchemeEnt',
    'url': 'jwPcSchemeEnt',
    'directive': 'jwPcSchemeEnt',
    'authCode': 'eap.schemeEnt',
    'params': [],
    'files': [
      predoURL + 'pages/predoSchemeEnt-jw/js/controller.js',
      predoURL + 'pages/predoSchemeEnt-jw/js/directive.js',
      predoURL + 'pages/predoSchemeEnt-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdRadioGroup',
      'bdDropDown',
      'bdDateField',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcSetHoliday',
    'url': 'jwPcSetHoliday',
    'directive': 'jwPcSetHoliday',
    'authCode': 'eap.factoryHoliday',
    'params': [],
    'files': [
      predoURL + 'pages/predoSetHoliday-jw/js/controller.js',
      predoURL + 'pages/predoSetHoliday-jw/js/directive.js',
      predoURL + 'pages/predoSetHoliday-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdDateField',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcPeriodSet',
    'url': 'jwPcPeriodSet',
    'directive': 'jwPcPeriodSet',
    'authCode': 'eap.periodSetting',
    'params': [],
    'files': [
      predoURL + 'pages/predoPeriodSet-jw/js/controller.js',
      predoURL + 'pages/predoPeriodSet-jw/js/directive.js',
      predoURL + 'pages/predoPeriodSet-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdRadioGroup',
      'bdDropDown',
      'bdDateField',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcScheduleParam',
    'url': 'jwPcScheduleParam',
    'directive': 'jwPcScheduleParam',
    'authCode': 'eap.servicePlanParam',
    'params': [],
    'files': [
      predoURL + 'pages/predoScheduleParam-jw/js/controller.js',
      predoURL + 'pages/predoScheduleParam-jw/js/directive.js',
      predoURL + 'pages/predoScheduleParam-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdRadioGroup',
      'bdDropDown',
      'bdDateField',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcDayDashboard',
    'url': 'jwPcDayDashboard',
    'directive': 'jwPcDayDashboard',
    'authCode': 'eap.mangBoard.daily',
    'params': [],
    'files': [
      predoURL + 'pages/predoDayDashboard-jw/js/controller.js',
      predoURL + 'pages/predoDayDashboard-jw/js/directive.js',
      predoURL + 'pages/predoDayDashboard-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcAgGrid',
      'bdRadioGroup',
      'bdDropDown',
      'bdDateField',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcPagination',
      'Authorization',
      'domLazyLoad'
    ]
  },
  {
    'state': 'jwPcMonthDashboard',
    'url': 'jwPcMonthDashboard',
    'directive': 'jwPcMonthDashboard',
    'authCode': 'eap.mangBoard.month',
    'params': [],
    'files': [
      predoURL + 'pages/predoMonthDashboard-jw/js/controller.js',
      predoURL + 'pages/predoMonthDashboard-jw/js/directive.js',
      predoURL + 'pages/predoMonthDashboard-jw/js/service.js'
    ],
    'dependencies': [
      'bcAgGrid',
      'bcPagination',
      'bdArrowDateTimeField',
      'echarts3Diagram'
    ]
  },
  {
    'state': 'jwPcWxWhReportCenter',
    'url': 'jwPcWxWhReportCenter',
    'directive': 'jwPcWxWhReportCenter',
    'authCode': 'eap.wxwbReport',
    'params': [],
    'files': [
      predoURL + 'pages/predoWxWhReportCenter-jw/js/controller.js',
      predoURL + 'pages/predoWxWhReportCenter-jw/js/directive.js',
      predoURL + 'pages/predoWxWhReportCenter-jw/js/service.js'
    ],
    'dependencies': []
  },
  {
    'state': 'jwPcMechanicWorkloadStatList',
    'url': 'jwPcMechanicWorkloadStatList',
    'directive': 'jwPcMechanicWorkloadStatList',
    'authCode': 'eap.wxwbReport.mechanicload',
    'params': [],
    'files': [
      predoURL + 'pages/predoMechanicWorkloadStatList-jw/js/controller.js',
      predoURL + 'pages/predoMechanicWorkloadStatList-jw/js/directive.js',
      predoURL + 'pages/predoMechanicWorkloadStatList-jw/js/service.js'
    ],
    'dependencies': [
      'jwArrowDateField',
      'bdDateField',
      'bdTextInput',
      'bcPaginationDropDown',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'TipService',
      'Utils',
      'Authorization',
      'DataProvider',
      'jwFilters'
    ]
  },
  {
    'state': 'jwPcFaultRepairStatList',
    'url': 'jwPcFaultRepairStatList',
    'directive': 'jwPcFaultRepairStatList',
    'authCode': 'eap.wxwbReport.faultRepairRate',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultRepairStatList-jw/js/controller.js',
      predoURL + 'pages/predoFaultRepairStatList-jw/js/directive.js',
      predoURL + 'pages/predoFaultRepairStatList-jw/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'jwArrowDateField',
      'bcPagination',
      'bcPaginationDropDown',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'DataProvider',
      'utilFilters',
      'jwFilters'
    ]
  },
  {
    'state': 'jwPcRepairAccuracyStatisticsList',
    'url': 'jwPcRepairAccuracyStatisticsList',
    'directive': 'jwPcRepairAccuracyStatisticsList',
    'authCode': 'eap.wxwbReport.accurancyRate',
    'params': [],
    'files': [
      predoURL + 'pages/predoRepairAccuracyStatisticsList-jw/js/controller.js',
      predoURL + 'pages/predoRepairAccuracyStatisticsList-jw/js/directive.js',
      predoURL + 'pages/predoRepairAccuracyStatisticsList-jw/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'jwArrowDateField',
      'bcPagination',
      'bdTextInput',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'DateUtils',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jwPcAnnualInspeWarningStatisticsList',
    'url': 'jwPcAnnualInspeWarningStatisticsList',
    'directive': 'jwPcAnnualInspeWarningStatisticsList',
    'authCode': 'eap.wxwbReport.yearlyAlarm',
    'params': [],
    'files': [
      predoURL + 'pages/predoAnnualInspeWarningStatisticsList-jw/js/controller.js',
      predoURL + 'pages/predoAnnualInspeWarningStatisticsList-jw/js/directive.js',
      predoURL + 'pages/predoAnnualInspeWarningStatisticsList-jw/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'jwArrowDateField',
      'bcGrid',
      'bdTextInput',
      'bcOrgSelector',
      'BizControlResolver',
      'DateUtils',
      'TipService',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'Utils'
    ]
  },
  {
    'state': 'jwPcOrgGoodRateStatList',
    'url': 'jwPcOrgGoodRateStatList',
    'directive': 'jwPcOrgGoodRateStatList',
    'authCode': 'eap.wxwbReport.orgRate',
    'params': [
      'org',
      'factory'
    ],
    'files': [
      predoURL + 'pages/predoOrgGoodRateStatList-jw/js/controller.js',
      predoURL + 'pages/predoOrgGoodRateStatList-jw/js/directive.js',
      predoURL + 'pages/predoOrgGoodRateStatList-jw/js/service.js'
    ],
    'dependencies': [
      'jwOrgSelector',
      'bdArrowDateTimeField',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'TipService',
      'Authorization',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcDriverMaterialCostList',
    'url': 'jwPcDriverMaterialCostList',
    'directive': 'jwPcDriverMaterialCostList',
    'authCode': 'eap.wxwbReport.materialCost',
    'params': [],
    'files': [
      predoURL + 'pages/predoDriverMaterialCostList-jw/js/controller.js',
      predoURL + 'pages/predoDriverMaterialCostList-jw/js/directive.js',
      predoURL + 'pages/predoDriverMaterialCostList-jw/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'jwArrowDateField',
      'bcPagination',
      'bdTextInput',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'DateUtils',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jwPcMonitorRoom',
    'url': 'jwPcMonitorRoom',
    'directive': 'jwPcMonitorRoom',
    'authCode': 'eap.monitorRoom',
    'params': [],
    'files': [
      predoURL + 'pages/predoMonitorRoom-jw/js/controller.js',
      predoURL + 'pages/predoMonitorRoom-jw/js/directive.js',
      predoURL + 'pages/predoMonitorRoom-jw/js/service.js'
    ],
    'dependencies': []
  },
  {
    'state': 'jwPcEntOverview',
    'url': 'jwPcEntOverview/:orgId/:orgName',
    'directive': 'jwPcEntOverview',
    'authCode': 'eap.monitorRoom',
    'params': [],
    'files': [
      predoURL + 'pages/predoEntOverview-jw/js/controller.js',
      predoURL + 'pages/predoEntOverview-jw/js/directive.js',
      predoURL + 'pages/predoEntOverview-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'jwFilters'
    ]
  },
  {
    'state': 'jwPcFactoryTaskMonitor',
    'url': 'jwPcFactoryTaskMonitor/:factoryId/:factoryName',
    'directive': 'jwPcFactoryTaskMonitor',
    'authCode': 'eap.monitorRoom',
    'params': [],
    'files': [
      predoURL + 'pages/predoFactoryTaskMonitor-jw/js/controller.js',
      predoURL + 'pages/predoFactoryTaskMonitor-jw/js/directive.js',
      predoURL + 'pages/predoFactoryTaskMonitor-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'jwFilters'
    ]
  },
  {
    'state': 'jwPcFactoryTaskReminder',
    'url': 'jwPcFactoryTaskReminder/:factoryId/:factoryName',
    'directive': 'jwPcFactoryTaskReminder',
    'authCode': 'eap.monitorRoom',
    'params': [],
    'files': [
      predoURL + 'pages/predoFactoryTaskReminder-jw/js/controller.js',
      predoURL + 'pages/predoFactoryTaskReminder-jw/js/directive.js',
      predoURL + 'pages/predoFactoryTaskReminder-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'jwFilters'
    ]
  },
  {
    'state': 'bcPcRepairStatList',
    'url': 'bcPcRepairStatList',
    'directive': 'bcPcRepairStatList',
    'authCode': 'eap.repairStatistilDetail',
    'params': [
      'statObjType',
      'statObjId',
      'statRangeType',
      'statRangeId',
      'periodType',
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + 'pages/predoRepairStatList/js/controller.js',
      predoURL + 'pages/predoRepairStatList/js/directive.js',
      predoURL + 'pages/predoRepairStatList/js/service.js'
    ],
    'dependencies': [
      'bcGridMenu',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcRepairOrderList',
    'url': 'bcPcRepairOrderList',
    'directive': 'bcPcRepairOrderList',
    'authCode': 'eap.repairOrder',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + 'pages/predoRepairOrderList/js/controller.js',
      predoURL + 'pages/predoRepairOrderList/js/directive.js',
      predoURL + 'pages/predoRepairOrderList/js/service.js'
    ],
    'dependencies': [
      'bcGridMenu',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcVehicleMtInfo',
    'url': 'jwPcVehicleMtInfo',
    'directive': 'jwPcVehicleMtInfo',
    'authCode': 'eap.vehicleMtInfo',
    'params': [],
    'files': [
      predoURL + 'pages/predoVehicleWbInfo-jw/js/controller.js',
      predoURL + 'pages/predoVehicleWbInfo-jw/js/directive.js',
      predoURL + 'pages/predoVehicleWbInfo-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdDateField',
      'bcPaginationDropDown',
      'bcGrid',
      'bcVehicleSelector',
      'bcOrgSelector',
      'bdDropDown',
      'bcRouteSelector',
      'bcPagination',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bdDateTimeField',
      'bcObjectSearchTree',
      'bcRouteTree',
      'bizCommon',
      'bdTextInput'
    ]
  },
  {
    'state': 'bcPcRepairOrderDetail',
    'url': 'bcPcRepairOrderDetail',
    'directive': 'bcPcRepairOrderDetail',
    'authCode': 'eap.repairOrder',
    'params': [
      'repairOrderId'
    ],
    'files': [
      predoURL + 'pages/predoRepairOrderDetail/js/controller.js',
      predoURL + 'pages/predoRepairOrderDetail/js/directive.js',
      predoURL + 'pages/predoRepairOrderDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcRepairOrderSummary',
      'bcCcRepairOrderState',
      'bcCcMalfunctionPosition',
      'bcCcMalfunctionRecordList',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcCurrentPeroidWbPlan',
    'url': 'jwPcCurrentPeroidWbPlan',
    'directive': 'jwPcCurrentPeroidWbPlan',
    'authCode': 'eap.currentPeroidWbPlan',
    'params': [],
    'files': [
      predoURL + 'pages/predoCurrentPeroidWbPlanV2-jw/js/controller.js',
      predoURL + 'pages/predoCurrentPeroidWbPlanV2-jw/js/directive.js',
      predoURL + 'pages/predoCurrentPeroidWbPlanV2-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'DialogService'
    ]
  },
  {
    'state': 'jwPcWbPlanHistory',
    'url': 'jwPcWbPlanHistory',
    'directive': 'jwPcWbPlanHistory',
    'authCode': 'eap.wbPlanHistory',
    'params': [],
    'files': [
      predoURL + 'pages/predoWbPlanHistory-jw/js/controller.js',
      predoURL + 'pages/predoWbPlanHistory-jw/js/directive.js',
      predoURL + 'pages/predoWbPlanHistory-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdDropDown',
      'bcPagination'
    ]
  },
  {
    'state': 'jwPcNextPeroidWbPlan',
    'url': 'jwPcNextPeroidWbPlan',
    'directive': 'jwPcNextPeroidWbPlan',
    'authCode': 'eap.nextPeroidWbPlan',
    'params': [],
    'files': [
      predoURL + 'pages/predoNextPeroidWbPlanV2-jw/js/controller.js',
      predoURL + 'pages/predoNextPeroidWbPlanV2-jw/js/directive.js',
      predoURL + 'pages/predoNextPeroidWbPlanV2-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdExcelImportExt',
      'bcPagination',
      'DialogService'
    ]
  },

  {
    'state': 'predoAbnormalMaintenanceReport',
    'url': 'predoAbnormalMaintenanceReport',
    'directive': 'predoAbnormalMaintenanceReport',
    'authCode': 'eap.abnormalMaintenanceReport',
    'files': [
      predoURL + 'pages/predoAbnormalMaintenanceReport/js/controller.js',
      predoURL + 'pages/predoAbnormalMaintenanceReport/js/directive.js',
      predoURL + 'pages/predoAbnormalMaintenanceReport/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateField',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAgGrid'
    ]
  },
  {
    'state': 'predoMonthMaintenanceReport',
    'url': 'predoMonthMaintenanceReport',
    'directive': 'predoMonthMaintenanceReport',
    'authCode': 'eap.monthMaintenanceReport',
    'files': [
      predoURL + 'pages/predoMonthMaintenanceReport/js/controller.js',
      predoURL + 'pages/predoMonthMaintenanceReport/js/directive.js',
      predoURL + 'pages/predoMonthMaintenanceReport/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateField',
      'bcPaginationDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcOrgSelector',
      'bcRouteSelector',
      'xPaginationDropDown',
      'bcAgGrid'
    ]
  },
  {
    'state': 'predoListRptWbHistory',
    'url': 'predoListRptWbHistory',
    'directive': 'predoListRptWbHistory',
    'authCode': 'eap.listRptWbHistory',
    'params': [],
    'files': [
      predoURL + 'pages/predoListRptWbHistory/js/controller.js',
      predoURL + 'pages/predoListRptWbHistory/js/directive.js',
      predoURL + 'pages/predoListRptWbHistory/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'bdDateField',
      'bdRadioGroup',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'echartsDiagram'
    ]
  },
  {
    'state': 'predoRptWbCalendar',
    'url': 'predoRptWbCalendar',
    'directive': 'predoRptWbCalendar',
    'authCode': 'eap.rptWbCalendar',
    'params': [],
    'files': [
      predoURL + 'pages/predoRptWbCalendar/js/controller.js',
      predoURL + 'pages/predoRptWbCalendar/js/directive.js',
      predoURL + 'pages/predoRptWbCalendar/js/service.js'
    ],
    'dependencies': [
      'bdArrowHalfYearField',
      'bcRouteSelector',
      'bcPaginationDropDown',
      'bcPagination',
      'bcGrid',
      'bdTextInput',
      'bcOrgSelector',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jwPcFaultInXnyVehicleList',
    'url': 'jwPcFaultInXnyVehicleList',
    'directive': 'jwPcFaultInXnyVehicleList',
    'authCode': 'eap.mapMonitor',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultInXnyVehicleList-jw/js/controller.js',
      predoURL + 'pages/predoFaultInXnyVehicleList-jw/js/directive.js',
      predoURL + 'pages/predoFaultInXnyVehicleList-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'Utils',
      'AppConfig',
      'DataProvider',
      'jwFilters',
      'utilFilters',
      'jwVehicleSelector'
    ]
  },
  {
    'state': 'jydQualifiedStatis',
    'url': 'jydQualifiedStatis',
    'directive': 'jydQualifiedStatis',
    'authCode': 'eap.qualifiedStatis',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + 'pages/predoQualifiedStatis-jyd/js/controller.js',
      predoURL + 'pages/predoQualifiedStatis-jyd/js/directive.js',
      predoURL + 'pages/predoQualifiedStatis-jyd/js/service.js'
    ],
    'dependencies': [
      'jydVehicleTree',
      'bcPagination',
      // "bdDateField",
      'bdDateTimeField',
      'bcGrid',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement',
      'echartsDiagram'
    ]
  },
  {
    'state': 'bcPcBatteryMaintainStatisticList',
    'url': 'bcPcBatteryMaintainStatisticList',
    'directive': 'bcPcBatteryMaintainStatisticList',
    'authCode': 'eap.batteryMainStatistics',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryMaintainStatisticList/js/controller.js',
      predoURL + 'pages/predoBatteryMaintainStatisticList/js/directive.js',
      predoURL + 'pages/predoBatteryMaintainStatisticList/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bdDropDown',
      'bcPagination',
      'bcAddress',
      'bcGrid',
      'bdTextInput',
      'bcOrgSelector',
      'bdCheckboxGroupDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcChargerFaultRecordList',
    'url': 'bcPcChargerFaultRecordList',
    'directive': 'bcPcChargerFaultRecordList',
    'authCode': 'eap.chargerFaultRecord',
    'params': [],
    'files': [
      predoURL + 'pages/predoChargerFaultRecordList/js/controller.js',
      predoURL + 'pages/predoChargerFaultRecordList/js/directive.js',
      predoURL + 'pages/predoChargerFaultRecordList/js/service.js'
    ],
    'dependencies': [
      'bdTimeField',
      'bdDateField',
      'xnyChargingPileTree',
      'bcGrid',
      'bcPagination',
      'bcObjectTree',
      'bdDropDown',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'xnyBcPcBatteryLifeEvaluation-xny',
    'url': 'xnyBcPcBatteryLifeEvaluation-xny',
    'directive': 'xnyBcPcBatteryLifeEvaluation',
    'authCode': 'eap.batteryLifeEvaluation',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryLifeEvaluation-xny/js/controller.js',
      predoURL + 'pages/predoBatteryLifeEvaluation-xny/js/directive.js',
      predoURL + 'pages/predoBatteryLifeEvaluation-xny/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'xnyVehicleOrgSelector',
      'bcPagination',
      'bcGrid',
      'bcPaginationDropDown',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'echarts',
      'JwBaseServices'
    ]
  },
  {
    'state': 'xnyBcPcBatteryLifeHistory-xny',
    'url': 'xnyBcPcBatteryLifeHistory-xny',
    'directive': 'xnyBcPcBatteryLifeHistory',
    'authCode': 'eap.batteryLifeHistory',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryLifeHistory-xny/js/controller.js',
      predoURL + 'pages/predoBatteryLifeHistory-xny/js/directive.js',
      predoURL + 'pages/predoBatteryLifeHistory-xny/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'xnyVehicleOrgSelector',
      'bcPagination',
      'bcGrid',
      'bcPaginationDropDown',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices'
    ]
  },
  {
    'state': 'xnyBcPcBatteryLifeTrace-xny',
    'url': 'xnyBcPcBatteryLifeTrace-xny',
    'directive': 'xnyBcPcBatteryLifeTrace',
    'authCode': 'eap.batteryLifeTrace',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryLifeTrace-xny/js/controller.js',
      predoURL + 'pages/predoBatteryLifeTrace-xny/js/directive.js',
      predoURL + 'pages/predoBatteryLifeTrace-xny/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'xnyVehicleOrgSelector',
      'bcPagination',
      'bcGrid',
      'bcPaginationDropDown',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'echarts',
      'JwBaseServices'
    ]
  },
  {
    'state': 'bcPcFaultRecordList',
    'url': 'bcPcFaultRecordList',
    'directive': 'bcPcFaultRecordList',
    'authCode': 'eap.alarmDetail',
    'params': [
      'vehicleIds'
    ],
    'files': [
      predoURL + 'pages/predoFaultRecordList/js/controller.js',
      predoURL + 'pages/predoFaultRecordList/js/directive.js',
      predoURL + 'pages/predoFaultRecordList/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bdDateTimeField',
      'asyncPagination',
      'bcGridMenu',
      'bcPaginationDropDown',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices',
      'bcAgGrid'
    ]
  },
  {
    'state': 'bcPcFaultRecordSeriousList',
    'url': 'bcPcFaultRecordSeriousList',
    'directive': 'bcPcFaultRecordSeriousList',
    'authCode': 'eap.seriousAlarm',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultRecordSeriousList/js/controller.js',
      predoURL + 'pages/predoFaultRecordSeriousList/js/directive.js',
      predoURL + 'pages/predoFaultRecordSeriousList/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'asyncPagination',
      'bcGridMenu',
      'bcPaginationDropDown',
      'bcOrgSelector',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices',
      'bcAgGrid'
    ]
  },
  {
    'state': 'bcPcFaultRecordFrequentList',
    'url': 'bcPcFaultRecordFrequentList',
    'directive': 'bcPcFaultRecordFrequentList',
    'authCode': 'eap.highFreqAlarm',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultRecordFrequentList/js/controller.js',
      predoURL + 'pages/predoFaultRecordFrequentList/js/directive.js',
      predoURL + 'pages/predoFaultRecordFrequentList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'xnyVehicleOrgTree',
      'bcPagination',
      'bcGridMenu',
      'bcPaginationDropDown',
      'bcOrgSelector',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices',
      'bcAgGrid'
    ]
  }, {
    'state': 'bcPcFaultRecordRealtimeList',
    'url': 'bcPcFaultRecordRealtimeList',
    'directive': 'bcPcFaultRecordRealtimeList',
    'authCode': 'eap.realTimeAlarm',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultRecordRealtimeList/js/controller.js',
      predoURL + 'pages/predoFaultRecordRealtimeList/js/directive.js',
      predoURL + 'pages/predoFaultRecordRealtimeList/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'bcVehicleSelector',
      'bcPagination',
      'bcGridMenu',
      'bcPaginationDropDown',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices',
      'JwBaseServices',
      'bcAgGrid'
    ]
  }, {
    'state': 'bcPcCfwVersionList',
    'url': 'bcPcCfwVersionList',
    'directive': 'bcPcCfwVersionList',
    'authCode': 'eap.programVersion',
    'params': [
      'vehicleIds'
    ],
    'files': [
      predoURL + 'pages/predoCfwVersionList/js/controller.js',
      predoURL + 'pages/predoCfwVersionList/js/directive.js',
      predoURL + 'pages/predoCfwVersionList/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  }, {
    'state': 'jwPcFaultRecordList',
    'url': 'jwPcFaultRecordList',
    'directive': 'jwPcFaultRecordList',
    'authCode': 'eap.monitorRecord',
    'params': [
      'faultTypeId'
    ],
    'files': [
      predoURL + 'pages/predoFaultRecordList-jw/js/controller.js',
      predoURL + 'pages/predoFaultRecordList-jw/js/directive.js',
      predoURL + 'pages/predoFaultRecordList-jw/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'jwHandleNameSelector',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bcVehicleSelector',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'Utils'
    ]
  }, {
    'state': 'hwalbPcFaultRecordList',
    'url': 'hwalbPcFaultRecordList',
    'directive': 'hwalbPcFaultRecordList',
    'authCode': 'eap.monitorRecord',
    'params': [
      'faultTypeId'
    ],
    'files': [
      predoURL + 'pages/predoFaultRecordList-hwalb/js/controller.js',
      predoURL + 'pages/predoFaultRecordList-hwalb/js/directive.js',
      predoURL + 'pages/predoFaultRecordList-hwalb/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'jwHandleNameSelector',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bcVehicleSelector',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'Utils'
    ]
  },
  {
    'state': 'jwPcFaultDetail',
    'url': 'jwPcFaultDetail',
    'directive': 'jwPcFaultDetail',
    'authCode': 'eap.monitorRecord.detail',
    'params': [
      'vehicleInfo'
    ],
    'files': [
      predoURL + 'pages/predoPcFaultDetail/js/controller.js',
      predoURL + 'pages/predoPcFaultDetail/js/directive.js',
      predoURL + 'pages/predoPcFaultDetail/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'jwHandleNameSelector',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'bdRadioGroup',
      'bdMobileField',
      'echartsDiagram',
      'bcMapLib',
      'AppConfig',
      'bdTextInput',
      'bdTextArea',
      'bcVehicleSelector',
      'jwFaultSelector',
      'jwFaultDriverSelector',
      'bcPaginationDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'Utils',
      'jwFinishRender',
      'jwVehicleDashboard',
      'FieldValidate'
    ]
  },
  {
    'state': 'hwalbPcFaultDetail',
    'url': 'hwalbPcFaultDetail',
    'directive': 'hwalbPcFaultDetail',
    'authCode': 'eap.monitorRecord.detail',
    'params': [
      'vehicleInfo'
    ],
    'files': [
      predoURL + 'pages/predoPcFaultDetail-hwalb/js/controller.js',
      predoURL + 'pages/predoPcFaultDetail-hwalb/js/directive.js',
      predoURL + 'pages/predoPcFaultDetail-hwalb/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'jwHandleNameSelector',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'bdRadioGroup',
      'bdMobileField',
      'echartsDiagram',
      'bcMapLib',
      'AppConfig',
      'bdTextInput',
      'bdTextArea',
      'bcVehicleSelector',
      'jwFaultSelector',
      'jwFaultDriverSelector',
      'bcPaginationDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'Utils',
      'jwFinishRender',
      'jwVehicleDashboard',
      'FieldValidate'
    ]
  },
  {
    'state': 'jwPcFaultMonitorSettings',
    'url': 'jwPcFaultMonitorSettings',
    'directive': 'jwPcFaultMonitorSettings',
    'authCode': 'eap.alarm.param',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultMonitorSettings-jw/js/controller.js',
      predoURL + 'pages/predoFaultMonitorSettings-jw/js/directive.js',
      predoURL + 'pages/predoFaultMonitorSettings-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bizCommon',
      'BizControlResolver',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcFaultLevelManage',
    'url': 'jwPcFaultLevelManage',
    'directive': 'jwPcFaultLevelManage',
    'authCode': 'eap.alarm.level',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultLevelManage-jw/js/controller.js',
      predoURL + 'pages/predoFaultLevelManage-jw/js/directive.js',
      predoURL + 'pages/predoFaultLevelManage-jw/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcPagination',
      'bdTextInput',
      'bdDropDown',
      'bcGrid',
      'bdTextArea',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'jwFilters'
    ]
  },
  {
    'state': 'bcPcMalfunctionRecordList',
    'url': 'bcPcMalfunctionRecordList',
    'directive': 'bcPcMalfunctionRecordList',
    'authCode': 'eap.faultRecordingDetail',
    'params': [
      'vehicleModelId',
      'malfunctionLevel',
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + '/pages/predoMalfunctionRecordList/js/controller.js',
      predoURL + '/pages/predoMalfunctionRecordList/js/directive.js',
      predoURL + '/pages/predoMalfunctionRecordList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleModelSelector',
      'bdDropDown',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'bcPcMalfunctionStatList',
    'url': 'bcPcMalfunctionStatList',
    'directive': 'bcPcMalfunctionStatList',
    'authCode': 'eap.faultStatisticsDetail',
    'params': [
      'statObjType',
      'statObjId',
      'statRangeType',
      'statRangeId',
      'periodType',
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + '/pages/predoMalfunctionStatList/js/controller.js',
      predoURL + '/pages/predoMalfunctionStatList/js/directive.js',
      predoURL + '/pages/predoMalfunctionStatList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcMalfunctionStatOverview',
    'url': 'bcPcMalfunctionStatOverview',
    'directive': 'bcPcMalfunctionStatOverview',
    'authCode': 'eap.failureStatistics',
    'params': [
      'statObjType',
      'statObjId',
      'statRangeType',
      'statRangeId',
      'periodType',
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + '/pages/predoMalfunctionStatOverview/js/controller.js',
      predoURL + '/pages/predoMalfunctionStatOverview/js/directive.js',
      predoURL + '/pages/predoMalfunctionStatOverview/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcCcMalfunctionStatSummary',
      'bcCcMalfunctionStatIndicator',
      'bcCcMalfunctionStatList',
      'bizCommon',
      'DateUtils',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'bcPcRepairStatOverview',
    'url': 'bcPcRepairStatOverview',
    'directive': 'bcPcRepairStatOverview',
    'authCode': 'eap.repairStatistics',
    'params': [
      'statObjType',
      'statObjId',
      'statRangeType',
      'statRangeId',
      'periodType',
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + '/pages/predoRepairStatOverview/js/controller.js',
      predoURL + '/pages/predoRepairStatOverview/js/directive.js',
      predoURL + '/pages/predoRepairStatOverview/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcCcRepairStatSummary',
      'bcCcRepairStatIndicator',
      'bcCcRepairStatList',
      'bizCommon',
      'DateUtils',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcFaultInRepairVehicleList',
    'url': 'jwPcFaultInRepairVehicleList',
    'directive': 'jwPcFaultInRepairVehicleList',
    'authCode': 'eap.mapMonitor',
    'files': [
      predoURL + 'pages/predoFaultInRepairVehicleList-jw/js/controller.js',
      predoURL + 'pages/predoFaultInRepairVehicleList-jw/js/directive.js',
      predoURL + 'pages/predoFaultInRepairVehicleList-jw/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'Utils',
      'AppConfig',
      'DataProvider',
      'utilFilters',
      'jwVehicleSelector'
    ]
  },
  {
    'state': 'jydWarningMessage',
    'url': 'jydWarningMessage',
    'directive': 'jydWarningMessage',
    'authCode': 'eap.alarmRecord',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      predoURL + 'pages/predoWarningMessage-jyd/js/controller.js',
      predoURL + 'pages/predoWarningMessage-jyd/js/directive.js',
      predoURL + 'pages/predoWarningMessage-jyd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'jydVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bdDateField',
      'bdDateTimeField',
      'bdDropDown',
      'bcAddress',
      'User',
      'bcXGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'jwPcFaultObjectsMap',
    'url': 'jwPcFaultObjectsMap',
    'directive': 'jwPcFaultObjectsMap',
    'authCode': 'eap.mapMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      predoURL + 'pages/predoObjectsMap-jw/js/controller.js',
      predoURL + 'pages/predoObjectsMap-jw/js/directive.js',
      predoURL + 'pages/predoObjectsMap-jw/js/JwVehicleTreeCtrl.js',
      predoURL + 'pages/predoObjectsMap-jw/js/JwFaultListCtrl.js',
      predoURL + 'pages/predoObjectsMap-jw/js/JwVehicleListCtrl.js',
      predoURL + 'pages/predoObjectsMap-jw/js/JwVehicleMonitorCtrl.js',
      predoURL + 'pages/predoObjectsMap-jw/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'jwFaultVehicleTree',
      'bcObjectTree',
      'bcAddress',
      'bdDateField',
      'bdDateTimeField',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement',
      'utilFilters',
      'jwFilters',
      'jwVehicleDashboard',
      'jwFinishRender',
      'echartsDiagram',
      'jwFaultSelector',
      'jwFaultDriverSelector',
      'bdMobileField',
      'bcPaginationDropDown',
      'FieldValidate',
      'bdDateFieldFault',
      'bdDropDownFault',
      'ecomodelAirConditionMonitorPanel',
      'tyreStateMonitor'
    ]
  },
  {
    'state': 'hwalbPcFaultObjectsMap',
    'url': 'hwalbPcFaultObjectsMap',
    'directive': 'hwalbPcFaultObjectsMap',
    'authCode': 'eap.mapMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      predoURL + 'pages/predoObjectsMap-hwalb/js/controller.js',
      predoURL + 'pages/predoObjectsMap-hwalb/js/directive.js',
      predoURL + 'pages/predoObjectsMap-hwalb/js/JwVehicleTreeCtrl.js',
      predoURL + 'pages/predoObjectsMap-hwalb/js/JwFaultListCtrl.js',
      predoURL + 'pages/predoObjectsMap-hwalb/js/JwVehicleListCtrl.js',
      predoURL + 'pages/predoObjectsMap-hwalb/js/JwVehicleMonitorCtrl.js',
      predoURL + 'pages/predoObjectsMap-hwalb/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'jwFaultVehicleTree',
      'bcObjectTree',
      'bcAddress',
      'bdDateField',
      'bdDateTimeField',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement',
      'utilFilters',
      'jwFilters',
      'jwVehicleDashboard',
      'jwFinishRender',
      'echartsDiagram',
      'jwFaultSelector',
      'jwFaultDriverSelector',
      'bdMobileField',
      'bcPaginationDropDown',
      'FieldValidate',
      'bdDateFieldFault',
      'bdDropDownFault',
      'ecomodelAirConditionMonitorPanel',
      'tyreStateMonitor'
    ]
  },
  {
    'state': 'platformRepairmanDetail',
    'url': 'platformRepairmanDetail',
    'directive': 'bcPcRepairmanDetail',
    'authCode': 'eap.repairmanDetail',
    'params': [
      'repairmanId'
    ],
    'files': [
      predoURL + 'pages/predoRepairmanDetail/js/controller.js',
      predoURL + 'pages/predoRepairmanDetail/js/directive.js',
      predoURL + 'pages/predoRepairmanDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcRepairmanSummary',
      'bcCcRepairOrderList',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcRepairWorkerArchive',
    'url': 'jwPcRepairWorkerArchive',
    'directive': 'jwPcRepairWorkerArchive',
    'authCode': 'eap.user.archive',
    'params': ['personId'],
    'files': [
      predoURL + 'pages/predoRepairWorkerArchive-jw/js/controller.js',
      predoURL + 'pages/predoRepairWorkerArchive-jw/js/directive.js',
      predoURL + 'pages/predoRepairWorkerArchive-jw/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateField',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'DateUtils',
      'Utils',
      'DataProvider',
      'utilFilters',
      'jwFilters'
    ]
  },
  // 新增CAN总线状态监控 2017.07.19 liwdh
  {
    'state': 'xnyPcCanBusStatusChart',
    'url': 'xnyPcCanBusStatusChart',
    'directive': 'xnyPcCanBusStatusChart',
    'authCode': 'eap.canBusStatusChart',
    'params': [],
    'files': [
      predoURL + 'pages/predoCanBusStatusChart-xny/js/controller.js',
      predoURL + 'pages/predoCanBusStatusChart-xny/js/directive.js',
      predoURL + 'pages/predoCanBusStatusChart-xny/js/service.js',
      predoURL + 'pages/predoCanBusStatusChart-xny/skin/default/css/all.css'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyVehicleTree',
      'bdDateTimeField',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'dynamicDirective',
      'echarts3'
    ]
  },
  // 新增Can数据报文解析图表 2017.07.19 liwdh
  {
    'state': 'xnyPcCanFilesChart',
    'url': 'xnyPcCanFilesChart',
    'directive': 'xnyPcCanFilesChart',
    'authCode': 'eap.vehicleTerminalFile.chart',
    'params': ['terminalFilesId', 'vehicleId'],
    'files': [
      predoURL + 'pages/predoCanFilesChart-xny/js/controller.js',
      predoURL + 'pages/predoCanFilesChart-xny/js/directive.js',
      predoURL + 'pages/predoCanFilesChart-xny/js/service.js',
      predoURL + 'pages/predoCanFilesChart-xny/skin/default/css/all.css'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyCanQueryParamTree',
      'bdDateTimeField',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'dynamicDirective',
      'echarts3',
      'Utils'
    ]
  },
  {
    'state': 'xnyPcCanFilesChartAsc',
    'url': 'xnyPcCanFilesChartAsc',
    'directive': 'xnyPcCanFilesChartAsc',
    'authCode': 'eap.vehicleTerminalFile.chart',
    'params': ['terminalFilesId', 'vehicleId'],
    'files': [
      predoURL + 'pages/predoCanFilesChart-asc/js/controller.js',
      predoURL + 'pages/predoCanFilesChart-asc/js/directive.js',
      predoURL + 'pages/predoCanFilesChart-asc/js/service.js',
      predoURL + 'pages/predoCanFilesChart-asc/skin/default/css/all.css'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyCanQueryParamTree',
      'bdDateTimeField',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'dynamicDirective',
      'echarts3',
      'Utils'
    ]
  },
  {
    'state': 'predoWbReminder',
    'url': 'predoWbReminder',
    'directive': 'predoWbReminder',
    'authCode': 'eap.wbReminder',
    'files': [
      predoURL + 'pages/predoWbReminder/js/controller.js',
      predoURL + 'pages/predoWbReminder/js/directive.js',
      predoURL + 'pages/predoWbReminder/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bizCommon',
      'bcPagination',
      'BizControlResolver',
      'DateUtils',
      'TipService',
      'DataProvider',
      'I18n',
      'Utils'
    ]
  },
  {
    'state': 'bcPcRepairOrderDispatch',
    'url': 'bcPcRepairOrderDispatch',
    'directive': 'bcPcRepairOrderDispatch',
    'authCode': '',
    'params': [
      'vehicleId'
    ],
    'files': [
      predoURL + 'pages/predoRepairOrderDispatch/js/controller.js',
      predoURL + 'pages/predoRepairOrderDispatch/js/directive.js',
      predoURL + 'pages/predoRepairOrderDispatch/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcCcRepairmanSelector',
      'BizPageManager',
      'DateUtils',
      'Logger',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcFaultMultiDimensionStat',
    'url': 'bcPcFaultMultiDimensionStat',
    'directive': 'bcPcFaultMultiDimensionStat',
    'authCode': 'eap.faultMuliDimStas',
    'params': [],
    'files': [
      predoURL + 'pages/predoFaultMultiDimensionStat/js/controller.js',
      predoURL + 'pages/predoFaultMultiDimensionStat/js/directive.js',
      predoURL + 'pages/predoFaultMultiDimensionStat/js/service.js'
    ],
    'dependencies': [
      'echartsDiagram',
      'bdDateField',
      'jwPaginationDropDownSelector',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'bdDropDown',
      'JwBaseServices'
    ]

  },
  {
    'state': 'diagPcBatteryEarlyWarningDetail',
    'url': 'diagPcBatteryEarlyWarningDetail',
    'directive': 'diagPcBatteryEarlyWarningDetail',
    'authCode': 'eap.preFaultVehicle',
    'params': [
      'hisId',
      'compId',
      'vehicleId',
      'reportTime'
    ],
    'files': [
      predoURL + 'pages/predoBatteryEarlyWarningDetail/js/controller.js',
      predoURL + 'pages/predoBatteryEarlyWarningDetail/js/directive.js',
      predoURL + 'pages/predoBatteryEarlyWarningDetail/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'bcAgGrid',
      'bcAddress',
      'echarts3'
    ]
  }, {
    'state': 'diagPcBatteryEarlyWarningDetailXc',
    'url': 'diagPcBatteryEarlyWarningDetailXc',
    'directive': 'diagPcBatteryEarlyWarningDetailXc',
    'authCode': 'eap.preFaultVehicle',
    'params': [
      'hisId',
      'compId',
      'vehicleId',
      'reportTime'
    ],
    'files': [
      predoURL + 'pages/predoBatteryEarlyWarningDetail-xc/js/controller.js',
      predoURL + 'pages/predoBatteryEarlyWarningDetail-xc/js/directive.js',
      predoURL + 'pages/predoBatteryEarlyWarningDetail-xc/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'bcAgGrid',
      'bcAddress',
      'echarts3'
    ]
  },
  {
    'state': 'diagPcBatteryEarlyWarningMacroAnalysis',
    'url': 'diagPcBatteryEarlyWarningMacroAnalysis',
    'directive': 'diagPcBatteryEarlyWarningMacroAnalysis',
    'authCode': 'eap.batteryEarlyWarningMacroAnalysis',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryEarlyWarningMacroAnalysis/js/controller.js',
      predoURL + 'pages/predoBatteryEarlyWarningMacroAnalysis/js/directive.js',
      predoURL + 'pages/predoBatteryEarlyWarningMacroAnalysis/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'I18n',
      'DataProvider',
      'jwArrowDateField',
      'toggleFloatBar',
      'jwSlider',
      'jwDropDown',
      'echarts3'
    ]

  },
  {
    'state': 'diagPcBatteryEarlyWarningEntList',
    'url': 'diagPcBatteryEarlyWarningEntList',
    'directive': 'diagPcBatteryEarlyWarningEntList',
    'authCode': 'eap.preFaultVehicle',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryEarlyWarningEntList/js/controller.js',
      predoURL + 'pages/predoBatteryEarlyWarningEntList/js/directive.js',
      predoURL + 'pages/predoBatteryEarlyWarningEntList/js/service.js'
    ],
    'dependencies': [
      'jwPaginationDropDownSelector',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'jwDropDown',
      'bcAgGrid',
      'jwArrowDateField',
      'bcOtaOrgSelector',
      'toggleFloatBar',
      'bdTextInput'
    ]

  },
  {
    'state': 'diagPcBatteryEarlyWarningList',
    'url': 'diagPcBatteryEarlyWarningList',
    'directive': 'diagPcBatteryEarlyWarningList',
    'authCode': 'eap.preFaultVehicle',
    'params': [],
    'files': [
      predoURL + 'pages/predoBatteryEarlyWarningList/js/controller.js',
      predoURL + 'pages/predoBatteryEarlyWarningList/js/directive.js',
      predoURL + 'pages/predoBatteryEarlyWarningList/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'jwDropDown',
      'bcAgGrid',
      'xnyVehicleTree',
      'jwArrowDateField',
      'toggleFloatBar',
      'bdTextInput'
    ]

  },
  {
    'state': 'diagVehicleHealthStatus',
    'url': 'diagVehicleHealthStatus',
    'directive': 'diagVehicleHealthStatus',
    'authCode': 'eap.vehicle.health',
    'params': ['vehicleId', 'useType'],
    'files': [
      predoURL + 'pages/predoVehicleHealthReport-xny/js/controller.js',
      predoURL + 'pages/predoVehicleHealthReport-xny/js/directive.js',
      predoURL + 'pages/predoVehicleHealthReport-xny/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'BizPageManager',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAgGrid',
      'BcMapApi'
    ]

  },
  {
    'state': 'bcPcNtcRecordList',
    'url': 'bcPcNtcRecordList',
    'directive': 'bcPcNtcRecordList',
    'authCode': 'eap.ntcRecordList',
    'params': [
      'vehicleIds'
    ],
    'files': [
      predoURL + 'pages/predoNtcRecordList-xny/js/controller.js',
      predoURL + 'pages/predoNtcRecordList-xny/js/directive.js',
      predoURL + 'pages/predoNtcRecordList-xny/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bdDropDown',
      'bdDateTimeField',
      'jwArrowDateField',
      'asyncPagination',
      'bcAgGrid',
      'bcGridMenu',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices'
    ]
  },
  {
    'state': 'jwPcVehicleInsMgt',
    'url': 'jwPcVehicleInsMgt',
    'directive': 'jwPcVehicleInsMgt',
    'authCode': 'eap.vehicleArchives.vehicleInsMgt',
    'params': [],
    'files': [
      predoURL + 'pages/predoVehicleInsuranceManagement/js/controller.js',
      predoURL + 'pages/predoVehicleInsuranceManagement/js/directive.js',
      predoURL + 'pages/predoVehicleInsuranceManagement/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleSelector',
      'bdTextInput',
      'predoDropDown',
      'bcAgGrid',
      'bcGrid',
      'Utils',
      'jwArrowDateField',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'FieldValidate',
      'bdExcelImport'
    ]
  },
  {
    'state': 'jwPcVehicleInsEdit',
    'url': 'jwPcVehicleInsEdit',
    'directive': 'jwPcVehicleInsEdit',
    'authCode': 'eap.vehicleArchives.vehicleInsMgt',
    'params': [
      'insuranceId',
      'vehicleId'
    ],
    'files': [
      predoURL + 'pages/predoVehicleInsEdit/js/controller.js',
      predoURL + 'pages/predoVehicleInsEdit/js/directive.js',
      predoURL + 'pages/predoVehicleInsEdit/js/service.js'
    ],
    'dependencies': [
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'Utils',
      'DialogService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bdImageUpload',
      'bdDropDown',
      'bdTextInput',
      'jwArrowDateField',
      'bcVehicleSelector',
      'bcAgGrid',
      'bcGrid',
      'bdDateTimeField'
    ]
  },
  {
    'state': 'jwVehicleTicketBusinessMgt',
    'url': 'jwVehicleTicketBusinessMgt',
    'directive': 'jwVehicleTicketBusinessMgt',
    'authCode': 'eap.vehicleTicketBusinessMgt',
    'params': [],
    'files': [
      predoURL + 'pages/predoVehicleTicketBusinessManagement/js/controller.js',
      predoURL + 'pages/predoVehicleTicketBusinessManagement/js/directive.js',
      predoURL + 'pages/predoVehicleTicketBusinessManagement/js/service.js'
    ],
    'dependencies': [
      'jwPaginationDropDownSelector',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'jwDropDown',
      'bcAgGrid',
      'jwArrowDateField',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleSelector',
      'bdTextInput'
    ]
  },
  {
    'state': 'jwVehicleTicketBusinessEdit',
    'url': 'jwVehicleTicketBusinessEdit',
    'directive': 'jwVehicleTicketBusinessEdit',
    'authCode': 'eap.vehicleTicketBusinessMgt',
    'params': [
      'ticketBusinessId'
    ],
    'files': [
      predoURL + 'pages/predoVehicleTicketBusinessEdit/js/controller.js',
      predoURL + 'pages/predoVehicleTicketBusinessEdit/js/directive.js',
      predoURL + 'pages/predoVehicleTicketBusinessEdit/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'BizControlResolver',
      'jwArrowDateField',
      'bcVehicleSelector',
      'Utils',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwVehicleAccidentMgt',
    'url': 'jwVehicleAccidentMgt',
    'directive': 'jwVehicleAccidentMgt',
    'authCode': 'eap.vehicleArchives.vehicleAccidentMgt',
    'params': [],
    'files': [
      predoURL + 'pages/predoVehicleAccidentManagement/js/controller.js',
      predoURL + 'pages/predoVehicleAccidentManagement/js/directive.js',
      predoURL + 'pages/predoVehicleAccidentManagement/js/service.js'
    ],
    'dependencies': [
      'jwPaginationDropDownSelector',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'jwDropDown',
      'bcAgGrid',
      'jwArrowDateField',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleSelector',
      'bdTextInput'
    ]

  },
  {
    'state': 'jwVehicleAccidentEdit',
    'url': 'jwVehicleAccidentEdit',
    'directive': 'jwVehicleAccidentEdit',
    'authCode': 'eap.vehicleArchives.vehicleAccidentMgt',
    'params': [
      'trafficaccidentId'
    ],
    'files': [
      predoURL + 'pages/predoVehicleAccidentEdit/js/controller.js',
      predoURL + 'pages/predoVehicleAccidentEdit/js/directive.js',
      predoURL + 'pages/predoVehicleAccidentEdit/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'bdTextArea',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'BizControlResolver',
      'jwArrowDateField',
      'bcVehicleSelector',
      'I18n',
      'Utils',
      'DataProvider',
      'DialogService'
    ]
  },
  {
    'state': 'predoOperateLog',
    'url': 'predoOperateLog',
    'directive': 'predoOperateLog',
    'authCode': 'eap.operateLog',
    'files': [
      predoURL + 'pages/predoOperateLog/js/controller.js',
      predoURL + 'pages/predoOperateLog/js/directive.js',
      predoURL + 'pages/predoOperateLog/js/service.js'
    ],
    'dependencies': [
      'bcPaginationDropDown',
      'xPaginationDropDown',
      'bdTextInput',
      'bdTextArea',
      'bdDateTimeField',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcXGrid'
    ]
  }, {
    'state': 'predoEngineFaultRecordList',
    'url': 'predoEngineFaultRecordList',
    'directive': 'predoEngineFaultRecordList',
    'authCode': 'eap.engineFaultRecordList',
    'params': [],
    'files': [
      predoURL + 'pages/predoEngineFaultRecordList/js/controller.js',
      predoURL + 'pages/predoEngineFaultRecordList/js/directive.js',
      predoURL + 'pages/predoEngineFaultRecordList/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'jwArrowDateField',
      'asyncPagination',
      'bcGridMenu',
      'bcPaginationDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'JwBaseServices',
      'bdTextInput',
      'bcAgGrid'
    ]
  }
]
