var tyreURL = 'tyrewatch/' // 获取产品引用URL
/* *
 * 轮胎管理产品路由配置
 * 轮胎管理产品的功能页面在此进行配置
 * */
var tyreRouter = [{
  'state': 'jwPcTyreSetting',
  'url': 'jwPcTyreSetting',
  'directive': 'jwPcTyreSetting',
  'params': [],
  'files': [
    tyreURL + 'pages/tyreSetting/js/controller.js',
    tyreURL + 'pages/tyreSetting/js/directive.js',
    tyreURL + 'pages/tyreSetting/js/service.js'
  ],
  'dependencies': [
    'bcObjectTree',
    'bizCommon',
    'BizControlResolver',
    'DialogService',
    'TipService',
    'Utils',
    'DataProvider',
    'FieldValidate'
  ]
},
{
  'state': 'jwPcTyreArchive',
  'url': 'jwPcTyreArchive',
  'directive': 'jwPcTyreArchive',
  'authCode': '',
  'params': [],
  'files': [
    tyreURL + 'pages/tyreArchive/js/controller.js',
    tyreURL + 'pages/tyreArchive/js/directive.js',
    tyreURL + 'pages/tyreArchive/js/service.js'
  ],
  'dependencies': [
    'bdDropDown',
    'bcPagination',
    'bcGrid',
    'bdTextInput',
    'BizControlResolver',
    'BizPageManager',
    'TipService',
    'DataProvider',
    'Utils',
    'utilFilters',
    'jwFilters'
  ]
},
{
  'state': 'jwPcTyreUseRecord',
  'url': 'jwPcTyreUseRecord',
  'directive': 'jwPcTyreUseRecord',
  'authCode': '',
  'params': ['tyreCode'],
  'files': [
    tyreURL + 'pages/tyreUseRecord/js/controller.js',
    tyreURL + 'pages/tyreUseRecord/js/directive.js',
    tyreURL + 'pages/tyreUseRecord/js/service.js'
  ],
  'dependencies': [
    'bdDropDown',
    'bdDateField',
    'DateUtils',
    'bcPagination',
    'bcGrid',
    'bdTextInput',
    'BizControlResolver',
    'BizPageManager',
    'DialogService',
    'TipService',
    'DataProvider',
    'Utils',
    'utilFilters',
    'jwFilters'
  ]
},
{
  'state': 'jwPcAddTyreUseRecord',
  'url': 'jwPcAddTyreUseRecord',
  'directive': 'jwPcAddTyreUseRecord',
  'authCode': '',
  'params': [],
  'files': [
    tyreURL + 'pages/tyreAddUseRecord/js/controller.js',
    tyreURL + 'pages/tyreAddUseRecord/js/directive.js',
    tyreURL + 'pages/tyreAddUseRecord/js/service.js'
  ],
  'dependencies': [
    'bdDropDown',
    'bdDateField',
    'DateUtils',
    'bcPagination',
    'bcGrid',
    'bdTextInput',
    'BizControlResolver',
    'BizPageManager',
    'DialogService',
    'TipService',
    'DataProvider',
    'Utils',
    'utilFilters',
    'jwFilters',
    'FieldValidate',
    'bdTextArea',
    'jwDropDown',
    'jwInputAutoComplete'
  ]
},
{
  'state': 'jwPcAddTyreBasicInfo',
  'url': 'jwPcAddTyreBasicInfo',
  'directive': 'jwPcAddTyreBasicInfo',
  'authCode': '',
  'params': [],
  'files': [
    tyreURL + 'pages/tyreAddBasicInfo/js/controller.js',
    tyreURL + 'pages/tyreAddBasicInfo/js/directive.js',
    tyreURL + 'pages/tyreAddBasicInfo/js/service.js'
  ],
  'dependencies': [
    'bdRadioGroup',
    'bdDropDown',
    'bdDateField',
    'DateUtils',
    'bcPagination',
    'bcGrid',
    'bdTextInput',
    'BizControlResolver',
    'BizPageManager',
    'DialogService',
    'TipService',
    'DataProvider',
    'Utils',
    'utilFilters',
    'jwFilters',
    'FieldValidate',
    'bdTextArea',
    'jwDropDown',
    'jwInputAutoComplete'
  ]
},
{
  'state': 'jwPcEditTyreUseRecord',
  'url': 'jwPcEditTyreUseRecord',
  'directive': 'jwPcEditTyreUseRecord',
  'authCode': '',
  'params': ['id'],
  'files': [
    tyreURL + 'pages/tyreEditUseRecord/js/controller.js',
    tyreURL + 'pages/tyreEditUseRecord/js/directive.js',
    tyreURL + 'pages/tyreEditUseRecord/js/service.js'
  ],
  'dependencies': [
    'bdDropDown',
    'bdDateField',
    'DateUtils',
    'bcPagination',
    'bcGrid',
    'bdTextInput',
    'BizControlResolver',
    'BizPageManager',
    'DialogService',
    'TipService',
    'DataProvider',
    'Utils',
    'utilFilters',
    'jwFilters',
    'FieldValidate',
    'bdTextArea',
    'jwDropDown',
    'jwInputAutoComplete'
  ]
},
{
  'state': 'jwPcEditTyreBasicInfo',
  'url': 'jwPcEditTyreBasicInfo',
  'directive': 'jwPcEditTyreBasicInfo',
  'authCode': '',
  'params': ['tyreId'],
  'files': [
    tyreURL + 'pages/tyreEditBasicInfo/js/controller.js',
    tyreURL + 'pages/tyreEditBasicInfo/js/directive.js',
    tyreURL + 'pages/tyreEditBasicInfo/js/service.js'
  ],
  'dependencies': [
    'bdRadioGroup',
    'bdDropDown',
    'bdDateField',
    'DateUtils',
    'bcPagination',
    'bcGrid',
    'bdTextInput',
    'BizControlResolver',
    'BizPageManager',
    'DialogService',
    'TipService',
    'DataProvider',
    'Utils',
    'utilFilters',
    'jwFilters',
    'FieldValidate',
    'bdTextArea',
    'jwDropDown',
    'jwInputAutoComplete'
  ]
},
{
  'state': 'tyreManagementEntrance',
  'url': 'tyreManagementEntrance',
  'directive': 'tyreManagementEntrance',
  'authCode': 'eap.tyrewatch',
  'params': [],
  'files': [
    tyreURL + 'pages/tyreManagementEntrance/js/controller.js',
    tyreURL + 'pages/tyreManagementEntrance/js/directive.js',
    tyreURL + 'pages/tyreManagementEntrance/js/service.js'
  ],
  'dependencies': [
    'bcAuthElement'
  ]
},
{
  'state': 'tyreTPMSMonitor',
  'url': 'tyreTPMSMonitor',
  'directive': 'tpmsMonitor',
  'authCode': 'eap.tyre.tpms',
  'params': [],
  'files': [
    tyreURL + 'pages/tyreTPMSMonitor/js/controller.js',
    tyreURL + 'pages/tyreTPMSMonitor/js/directive.js',
    tyreURL + 'pages/tyreTPMSMonitor/js/service.js'
  ],
  'dependencies': [
    'tpmsVehicleTree',
    'bcPagination',
    'bcAuthElement'
  ]
}
]
