var dotaUrl = 'dota/' // 获取产品引用URL
/* *
 * 远程诊断与整车升级产品路由配置
 * 远程诊断与整车升级产品的功能页面在此进行配置
 * */
var dotaRouter = [
  {
    'state': 'xnyPcVehicleUpgrade',
    'url': 'xnyPcVehicleUpgrade',
    'directive': 'xnyPcVehicleUpgrade',
    'authCode': 'eap.xnyPcVehicleUpgrade',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      dotaUrl + 'pages/dotaVehicleUpgrade-xny/js/controller.js',
      dotaUrl + 'pages/dotaVehicleUpgrade-xny/js/directive.js',
      dotaUrl + 'pages/dotaVehicleUpgrade-xny/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcXGrid',
      'bdInputDropList',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'otaTerminalUpgrade',
    'url': 'otaTerminalUpgrade',
    'directive': 'otaTerminalUpgrade',
    'authCode': 'eap.otaUpgrade',
    'params': [
      'wbillId'
    ],
    'files': [
      dotaUrl + 'pages/dotaPcTerminalUpgrade-ota/js/controller.js',
      dotaUrl + 'pages/dotaPcTerminalUpgrade-ota/js/directive.js',
      dotaUrl + 'pages/dotaPcTerminalUpgrade-ota/js/service.js'
    ],
    'dependencies': [
      'jwPaginationDropDownSelector',
      'bdTextInput',
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
      'bcAuthElement',
      'jwDropDown',
      'otaGrid',
      'bdDateTimeField',
      'bcOtaOrgSelector',
      'toggleFloatBarThree',
      'Utils',
      'BizTypeResolver',
      'bizCommon',
      'bcSteps',
      'bcGridMenu',
      'jwArrowDateField'
    ]
  }
]
