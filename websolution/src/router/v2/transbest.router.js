var transbestURL = 'transbest/' // 获取产品引用URL
/* *
 * 智能调度管理产品路由配置
 * 智能调度管理产品的功能页面在此进行配置
 * */
var transbestRouter = [
  {
    // 终端设备升级  (废弃)
    'state': 'transbestTerminalUpgrade',
    'url': 'transbestTerminalUpgrade',
    'directive': 'transbestTerminalUpgrade',
    'authCode': '',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestTerminalUpgrade/js/controller.js',
      transbestURL + 'pages/transbestTerminalUpgrade/js/directive.js',
      transbestURL + 'pages/transbestTerminalUpgrade/js/service.js'
    ],
    'dependencies': [
      'bcOrgTree',
      'bdTimeField',
      'bdDropDown',
      'bdTextInput',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'FieldValidate',
      'bcCell',
      'dynamicDirective'
    ]
  },
  {
    // 行车计划清单(非公交)
    'state': 'transbestVehicleScheduling-fgj',
    'url': 'transbestVehicleScheduling-fgj',
    'directive': 'transbestVehicleSchedulingFgj',
    'authCode': 'eap.schedulingPlanFGJ',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestVehicleScheduling-fgj/js/controller.js',
      transbestURL + 'pages/transbestVehicleScheduling-fgj/js/directive.js',
      transbestURL + 'pages/transbestVehicleScheduling-fgj/js/service.js'
    ],
    'dependencies': [
      'bcRouteTree',
      'bcMapLib',
      'bcCcCommonMap',
      'bcAddress',
      'bcCcMapLayerEnergyStation',
      'bcCcMapPoiSearch',
      'bcCcMapPoiManage',
      'bcCcObjectFloatPanel',
      'bizCommon',
      'BizPageManager',
      'Logger',
      'Utils',
      'User',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'TipService',
      'AppConfig',
      'coordtransform',
      'echartsDiagram',
      'PureDialogService',
      'DialogService',
      'bcVehicleSelector',
      'bcCell',
      'bcDriverSelector',
      'bdTimeDropDown',
      'bdExcelImport',
      'bdExcelImportBase'
    ]
  },
  {
    // 线路监控(非公交)
    'state': 'bcPcRouteMapMonitoring-fgj',
    'url': 'bcPcRouteMapMonitoring-fgj',
    'directive': 'bcPcRouteMapMonitoringFgj',
    'authCode': 'eap.routeMonitorFGJ',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteMapMonitoring-fgj/js/controller.js',
      transbestURL + 'pages/transbestRouteMapMonitoring-fgj/js/directive.js',
      transbestURL + 'pages/transbestRouteMapMonitoring-fgj/js/service.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcMessageCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/service.js'

    ],
    'dependencies': [
      'bcRouteTree',
      'bcMapLib',
      'bcCcCommonMap',
      'bcAddress',
      'bcCcMapLayerEnergyStation',
      'bcCcMapPoiSearch',
      'bcCcMapPoiManage',
      'bcCcObjectFloatPanel',
      'bizCommon',
      'BizPageManager',
      'Logger',
      'Utils',
      'User',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'TipService',
      'AppConfig',
      'coordtransform',
      'echartsDiagram',
      'PureDialogService',
      'DialogService'
    ]
  },
  {
    // 调度业务设置
    'state': 'transbestParameterMaintenance',
    'url': 'transbestParameterMaintenance',
    'directive': 'transbestParameterMaintenance',
    'authCode': 'eap.realScheduling',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestParameterMaintenance/js/controller.js',
      transbestURL + 'pages/transbestParameterMaintenance/js/directive.js',
      transbestURL + 'pages/transbestParameterMaintenance/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdTimeField',
      'bdDropDown',
      'bdTextInput',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'FieldValidate',
      'dynamicDirective',
      'bdCheckSwitch'
    ]
  },
  {
    // 日历维护
    'state': 'transbestCalendarConfigure',
    'url': 'transbestCalendarConfigure',
    'directive': 'transbestCalendarConfigure',
    'authCode': 'eap.calendar',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestCalendarConfigure/js/controller.js',
      transbestURL + 'pages/transbestCalendarConfigure/js/directive.js',
      transbestURL + 'pages/transbestCalendarConfigure/js/service.js'
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
      'utilFilters',
      'Authorization'
    ]
  },
  {
    // 线路告警统计
    'state': 'transbestRouteAlarmStatistics-zndd',
    'url': 'transbestRouteAlarmStatistics-zndd',
    'directive': 'transbestRouteAlarmStatistics',
    'authCode': 'eap.alarmReport',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteAlarmStatistics-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteAlarmStatistics-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteAlarmStatistics-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'bcDriverTree',
      'FieldValidate',
      'bcDriverSelector',
      'bcAddress',
      'bdArrowDateField'
    ]
  },
  {
    // 首末班发车正点率
    'state': 'transbestCorrectTimeShiftRateStatistics-zndd',
    'url': 'transbestCorrectTimeShiftRateStatistics-zndd',
    'directive': 'transbestCorrectTimeShiftRateStatistics',
    'authCode': 'eap.first.punctuality',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestCorrectTimeShiftRateStatistics-zndd/js/controller.js',
      transbestURL + 'pages/transbestCorrectTimeShiftRateStatistics-zndd/js/directive.js',
      transbestURL + 'pages/transbestCorrectTimeShiftRateStatistics-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'bcDriverTree',
      'FieldValidate',
      'bcDriverSelector',
      'bdArrowDateField'
    ]
  },
  {
    // 趟次正点率
    'state': 'transbestCorrectTimeTripRateStatistics-zndd',
    'url': 'transbestCorrectTimeTripRateStatistics-zndd',
    'directive': 'transbestCorrectTimeTripRateStatistics',
    'authCode': 'eap.trip.punctuality',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestCorrectTimeTripRateStatistics-zndd/js/controller.js',
      transbestURL + 'pages/transbestCorrectTimeTripRateStatistics-zndd/js/directive.js',
      transbestURL + 'pages/transbestCorrectTimeTripRateStatistics-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'bcDriverTree',
      'FieldValidate',
      'bcDriverSelector',
      'bcDriverSelector',
      'bdArrowDateField'
    ]
  },
  {
    // 里程统计
    'state': 'transbestMileageStatistics-zndd',
    'url': 'transbestMileageStatistics-zndd',
    'directive': 'transbestMileageStatistics',
    'authCode': 'eap.mileageReport',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestMileageStatistics-zndd/js/controller.js',
      transbestURL + 'pages/transbestMileageStatistics-zndd/js/directive.js',
      transbestURL + 'pages/transbestMileageStatistics-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'bcDriverTree',
      'FieldValidate',
      'bcObjectSearchTree',
      'bdArrowDateField'
    ]
  },
  {
    // 趟次统计报表
    'state': 'transbestTripStatisticalReport-zndd',
    'url': 'transbestTripStatisticalReport-zndd',
    'directive': 'transbestTripStatisticalReport',
    'authCode': 'eap.tripReport',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestTripStatisticalReport-zndd/js/controller.js',
      transbestURL + 'pages/transbestTripStatisticalReport-zndd/js/directive.js',
      transbestURL + 'pages/transbestTripStatisticalReport-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'bcDriverTree',
      'FieldValidate',
      'bcDriverSelector',
      'bdArrowDateField'
    ]
  },
  {
    // 行车记录查询(非公交)
    'state': 'transbestTrainPlanInquiryMaintenance-fgj',
    'url': 'transbestTrainPlanInquiryMaintenance-fgj',
    'directive': 'transbestTrainPlanInquiryMaintenanceFgj',
    'authCode': 'eap.inquiryMaintenanceFGJ',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestTrainPlanInquiryMaintenance-fgj/js/controller.js',
      transbestURL + 'pages/transbestTrainPlanInquiryMaintenance-fgj/js/directive.js',
      transbestURL + 'pages/transbestTrainPlanInquiryMaintenance-fgj/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcCell',
      'bdArrowDateField',
      'FieldValidate',
      'Utils',
      'bcRouteTree'
    ]
  },
  {
    // 行车记录查询维护
    'state': 'transbestTrainPlanInquiryMaintenance-zndd',
    'url': 'transbestTrainPlanInquiryMaintenance-zndd',
    'directive': 'transbestTrainPlanInquiryMaintenance',
    'authCode': 'eap.inquiryMaintenance',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestTrainPlanInquiryMaintenance-zndd/js/controller.js',
      transbestURL + 'pages/transbestTrainPlanInquiryMaintenance-zndd/js/directive.js',
      transbestURL + 'pages/transbestTrainPlanInquiryMaintenance-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcCell',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'FieldValidate',
      'Utils',
      'bcDriverSelector'
    ]
  },
  {
    // 班组管理
    'state': 'transbestTeamManagement-zndd',
    'url': 'transbestTeamManagement-zndd',
    'directive': 'transbestTeamManagement',
    'authCode': 'eap.groupMng',
    'params': [
      'routeId',
      'scheduleId'
    ],
    'files': [
      transbestURL + 'pages/transbestTeamManagement-zndd/js/controller.js',
      transbestURL + 'pages/transbestTeamManagement-zndd/js/directive.js',
      transbestURL + 'pages/transbestTeamManagement-zndd/js/service.js'
    ],
    'dependencies': [
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleSelector',
      'FieldValidate',
      'bcPaginationDropDown'
    ]
  },
  {
    // 调度监控
    'state': 'transbestDispatchMonitoring-zndd',
    'url': 'transbestDispatchMonitoring-zndd',
    'directive': 'transbestDispatchMonitoring',
    'authCode': 'eap.depot',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestDispatchMonitoring-zndd/js/controller.js',
      transbestURL + 'pages/transbestDispatchMonitoring-zndd/js/directive.js',
      transbestURL + 'pages/transbestDispatchMonitoring-zndd/js/service.js',
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/service.js',
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/xnyPileDetailController.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcAgGrid',
      'bcGaoDeMap',
      'bdTimeDropDown',
      'bcPaginationDropDown',
      'FieldValidate',
      'bcDriverSelector',
      'Authorization'
    ]
  },
  {
    // 行车计划下达      (暂未使用 被替换掉了)
    'state': 'transbestVehicleSchedulingAssigned-zndd',
    'url': 'transbestVehicleSchedulingAssigned-zndd',
    'directive': 'transbestVehicleSchedulingAssigned',
    'authCode': '',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestVehicleSchedulingAssigned-zndd/js/controller.js',
      transbestURL + 'pages/transbestVehicleSchedulingAssigned-zndd/js/directive.js',
      transbestURL + 'pages/transbestVehicleSchedulingAssigned-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcRouteSelector',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcPaginationDropDown'
    ]
  },
  {
    // 行车计划安排
    'state': 'transbestVehicleSchedulingAssignedNew-zndd',
    'url': 'transbestVehicleSchedulingAssignedNew-zndd',
    'directive': 'transbestVehicleSchedulingAssignedNew',
    'authCode': 'eap.schdulingAsign',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestVehicleSchedulingAssignedNew-zndd/js/controller.js',
      transbestURL + 'pages/transbestVehicleSchedulingAssignedNew-zndd/js/directive.js',
      transbestURL + 'pages/transbestVehicleSchedulingAssignedNew-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcRouteSelector',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'FieldValidate',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcPaginationDropDown',
      'PureDialogService',
      'bdArrowDateField',
      'bcRouteTimeTable'
    ]
  },
  {
    // 行车计划清单
    'state': 'transbestVehicleScheduling-zndd',
    'url': 'transbestVehicleScheduling-zndd',
    'directive': 'transbestVehicleScheduling',
    'authCode': 'eap.schedulingPlan',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestVehicleScheduling-zndd/js/controller.js',
      transbestURL + 'pages/transbestVehicleScheduling-zndd/js/directive.js',
      transbestURL + 'pages/transbestVehicleScheduling-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcPaginationDropDown'
    ]
  },
  {
    // 线路时刻表
    'state': 'transbestRouteTimetable-zndd',
    'url': 'transbestRouteTimetable-zndd',
    'directive': 'transbestRouteTimetable',
    'authCode': 'eap.routeTimetable',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteTimetable-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteTimetable-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteTimetable-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcRouteSelector',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bdTimeDropDown',
      'FieldValidate',
      'bdExcelImport',
      'bdExcelImportBase',
      'xTree'
    ]
  },
  {
    // 自动生成时刻表
    'state': 'transbestRouteTimetableAuto',
    'url': 'transbestRouteTimetableAuto',
    'directive': 'transbestRouteTimetableAuto',
    'authCode': 'eap.routeTimetable.autoBuild',
    'params': [
      'scheduleId',
      'isSingleRoute'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteTimetableAuto/js/controller.js',
      transbestURL + 'pages/transbestRouteTimetableAuto/js/directive.js',
      transbestURL + 'pages/transbestRouteTimetableAuto/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcRouteSelector',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bdTimeDropDown',
      'FieldValidate',
      'xTree',
      'bdTimeDropDown',
      'bcCustomDirective',
      'bcRouteTimeTable'
    ]
  },
  {
    // 线路信息
    'state': 'transbestRouteManage-zndd',
    'url': 'transbestRouteManage-zndd',
    'directive': 'transbestRouteManage',
    'authCode': 'eap.route',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteManage-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteManage-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteManage-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDateTimeField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bdArrowDateField',
      'bdTimeDropDown',
      'jwArrowDateField'
    ]
  },
  {
    // 新建线路
    'state': 'transbestRouteNew-zndd',
    'url': 'transbestRouteNew-zndd',
    'directive': 'transbestRouteNew',
    'authCode': 'eap.station.add',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteNew-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteNew-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteNew-zndd/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateTimeField',
      'bdDateField',
      'bcVehicleSelector',
      'bcCcCommonMap',
      'bcAddress',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bdTextInput',
      'bdDropDown',
      'bcOrgSelector',
      'bcPaginationDropDown',
      'bdTimeDropDown'
    ]
  },
  {
    // 场站管理
    'state': 'transbestParkingManage-zndd',
    'url': 'transbestParkingManage-zndd',
    'directive': 'transbestParkingManage',
    'authCode': 'eap.depot',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestParkingManage-zndd/js/controller.js',
      transbestURL + 'pages/transbestParkingManage-zndd/js/directive.js',
      transbestURL + 'pages/transbestParkingManage-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bdExcelImportBase',
      'bcBindTreeDialog',
      'bdArrowDateField'
    ]
  },
  {
    // 站点信息
    'state': 'transbestStationManage-zndd',
    'url': 'transbestStationManage-zndd',
    'directive': 'transbestStationManage',
    'authCode': 'eap.station',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestStationManage-zndd/js/controller.js',
      transbestURL + 'pages/transbestStationManage-zndd/js/directive.js',
      transbestURL + 'pages/transbestStationManage-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'BcMapApi',
      'bdExcelUploadStation',
      'bcOuterClick',
      'bdExcelImportBase',
      'bcVehicleSelector',
      'bdArrowDateField'
    ]
  },
  {
    // 新建场站
    'state': 'transbestParkingNew-zndd',
    'url': 'transbestParkingNew-zndd',
    'directive': 'transbestParkingNew',
    'authCode': 'eap.station.add',
    'params': [
      'stationIds'
    ],
    'files': [
      transbestURL + 'pages/transbestParkingNew-zndd/js/controller.js',
      transbestURL + 'pages/transbestParkingNew-zndd/js/directive.js',
      transbestURL + 'pages/transbestParkingNew-zndd/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateTimeField',
      'bdDateField',
      'bcVehicleSelector',
      'bcCcCommonMap',
      'bcAddress',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bdTextInput',
      'bdDropDown',
      'bcOrgSelector',
      'GaodeMapApi',
      'bcBindTreeDialog'
    ]
  },
  {
    // 线路监控
    'state': 'bcPcRouteMapMonitoring-zndd',
    'url': 'bcPcRouteMapMonitoring-zndd',
    'directive': 'bcPcRouteMapMonitoring',
    'authCode': 'eap.routeMonitorZNDD',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteMapMonitoring-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteMapMonitoring-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteMapMonitoring-zndd/js/service.js'
    ],
    'dependencies': [
      'bcRouteTree',
      'bcMapLib',
      'bcCcCommonMap',
      'bcAddress',
      'bcCcMapLayerEnergyStation',
      'bcCcMapPoiSearch',
      'bcCcMapPoiManage',
      'bcCcObjectFloatPanel',
      'bizCommon',
      'BizPageManager',
      'Logger',
      'Utils',
      'User',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'TipService',
      'AppConfig',
      'coordtransform',
      'echartsDiagram'
    ]
  },
  {
    // 竹节图监控
    'state': 'bcPcRouteMonitorNew-zndd',
    'url': 'bcPcRouteMonitorNew-zndd',
    'directive': 'bcPcRouteMonitorNew',
    'authCode': 'eap.routeMonitor',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteMonitorNew-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteMonitorNew-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteMonitorNew-zndd/js/service.js'
    ],
    'dependencies': [
      'bcRouteTree',
      'bcCcRouteBambooNew',
      'bizCommon',
      'BizPageManager',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'TipService'
    ]
  },
  {
    // 站点概览
    'state': 'bcPcStationList-zndd',
    'url': 'bcPcStationList-zndd',
    'directive': 'bcPcStationListXc',
    'authCode': 'eap.station',
    'params': [
      'orgId',
      'stepVehicleId',
      'stationName',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestStationListXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestStationListXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestStationListXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateField',
      'bcVehicleSelector',
      'bcOrgSelector',
      'bcAddress',
      'bcCcCommonMap',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'bdExcelUploadStation',
      'DialogService',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcGridMenu',
      'bcGridMenu',
      'bdArrowDateField'
    ]
  },
  {
    // 新建站点
    'state': 'bcPcStationBatchEdit-zndd',
    'url': 'bcPcStationBatchEdit-zndd',
    'directive': 'bcPcStationBatchEdit',
    'authCode': 'eap.station.add',
    'params': [
      'stationIds'
    ],
    'files': [
      transbestURL + 'pages/transbestStationBatchEditXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestStationBatchEditXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestStationBatchEditXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateTimeField',
      'bdDateField',
      'bcVehicleSelector',
      'bcCcCommonMap',
      'bcAddress',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcVehicleTreeXc',
      'DialogService',
      'bcStationCollectDialog'
    ]
  },
  {
    // 站点档案
    'state': 'bcPcStationDetail-zndd',
    'url': 'bcPcStationDetail-zndd',
    'directive': 'bcPcStationDetailXc',
    'authCode': 'eap.stationDetail',
    'params': [
      'stationId',
      'objectId'
    ],
    'files': [
      transbestURL + 'pages/transbestStationDetailXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestStationDetailXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestStationDetailXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcCcStationSummary',
      'bcCcTravelRecordList',
      'bcCcStationRouteList',
      'bcCcPopPosition',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 线路信息 (废弃)
    'state': 'bcPcRouteList-zndd',
    'url': 'bcPcRouteList-zndd',
    'directive': 'bcPcRouteListXc',
    'authCode': 'eap.route',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteListXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteListXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteListXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTreeXc',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcNoAuthElement',
      'Utils'
    ]
  },
  {
    // 新建(编辑)线路 (废弃)
    'state': 'bcPcRouteEditNew-zndd',
    'url': 'bcPcRouteEditNew-zndd',
    'directive': 'bcPcRouteEditXc',
    'authCode': 'eap.route.add',
    'params': [
      'routeId',
      'section',
      'routeType'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteEditXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteEditXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteEditXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'coordtransform',
      'AppConfig',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'bdDateField',
      'bdTimeField',
      'bdDateTimeField',
      'bdIntegerField',
      'bdTextArea',
      'bcStationSelectNew',
      'bcCcCommonMap',
      'bcRouteStationMap',
      'BcMapApi',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'Logger',
      'Skin',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcOuterClick'
    ]
  },
  {
    // 关键点设置
    'state': 'bcSetKeyPoints-zndd',
    'url': 'bcSetKeyPoints-zndd',
    'directive': 'bcSetKeyPointsXc',
    'authCode': 'eap.route',
    'params': [
      'routeId'
    ],
    'files': [
      transbestURL + 'pages/transbestSetKeyPointsXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestSetKeyPointsXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestSetKeyPointsXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcRouteTree',
      'bcMapLib',
      'FieldValidate',
      'bcPagination',
      'bdTextInput',
      'bdDateTimeField',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
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
    // 线路档案
    'state': 'bcPcRouteDetail-zndd',
    'url': 'bcPcRouteDetail-zndd',
    'directive': 'bcPcRouteDetailXc',
    'authCode': 'eap.routeDetail',
    'params': [
      'routeId',
      'objectId'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteDetailXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestRouteDetailXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestRouteDetailXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcCcRouteSummary',
      'bcCcRouteBamboo',
      'bcCcRoutePath',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 司乘档案
    'state': 'bcPcConductorDetail',
    'url': 'bcPcConductorDetail',
    'directive': 'bcPcConductorDetailXc',
    'authCode': 'eap.passengersDetail',
    'params': [
      'conductorId',
      'objectId'
    ],
    'files': [
      transbestURL + 'pages/transbestConductorDetailXc-zndd/js/controller.js',
      transbestURL + 'pages/transbestConductorDetailXc-zndd/js/directive.js',
      transbestURL + 'pages/transbestConductorDetailXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcCcConductorSummary',
      'bcCcTripListAxxc',
      'bizCommon',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 站点概览
    'state': 'bcPcStationList-xc',
    'url': 'bcPcStationList-xc',
    'directive': 'bcPcStationListXc',
    'authCode': 'eap.station',
    'params': [
      'orgId',
      'stepVehicleId',
      'stationName',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestStationListXc-xc/js/controller.js',
      transbestURL + 'pages/transbestStationListXc-xc/js/directive.js',
      transbestURL + 'pages/transbestStationListXc-xc/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcGridMenu',
      'bdDateField',
      'bcVehicleSelector',
      'bcOrgSelector',
      'bcAddress',
      'bcCcCommonMap',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    // 站点概览（乐享宇通）
    'state': 'bcPcStationList-lxyt',
    'url': 'bcPcStationList-lxyt',
    'directive': 'bcPcStationListLxyt',
    'authCode': 'eap.stationLxyt',
    'params': [
      'orgId',
      'stepVehicleId',
      'stationName',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestStationListXc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestStationListXc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestStationListXc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcGridMenu',
      'bdDateField',
      'bcVehicleSelector',
      'bcOrgSelector',
      'bcAddress',
      'bcCcCommonMap',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    // 站点档案
    'state': 'bcPcStationDetail-xc',
    'url': 'bcPcStationDetail-xc',
    'directive': 'bcPcStationDetailXc',
    'authCode': 'eap.stationDetail',
    'params': [
      'stationId',
      'objectId'
    ],
    'files': [
      transbestURL + 'pages/transbestStationDetailXc-xc/js/controller.js',
      transbestURL + 'pages/transbestStationDetailXc-xc/js/directive.js',
      transbestURL + 'pages/transbestStationDetailXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcCcStationSummary',
      'bcCcTravelRecordList',
      'bcCcStationRouteList',
      'bcCcPopPosition',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 新建站点
    'state': 'bcPcStationBatchEdit-xc',
    'url': 'bcPcStationBatchEdit-xc',
    'directive': 'bcPcStationBatchEditXc',
    'authCode': 'eap.station.add',
    'params': [
      'stationIds'
    ],
    'files': [
      transbestURL + 'pages/transbestStationBatchEditXc-xc/js/controller.js',
      transbestURL + 'pages/transbestStationBatchEditXc-xc/js/directive.js',
      transbestURL + 'pages/transbestStationBatchEditXc-xc/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateTimeField',
      'bcVehicleSelector',
      'bcCcCommonMap',
      'bcAddress',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcStationCollectDialog',
      'jwArrowDateField'
    ]
  },
  {
    // 新建站点 (乐享宇通)
    'state': 'bcPcStationBatchEdit-lxyt',
    'url': 'bcPcStationBatchEdit-lxyt',
    'directive': 'bcPcStationBatchEditLxyt',
    'authCode': 'eap.stationLxyt.add',
    'params': [
      'stationIds'
    ],
    'files': [
      transbestURL + 'pages/transbestStationBatchEditXc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestStationBatchEditXc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestStationBatchEditXc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateTimeField',
      'bcVehicleSelector',
      'bcCcCommonMap',
      'bcAddress',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcStationCollectDialog',
      'jwArrowDateField'
    ]
  },
  {
    // 线路管理(校车)
    'state': 'bcPcRouteList-xc',
    'url': 'bcPcRouteList-xc',
    'directive': 'bcPcRouteListXc',
    'authCode': 'eap.route',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteListXc-xc/js/controller.js',
      transbestURL + 'pages/transbestRouteListXc-xc/js/directive.js',
      transbestURL + 'pages/transbestRouteListXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcGridMenu',
      'bcRouteTree',
      'bcVehicleTreeXc',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
    // 线路管理(乐享宇通)
    'state': 'bcPcRouteList-lxyt',
    'url': 'bcPcRouteList-lxyt',
    'directive': 'bcPcRouteListLxyt',
    'authCode': 'eap.routeLxyt',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteListXc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestRouteListXc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestRouteListXc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcGridMenu',
      'bcRouteTree',
      'bcVehicleTreeXc',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
    // 新建（编辑）线路(校车)
    'state': 'bcPcRouteEditNew-xc',
    'url': 'bcPcRouteEditNew-xc',
    'directive': 'bcPcRouteEditXc',
    'authCode': 'eap.route.add',
    'params': [
      'routeId',
      'section',
      'routeType'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteEditXc-xc/js/controller.js',
      transbestURL + 'pages/transbestRouteEditXc-xc/js/directive.js',
      transbestURL + 'pages/transbestRouteEditXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'AppConfig',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'bdDateField',
      'bdTimeField',
      'bdDateTimeField',
      'bdIntegerField',
      'bdTextArea',
      'bcStationSelectNew',
      'bcCcCommonMap',
      'bcRouteStationMap',
      'BcMapApi',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'Logger',
      'Skin',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcOuterClick'
    ]
  },
  {
    // 新建（编辑）线路(乐享宇通)
    'state': 'bcPcRouteEditNew-lxyt',
    'url': 'bcPcRouteEditNew-lxyt',
    'directive': 'bcPcRouteEditLxyt',
    'authCode': 'eap.routeLxyt.add',
    'params': [
      'routeId',
      'section',
      'routeType'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteEditXc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestRouteEditXc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestRouteEditXc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'AppConfig',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'bdDateField',
      'bdTimeField',
      'bdDateTimeField',
      'bdIntegerField',
      'bdTextArea',
      'bcStationSelectNew',
      'bcCcCommonMap',
      'bcRouteStationMap',
      'BcMapApi',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'Logger',
      'Skin',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcOuterClick'
    ]
  },
  {
    // 线路档案
    'state': 'bcPcRouteDetail-xc',
    'url': 'bcPcRouteDetail-xc',
    'directive': 'bcPcRouteDetailXc',
    'authCode': 'eap.routeDetail',
    'params': [
      'routeId',
      'objectId'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteDetailXc-xc/js/controller.js',
      transbestURL + 'pages/transbestRouteDetailXc-xc/js/directive.js',
      transbestURL + 'pages/transbestRouteDetailXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcCcRouteSummary',
      'bcCcRouteBamboo',
      'bcCcRoutePath',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 线路监控(校车)
    'state': 'bcPcRouteMonitor-xc',
    'url': 'bcPcRouteMonitor-xc',
    'directive': 'bcPcRouteMonitorXc',
    'authCode': 'eap.routeMonitor',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteMonitorXc-xc/js/controller.js',
      transbestURL + 'pages/transbestRouteMonitorXc-xc/js/directive.js',
      transbestURL + 'pages/transbestRouteMonitorXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcRouteTree',
      'bcCcRouteBamboo',
      'bizCommon',
      'BizPageManager',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 乘客例外
    'state': 'bcPassengerLeaveList-xc',
    'url': 'bcPassengerLeaveList-xc',
    'directive': 'bcPassengerLeaveListXc',
    'authCode': 'eap.leaveMng',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestPassengerLeaveListXc-xc/js/controller.js',
      transbestURL + 'pages/transbestPassengerLeaveListXc-xc/js/directive.js',
      transbestURL + 'pages/transbestPassengerLeaveListXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcPassengerSelector',
      'bdDropDown',
      'bdDateField',
      'bdTextInput',
      'bcPagination',
      'BizControlResolver',
      'I18n',
      'bcAuthElement',
      'TipService',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'FieldValidate',
      'utilFilters'
    ]
  },
  {
    // 新建乘客例外
    'state': 'bcPassengerLeaveEdit-xc',
    'url': 'bcPassengerLeaveEdit-xc',
    'directive': 'bcPassengerLeaveEditXc',
    'authCode': 'eap.leaveMng.add',
    'params': [
      'leaveId'
    ],
    'files': [
      transbestURL + 'pages/transbestPassengerLeaveEditXc-xc/js/controller.js',
      transbestURL + 'pages/transbestPassengerLeaveEditXc-xc/js/directive.js',
      transbestURL + 'pages/transbestPassengerLeaveEditXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcPassengerSelect',
      'bdDateTimeField',
      'bdTextArea',
      'BizControlResolver',
      'I18n',
      'Utils',
      'TipService',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'FieldValidate',
      'utilFilters'
    ]
  },
  {
    // 乘客例外详情
    'state': 'bcPassengerLeave-xc',
    'url': 'bcPassengerLeave-xc',
    'directive': 'bcPassengerLeaveXc',
    'authCode': 'eap.leaveMng',
    'params': [
      'leaveId'
    ],
    'files': [
      transbestURL + 'pages/transbestPassengerLeaveXc-xc/js/controller.js',
      transbestURL + 'pages/transbestPassengerLeaveXc-xc/js/directive.js',
      transbestURL + 'pages/transbestPassengerLeaveXc-xc/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'I18n',
      'utilFilters',
      'bcAuthElement',
      'TipService',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'FieldValidate',
      'utilFilters'
    ]
  },
  {
    // 消息
    'state': 'xcBcVehicleMessageManage',
    'url': 'xcBcVehicleMessageManage',
    'directive': 'bcVehicleMessageManageXc',
    'authCode': 'eap.historyNews',
    'params': [
      'startTime',
      'endTime',
      'plate',
      'pageSize',
      'pageIndex',
      'groupBy'
    ],
    'files': [
      transbestURL + 'pages/transbestVehicleMessageManageXc-xc/js/controller.js',
      transbestURL + 'pages/transbestVehicleMessageManageXc-xc/js/directive.js',
      transbestURL + 'pages/transbestVehicleMessageManageXc-xc/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcVehicleTreeXc',
      'bdDateField',
      'bdCheckboxGroupDropDown',
      'bdTextInput',
      'bcCcObjectLogo',
      'bcPagination',
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
      'utilFilters',
      'bcAuthElement',
      'echartsDiagram'
    ]
  },
  {
    // 行程列表  (下发行程按钮)
    'state': 'xcPcTripListAxxc',
    'url': 'xcPcTripListAxxc',
    'directive': 'xcPcTripListAxxc',
    'authCode': 'eap.tripRecordTwo',
    'params': [
      'orgId',
      'routeId',
      'vehicleId',
      'tripStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestTripListAxxc/js/controller.js',
      transbestURL + 'pages/transbestTripListAxxc/js/directive.js',
      transbestURL + 'pages/transbestTripListAxxc/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleTreeXc',
      'bdDropDown',
      'bdTextInput',
      'bdDateField',
      'bcGrid',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    // 行程列表 (表格内容更多)
    'state': 'bcPcTripListAxxc-xc',
    'url': 'bcPcTripListAxxc-xc',
    'directive': 'bcPcTripListAxxc',
    'authCode': 'eap.tripRecord',
    'params': [
      'orgId',
      'routeId',
      'vehicleId',
      'tripStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestTripListAxxc-xc/js/controller.js',
      transbestURL + 'pages/transbestTripListAxxc-xc/js/directive.js',
      transbestURL + 'pages/transbestTripListAxxc-xc/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcGridMenu',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleTreeXc',
      'bdDropDown',
      'bdTextInput',
      'bdDateField',
      'bcGrid',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    // 行程列表 (表格内容更多  乐享宇通)
    'state': 'bcPcTripListAxxc-lxyt',
    'url': 'bcPcTripListAxxc-lxyt',
    'directive': 'bcPcTripListAxLxyt',
    'authCode': 'eap.tripRecordLxyt',
    'params': [
      'orgId',
      'routeId',
      'vehicleId',
      'tripStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestTripListAxxc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestTripListAxxc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestTripListAxxc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcGridMenu',
      'bcOrgSelector',
      'bcRouteSelector',
      'bcVehicleTreeXc',
      'bdDropDown',
      'bdTextInput',
      'bdDateField',
      'bcGrid',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    // 行程详情
    'state': 'bcPcTripDetailAxxc-xc',
    'url': 'bcPcTripDetailAxxc-xc',
    'directive': 'bcPcTripDetailAxxc',
    'authCode': 'eap.tripRecordDetail',
    'params': [
      'tripId'
    ],
    'files': [
      transbestURL + 'pages/transbestTripDetailAxxc-xc/js/controller.js',
      transbestURL + 'pages/transbestTripDetailAxxc-xc/js/directive.js',
      transbestURL + 'pages/transbestTripDetailAxxc-xc/js/service.js'
    ],
    'dependencies': [
      'bcCcTripBaseInfoAxxc',
      'bcCcTripArrivingInfo',
      'bcCcTripRunningLogAxxc',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Logger',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 行程详情 (乐享宇通)
    'state': 'bcPcTripDetailAxxc-lxyt',
    'url': 'bcPcTripDetailAxxc-lxyt',
    'directive': 'bcPcTripDetailAxLxyt',
    'authCode': 'eap.tripRecordLxytDetail',
    'params': [
      'tripId'
    ],
    'files': [
      transbestURL + 'pages/transbestTripDetailAxxc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestTripDetailAxxc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestTripDetailAxxc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bcCcTripBaseInfoAxxc',
      'bcCcTripArrivingInfo',
      'bcCcTripRunningLogAxxc',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Logger',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 学生刷卡记录概览
    'state': 'bcPcTravelRecordList-xc',
    'url': 'bcPcTravelRecordList-xc',
    'directive': 'bcPcTravelRecordListAxxc',
    'authCode': 'eap.stuCardRecord',
    'params': [
      'vehicleIds',
      'conductorIds',
      'routeIds'
    ],
    'files': [
      transbestURL + 'pages/transbestTravelRecordListAxxc-xc/js/controller.js',
      transbestURL + 'pages/transbestTravelRecordListAxxc-xc/js/directive.js',
      transbestURL + 'pages/transbestTravelRecordListAxxc-xc/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcGridMenu',
      'bdDateField',
      'bcVehicleTreeXc',
      'bcRouteSelector',
      'bcStationSelector',
      'bdCheckboxGroupDropDown',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 学生刷卡记录概览 (乐享宇通)
    'state': 'bcPcTravelRecordList-lxyt',
    'url': 'bcPcTravelRecordList-lxyt',
    'directive': 'bcPcTravelRecordListAxLxyt',
    'authCode': 'eap.stuCardRecordLxyt',
    'params': [
      'vehicleIds',
      'conductorIds',
      'routeIds'
    ],
    'files': [
      transbestURL + 'pages/transbestTravelRecordListAxxc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestTravelRecordListAxxc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestTravelRecordListAxxc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcGridMenu',
      'bdDateField',
      'bcVehicleTreeXc',
      'bcRouteSelector',
      'bcStationSelector',
      'bdCheckboxGroupDropDown',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 行程规划列表
    'state': 'bcPcTripDispatchListAxxc-xc',
    'url': 'bcPcTripDispatchListAxxc-xc',
    'directive': 'bcPcTripDispatchListAxxc',
    'authCode': 'eap.travelPlan',
    'params': [
      'routeId',
      'status'
    ],
    'files': [
      transbestURL + 'pages/transbestTripDispatchListAxxc-xc/js/controller.js',
      transbestURL + 'pages/transbestTripDispatchListAxxc-xc/js/directive.js',
      transbestURL + 'pages/transbestTripDispatchListAxxc-xc/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcGridMenu',
      'bcRouteTree',
      'bdDropDown',
      'bcGrid',
      'BizPageManager',
      'DialogService',
      'TipService',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 行程规划列表 (乐享宇通)
    'state': 'bcPcTripDispatchListAxxc-lxyt',
    'url': 'bcPcTripDispatchListAxxc-lxyt',
    'directive': 'bcPcTripDispatchListAxLxyt',
    'authCode': 'eap.travelPlanLxyt',
    'params': [
      'routeId',
      'status'
    ],
    'files': [
      transbestURL + 'pages/transbestTripDispatchListAxxc-lxyt/js/controller.js',
      transbestURL + 'pages/transbestTripDispatchListAxxc-lxyt/js/directive.js',
      transbestURL + 'pages/transbestTripDispatchListAxxc-lxyt/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcGridMenu',
      'bcRouteTree',
      'bdDropDown',
      'bcGrid',
      'BizPageManager',
      'DialogService',
      'TipService',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 新建（编辑）行程
    'state': 'xcPcTripPlanEdit-xc',
    'url': 'xcPcTripPlanEdit-xc',
    'directive': 'xcPcTripPlanEdit',
    'authCode': 'eap.travelPlan.add',
    'params': [
      'tripPlanId'
    ],
    'files': [
      transbestURL + 'pages/transbestTripPlanEdit-xc/js/controller.js',
      transbestURL + 'pages/transbestTripPlanEdit-xc/js/directive.js',
      transbestURL + 'pages/transbestTripPlanEdit-xc/js/service.js'
    ],
    'dependencies': [
      'bcRouteSelector',
      'bdDateField',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bdTextInput',
      'bdIntegerField',
      'bdTextArea',
      'bdTimeField',
      'bcVehicleSelect',
      'bcDriverSelect',
      'bcConductorSelect',
      'bcStudentSelect',
      'bdDropDown',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    // 新建（编辑、查看）行程 （乐享宇通）
    'state': 'xcPcTripPlanEdit-lxyt',
    'url': 'xcPcTripPlanEdit-lxyt',
    'directive': 'xcPcTripPlanEditLxyt',
    'authCode': 'eap.travelPlanLxyt.add',
    'params': [
      'tripPlanId',
      'disable'
    ],
    'files': [
      transbestURL + 'pages/transbestTripPlanEdit-lxyt/js/controller.js',
      transbestURL + 'pages/transbestTripPlanEdit-lxyt/js/directive.js',
      transbestURL + 'pages/transbestTripPlanEdit-lxyt/js/service.js'
    ],
    'dependencies': [
      'bcRouteSelector',
      'bdDateField',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bdTextInput',
      'bdIntegerField',
      'bdTextArea',
      'bdTimeField',
      'bcVehicleSelect',
      'bcDriverSelect',
      'bcConductorSelect',
      'bcStudentSelect',
      'bdDropDown',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bdTimeDropDown'
    ]
  },
  {
    // 查看行程
    'state': 'xcPcTripPlan-xc',
    'url': 'xcPcTripPlan-xc',
    'directive': 'xcPcTripPlan',
    'authCode': 'eap.travelPlan.add',
    'params': [
      'tripPlanId'
    ],
    'files': [
      transbestURL + 'pages/transbestTripPlan-xc/js/controller.js',
      transbestURL + 'pages/transbestTripPlan-xc/js/directive.js',
      transbestURL + 'pages/transbestTripPlan-xc/js/service.js'
    ],
    'dependencies': [
      'bcRouteSelector',
      'bdLabel',
      'bdDateField',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bdTextInput',
      'bdIntegerField',
      'bdTextArea',
      'bdTimeField',
      'bcVehicleSelect',
      'bcDriverSelect',
      'bcConductorSelect',
      'bcStudentSelect',
      'bdDropDown',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    // 线路管理
    'state': 'bcPcRouteListNew',
    'url': 'bcPcRouteListNew',
    'directive': 'bcPcRouteListNew',
    'authCode': 'eap.route',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteListNew/js/controller.js',
      transbestURL + 'pages/transbestRouteListNew/js/directive.js',
      transbestURL + 'pages/transbestRouteListNew/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
    // 线路管理  这个在柬埔寨使用 需要删除 对应修改菜单
    'state': 'jpzBcPcRouteList',
    'url': 'jpzBcPcRouteList',
    'directive': 'bcPcRouteListNew',
    'authCode': 'eap.route',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteListNew/js/controller.js',
      transbestURL + 'pages/transbestRouteListNew/js/directive.js',
      transbestURL + 'pages/transbestRouteListNew/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
    // 新建（编辑）线路
    'state': 'bcPcRouteEditNew',
    'url': 'bcPcRouteEditNew',
    'directive': 'bcPcRouteEditXc',
    'authCode': 'eap.route.add',
    'params': [
      'routeId',
      'section',
      'routeType'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteEditXc-xc/js/controller.js',
      transbestURL + 'pages/transbestRouteEditXc-xc/js/directive.js',
      transbestURL + 'pages/transbestRouteEditXc-xc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'AppConfig',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'bdDateField',
      'bdTimeField',
      'bdDateTimeField',
      'bdIntegerField',
      'bdTextArea',
      'bcStationSelectNew',
      'bcCcCommonMap',
      'bcRouteStationMap',
      'BcMapApi',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'Logger',
      'Skin',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcOuterClick'
    ]
  },
  {
    // 线路管理  机务版
    'state': 'jwPcRouteList-jw',
    'url': 'jwPcRouteList-jw',
    'directive': 'jwPcRouteList',
    'authCode': 'eap.route',
    'params': [
      'orgId',
      'routeName',
      'routeStatus',
      'startTime',
      'endTime'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteList-jw/js/controller.js',
      transbestURL + 'pages/transbestRouteList-jw/js/directive.js',
      transbestURL + 'pages/transbestRouteList-jw/js/service.js'
    ],
    'dependencies': [
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    // 新建（编辑）线路  机务版
    'state': 'jwPcRouteEdit-jw',
    'url': 'jwPcRouteEdit-jw',
    'directive': 'jwPcRouteEdit',
    'authCode': 'eap.route.add',
    'params': [
      'routeId',
      'section',
      'routeType'
    ],
    'files': [
      transbestURL + 'pages/transbestRouteEdit-jw/js/controller.js',
      transbestURL + 'pages/transbestRouteEdit-jw/js/directive.js',
      transbestURL + 'pages/transbestRouteEdit-jw/js/service.js'
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
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 定时调度信息设置
    'state': 'bcPcJobInfoList',
    'url': 'bcPcJobInfoList',
    'directive': 'bcPcJobInfoList',
    'authCode': 'eap.timeSchedulingSet',
    'params': [
      'jobName',
      'accountName',
      'jobState',
      'jobType',
      'orgId'
    ],
    'files': [
      transbestURL + 'pages/transbestJobInfoList-ky/js/controller.js',
      transbestURL + 'pages/transbestJobInfoList-ky/js/directive.js',
      transbestURL + 'pages/transbestJobInfoList-ky/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcGridMenu',
      'bcPagination',
      'bdTextInput',
      'bdDropDown',
      'FieldValidate',
      'FloatService',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 新建定时调度
    'state': 'bcPcJobInfoEdit',
    'url': 'bcPcJobInfoEdit',
    'directive': 'bcPcJobInfoEdit',
    'authCode': 'eap.timeScheduleInforSettings.add',
    'params': [
      'jobId',
      'bindStatus'
    ],
    'files': [
      transbestURL + 'pages/transbestJobInfoEdit-ky/js/controller.js',
      transbestURL + 'pages/transbestJobInfoEdit-ky/js/directive.js',
      transbestURL + 'pages/transbestJobInfoEdit-ky/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdIntegerField',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bdTextArea',
      'bdDateField',
      'bcRouteSelector',
      'bdDropDown',
      'bcVehicleSelect',
      'bdTimeField',
      'BizPageManager',
      'BizTypeResolver',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    // 新建关键位置
    'state': 'bcPcSetPointsEditXc',
    'url': 'bcPcSetPointsEditXc',
    'directive': 'bcPcSetPointsEditXc',
    'authCode': 'eap.keyLocationReminders.add',
    'params': [
      'pointsId',
      'operaType'
    ],
    'files': [
      transbestURL + 'pages/transbestSetPointsEditXc/js/controller.js',
      transbestURL + 'pages/transbestSetPointsEditXc/js/directive.js',
      transbestURL + 'pages/transbestSetPointsEditXc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'AppConfig',
      'bcGrid',
      'bdRadioGroup',
      'bdCheckboxGroup',
      'bcOrgSelector',
      'bdTextInput',
      'bdDropDown',
      'bdDateField',
      'bdTimeField',
      'bdDateTimeField',
      'bdIntegerField',
      'bdTextArea',
      'bcStationSelectNew',
      'bcCcCommonMap',
      'bcRouteStationMap',
      'BcMapApi',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'FloatService',
      'Logger',
      'Skin',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcOuterClick'
    ]
  },
  {
    // 关键位置概览
    'state': 'bcPcSetPoints',
    'url': 'bcPcSetPoints',
    'directive': 'bcPcSetPointsXc',
    'authCode': 'eap.keyLocationReminders',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestSetPointsXc/js/controller.js',
      transbestURL + 'pages/transbestSetPointsXc/js/directive.js',
      transbestURL + 'pages/transbestSetPointsXc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcGridMenu',
      'bcRouteTree',
      'bcVehicleTreeXc',
      'bcPagination',
      'bdTextInput',
      'bcRouteBind',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
    // 消息  客旅团版
    'state': 'kyBcVehicleMessageManage',
    'url': 'kyBcVehicleMessageManage',
    'directive': 'bcVehicleMessageManage',
    'authCode': 'eap.historyNews',
    'params': [
      'startTime',
      'endTime',
      'plate',
      'pageSize',
      'pageIndex',
      'groupBy'
    ],
    'files': [
      transbestURL + 'pages/transbestVehicleMessageManage-ky/js/controller.js',
      transbestURL + 'pages/transbestVehicleMessageManage-ky/js/directive.js',
      transbestURL + 'pages/transbestVehicleMessageManage-ky/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcVehicleTree',
      'bdDateField',
      'bdCheckboxGroupDropDown',
      'bdTextInput',
      'bcCcObjectLogo',
      'bcPagination',
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
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 运行时段管理
    'state': 'bcPcVehicleRunTimeList',
    'url': 'bcPcVehicleRunTimeList',
    'directive': 'bcPcVehicleRunTimeListXc',
    'authCode': 'eap.runtimeSet',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestVehicleRunTimeListXc/js/controller.js',
      transbestURL + 'pages/transbestVehicleRunTimeListXc/js/directive.js',
      transbestURL + 'pages/transbestVehicleRunTimeListXc/js/service.js'
    ],
    'dependencies': [
      'bdTimeField',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 司机刷卡记录
    'state': 'bcPcDriverSwipeCardInfoList',
    'url': 'bcPcDriverSwipeCardInfoList',
    'directive': 'bcPcDriverSwipeCardInfoList',
    'authCode': 'eap.driveCardRecord',
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
      transbestURL + 'pages/transbestDriverSwipeCardInfoList/js/controller.js',
      transbestURL + 'pages/transbestDriverSwipeCardInfoList/js/directive.js',
      transbestURL + 'pages/transbestDriverSwipeCardInfoList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcPagination',
      'bcDriverSelector',
      'bcOrgSelector',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 司机刷卡记录 校车版本
    'state': 'bcPcDriverSwipeCardInfoList-xc',
    'url': 'bcPcDriverSwipeCardInfoList-xc',
    'directive': 'bcPcDriverSwipeCardInfoListXc',
    'authCode': 'eap.driveCardRecord',
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
      transbestURL + 'pages/transbestDriverSwipeCardInfoList-xc/js/controller.js',
      transbestURL + 'pages/transbestDriverSwipeCardInfoList-xc/js/directive.js',
      transbestURL + 'pages/transbestDriverSwipeCardInfoList-xc/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bcGridMenu',
      'bdDateField',
      'bcPagination',
      'bcDriverSelector',
      'bcOrgSelector',
      'bcVehicleTreeXc',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    // 线路下发文件
    'state': 'transbestRouteFileSystem',
    'url': 'transbestRouteFileSystem',
    'directive': 'transbestRouteFileSystem',
    'authCode': 'eap.routeFile',
    'params': [],
    'files': [
      transbestURL + 'pages/transbestRouteFileSystem/js/controller.js',
      transbestURL + 'pages/transbestRouteFileSystem/js/directive.js',
      transbestURL + 'pages/transbestRouteFileSystem/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'FloatService',
      'FieldValidate',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcRouteSelector',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'AppConfig',
      'bcPaginationDropDown',
      'PureDialogService',
      'bdArrowDateField',
      'bdFileUpload',
      'bcInclude',
      'bcCell',
      'bcRouteFileIssued'
    ]
  },
  {
    'state': 'tomtest',
    'url': 'tomtest',
    'directive': 'tomtest',
    'authCode': 'eap.route.add',
    'params': [
      'jobId',
      'bindStatus'
    ],
    'files': [
      transbestURL + 'pages/_tomtest/js/controller.js',
      transbestURL + 'pages/_tomtest/js/directive.js',
      transbestURL + 'pages/_tomtest/js/service.js'
    ],
    'dependencies': [
      'bcAuthorityTree',
      'bdDateField',
      'DataProvider',
      'BizControlResolver',
      'Utils',
      'I18n',
      'dynamicDirective',
      'bdFileUpload',
      'bdDropDown',
      'User',
      'bdFileUploadXc',
      'BcMapApi',
      'bcCcCommonMapToolBox'
    ]
  },
  {
    // 测试使用
    'state': 'test-zndd',
    'url': 'test-zndd',
    'directive': 'transbestTrainPlanInquiryMaintenance',
    'authCode': 'eap.route',
    'params': [],
    'files': [
      transbestURL + 'pages/_test/js/controller.js',
      transbestURL + 'pages/_test/js/directive.js',
      transbestURL + 'pages/_test/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcRouteTree',
      'bcVehicleTree',
      'bcPagination',
      'bdTextInput',
      'bcRouteBindVehicle',
      'bdDateField',
      'bdDropDown',
      'bcGrid',
      'User',
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
      'bcEditTable',
      'bcNoAuthElement',
      'bcOrgSelector',
      'bcCcCommonMap',
      'GaodeMapApi',
      'bdExcelUploadStation',
      'bcVehicleSelector',
      'bcStationSelectNew',
      'BcMapApi',
      'coordtransform',
      'AppConfig',
      'bcGaoDeMap',
      'bcRouteSelector',
      'bdTimeDropDown',
      'FieldValidate',
      'Utils',
      'bcDriverSelector',
      'bcCell',
      'bdTextInput'
    ]
  }

]
