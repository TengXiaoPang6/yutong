var asgoldUrl = 'asgold/' // 获取产品引用URL
/* *
 * 智能电池管理产品路由配置
 * 智能电池管理产品的功能页面在此进行配置
 * */
var asgoldRouter = [
  {
    'state': 'bcPcChargerBatteryList',
    'url': 'bcPcChargerBatteryList',
    'directive': 'bcPcChargerBatteryList',
    'authCode': 'eap.chagerPowerBattery',
    'params': [
      'vehicleIds'
    ],
    'files': [
      asgoldUrl + 'pages/asgoldChargerBatteryList/js/controller.js',
      asgoldUrl + 'pages/asgoldChargerBatteryList/js/directive.js',
      asgoldUrl + 'pages/asgoldChargerBatteryList/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'asyncPagination',
      'bcGrid',
      'Authorization',
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
    'state': 'bcPcQuickChangeBatteryList',
    'url': 'bcPcQuickChangeBatteryList',
    'directive': 'bcPcQuickChangeBatteryList',
    'authCode': 'eap.quickChangeBatteryAnalysis',
    'params': [],
    'files': [
      asgoldUrl + '/pages/asgoldQuickChangeBatteryList/js/controller.js',
      asgoldUrl + '/pages/asgoldQuickChangeBatteryList/js/directive.js',
      asgoldUrl + '/pages/asgoldQuickChangeBatteryList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyVehicleOrgSelector',
      'asyncPagination',
      'bdDateTimeField',
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
  },
  {
    'state': 'bcPcBatteryOverviewList',
    'url': 'bcPcBatteryOverviewList',
    'directive': 'bcPcBatteryOverviewList',
    'authCode': 'eap.powerBatteryAnalysis',
    'params': [],
    'files': [
      asgoldUrl + 'pages/asgoldBatteryOverviewList/js/controller.js',
      asgoldUrl + 'pages/asgoldBatteryOverviewList/js/directive.js',
      asgoldUrl + 'pages/asgoldBatteryOverviewList/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'xnyVehicleOrgSelector',
      'bcButtonGroup',
      'bdDateTimeField',
      'asyncPagination',
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
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'xnyBatteryAnalysis-xny',
    'url': 'xnyBatteryAnalysis-xny',
    'directive': 'xnyBatteryAnalysis',
    'authCode': 'eap.fuelCellReport',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      asgoldUrl + 'pages/asgoldBatteryAnalysis-xny/js/controller.js',
      asgoldUrl + 'pages/asgoldBatteryAnalysis-xny/js/directive.js',
      asgoldUrl + 'pages/asgoldBatteryAnalysis-xny/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'xnyVehicleOrgSelector',
      'bcPagination',
      'bdTextInput',
      'bdDateField',
      'bdDateTimeField',
      'bdDropDown',
      'bcAddress',
      'User',
      'bcAgGrid',
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
  }
]
