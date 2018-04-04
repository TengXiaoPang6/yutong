var leadsafeURL = 'leadsafe/' // 获取产品引用URL
/* *
 * 智能安全管理产品路由配置
 * 智能安全产品的功能页面在此进行配置
 * */
var leadsafeRouter = [
  /* 地图监控，重复*/
  {
    'state': 'kyBcPageObjectsMap',
    'url': 'kyBcPageObjectsMap',
    'directive': 'kyBcPageObjectsMap',
    'authCode': 'eap.mapMonitor',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcCancelEventCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcListenCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcMapTopbarCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcMessageCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcObjectTreeCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcPhotoCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcRealtimeDataCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcVehicleMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/mXcWarningCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-ky/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'BcMapApi',
      'FieldValidate',
      'bcCcCommonMapToolBox',
      'bcAddress',
      'bdDateTimeField',
      'bdDateField',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'bcVehicleVideo',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DialogService',
      'User',
      'Utils',
      'AppConfig',
      'BizControlResolver',
      'I18n',
      'TipService',
      'DateUtils',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement',
      'utilFilters',
      'bcCcCommonMap',
      'bcCcMapLayerEnergyStation',
      'bcCcMapPoiSearch',
      'bcCcMapPoiManage',
      'echartsDiagram'
    ]
  },
  {
    'state': 'xcBcPageObjectsMap',
    'url': 'xcBcPageObjectsMap',
    'directive': 'bcPageObjectsMapXc',
    'authCode': 'eap.mapMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcCancelEventCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcMapTopbarCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcMessageCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcObjectTreeCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcPhotoCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcVehicleMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcWarningCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/locusPrintCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/mXcVehicleInfoCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcAddressXc',
      'bcAddress',
      'bdDateTimeField',
      'bdDateField',
      'bdDateFieldXc',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'bdDropDownXc',
      'bcVehicleVideo',
      'bizCommon',
      'BizPageManager',
      'DialogService',
      'User',
      'Utils',
      'AppConfig',
      'BizControlResolver',
      'I18n',
      'TipService',
      'DateUtils',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement',
      'utilFilters',
      'echartsDiagram',
      'BcMapApi'
    ]
  },
  {
    'state': 'xnyBcPageObjectsMap',
    'url': 'xnyBcPageObjectsMap',
    'directive': 'xnyBcPageObjectsMap',
    'authCode': 'eap.vehicleMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/controller.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/directive.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/mXnyChargingPileMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/mXnyMapTopbarCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/mXnyObjectTreeCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/mXnyVehicleMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/mXnyWarningCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-xny/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'xnyVehicleTree',
      'xnyChargingPileTree',
      'bcAddress',
      'bdDateTimeField',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'bcCcVehicleDashboardXny',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'Skin',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'jpzBcPageObjectsMap',
    'url': 'jpzBcPageObjectsMap',
    'directive': 'xnyBcPageObjectsMap',
    'authCode': 'eap.mapMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/controller.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/directive.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/mXnyChargingPileMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/mXnyMapTopbarCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/mXnyObjectTreeCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/mXnyVehicleMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/mXnyWarningCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jpz/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
      'xnyChargingPileTree',
      'bcAddress',
      'bdDateTimeField',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'bcCcVehicleDashboardXny',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'Skin',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'jydBcPageObjectsMap',
    'url': 'jydBcPageObjectsMap',
    'directive': 'jydPageObjectsMap',
    'authCode': 'eap.mapMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/controller.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/directive.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/mXnyMapTopbarCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/mXnyObjectTreeCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/mXnyVehicleMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/mXnyWarningCtrl.js',
      leadsafeURL + 'pages/leadsafeObjectsMap-jyd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'jydVehicleTree',
      'bcAddress',
      'bdDateTimeField',
      'bcLocusBar',
      'bcXGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'Skin',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  // 机务新增故障状态
  {
    'state': 'faultObjectsMap',
    'url': 'faultObjectsMap',
    'directive': 'faultObjectsMap',
    'authCode': 'eap.mapMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/controller.js',
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/directive.js',
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/JwVehicleTreeCtrl.js',
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/JwFaultListCtrl.js',
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/JwVehicleListCtrl.js',
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/JwVehicleMonitorCtrl.js',
      leadsafeURL + 'pages/leadsafeFaultObjectsMap-jw/js/service.js'
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
      'bdDropDownFault'
    ]
  },
  /* 车辆状态查询*/
  {
    'state': 'jwPcFaultVehicleMonitorStatusList',
    'url': 'jwPcFaultVehicleMonitorStatusList',
    'directive': 'jwPcFaultVehicleMonitorStatusList',
    'authCode': 'eap.vehicleMonitorStatus',
    'params': [
      'healthState'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleMonitorStatusList-jw/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleMonitorStatusList-jw/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleMonitorStatusList-jw/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'jwVehicleSelector',
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
    'state': 'vehicleStateList',
    'url': 'vehicleStateList',
    'directive': 'vehicleStateList',
    'authCode': 'eap.safeVehicleSat',
    'params': [
      'healthState'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleStateList/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleStateList/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleStateList/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcPagination',
      'bcAddress',
      'bcGrid',
      'jwVehicleSelector',
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
    'state': 'kyPcVehicleList',
    'url': 'kyPcVehicleList',
    'directive': 'kyPcVehicleList',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleList-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleList-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleList-ky/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcExportDialog',
      'bcObjectSearchTree',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
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
    'state': 'xcVehicleState',
    'url': 'xcVehicleState',
    'directive': 'xcVehicleState',
    'authCode': 'eap.vehicleState',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleList-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleList-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleList-xc/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcExportDialog',
      'bcObjectSearchTree',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  /* 在线率统计*/
  {
    'state': 'bcPcVehicleOnlineRateList',
    'url': 'bcPcVehicleOnlineRateList',
    'directive': 'bcPcVehicleOnlineRateList',
    'authCode': 'eap.onlineRateStatistics',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleOnlineRateList/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleOnlineRateList/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleOnlineRateList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'DateUtils',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 充电机监控*/
  {
    'state': 'xnyPileMonitoring',
    'url': 'xnyPileMonitoring',
    'directive': 'xnyPileMonitoring',
    'authCode': 'eap.yutongChargerMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/controller.js',
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/directive.js',
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/service.js',
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/xnyPileDetailController.js',
      leadsafeURL + 'pages/leadsafePileMonitoring-xny/js/xnyPileListMonitorController.js'

    ],
    'dependencies': [
      'bcMapLib',
      'bcAddress',
      'bcLocusBar',
      'bcGrid',
      'xnySyncChargingPileTree',
      'bcPagination',
      'bdRadioGroup',
      'bdInputDropList',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'Skin',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'toggleFloatBar',
      'bcNoAuthElement'
    ]
  },
  /* 发消息,重复*/
  {
    'state': 'bcSendMessage',
    'url': 'bcSendMessage',
    'directive': 'bcSendMessageXc',
    'authCode': 'eap.sendMsg',
    'params': [
      'vehicleId',
      'objectIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeSendMessage/js/controller.js',
      leadsafeURL + 'pages/leadsafeSendMessage/js/directive.js',
      leadsafeURL + 'pages/leadsafeSendMessage/js/filter.js',
      leadsafeURL + 'pages/leadsafeSendMessage/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdTextInput',
      'bizCommon',
      'BizPageManager',
      'DialogService',
      'FieldValidate',
      'Logger',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 历史消息，重复*/
  // {
  //     "state": "kyBcVehicleMessageManage",
  //     "url": "kyBcVehicleMessageManage",
  //     "directive": "bcVehicleMessageManage",
  //     "authCode": "eap.historyNews",
  //     "params": [
  //         "startTime",
  //         "endTime",
  //         "plate",
  //         "pageSize",
  //         "pageIndex",
  //         "groupBy"
  //     ],
  //     "files": [
  //         leadsafeURL + "pages/leadsafeVehicleMessageManage-ky/js/controller.js",
  //         leadsafeURL + "pages/leadsafeVehicleMessageManage-ky/js/directive.js",
  //         leadsafeURL + "pages/leadsafeVehicleMessageManage-ky/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bdDropDown",
  //         "bcVehicleTree",
  //         "bdDateField",
  //         "bdCheckboxGroupDropDown",
  //         "bdTextInput",
  //         "bcCcObjectLogo",
  //         "bcPagination",
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "DialogService",
  //         "FieldValidate",
  //         "TipService",
  //         "Utils",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement"
  //     ]
  // },
  // {
  //     "state": "xcBcVehicleMessageManage",
  //     "url": "xcBcVehicleMessageManage",
  //     "directive": "bcVehicleMessageManageXc",
  //     "authCode": "eap.historyNews",
  //     "params": [
  //         "startTime",
  //         "endTime",
  //         "plate",
  //         "pageSize",
  //         "pageIndex",
  //         "groupBy"
  //     ],
  //     "files": [
  //         leadsafeURL + "pages/leadsafeVehicleMessageManage-xc/js/controller.js",
  //         leadsafeURL + "pages/leadsafeVehicleMessageManage-xc/js/directive.js",
  //         leadsafeURL + "pages/leadsafeVehicleMessageManage-xc/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bdDropDown",
  //         "bcVehicleTreeXc",
  //         "bdDateField",
  //         "bdCheckboxGroupDropDown",
  //         "bdTextInput",
  //         "bcCcObjectLogo",
  //         "bcPagination",
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "DialogService",
  //         "FieldValidate",
  //         "TipService",
  //         "Utils",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement",
  //         "echartsDiagram"
  //     ]
  // },
  /* 拍照片*/
  {
    'state': 'bcCapturePhoto',
    'url': 'bcCaptuePhoto',
    'directive': 'bcCapturePhoto',
    'authCode': 'eap.capture',
    'params': [
      'vehicleId',
      'objectIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeCapturePhoto/js/controller.js',
      leadsafeURL + 'pages/leadsafeCapturePhoto/js/directive.js',
      leadsafeURL + 'pages/leadsafeCapturePhoto/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bcCcPhotoSingle',
      'bcPhotoPanel',
      'bizCommon',
      'BizPageManager',
      'DialogService',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 照片,重复*/
  {
    'state': 'bcPhoto',
    'url': 'bcPhoto',
    'directive': 'bcPhoto',
    'authCode': 'eap.photo',
    'params': [
      'vehicleIds',
      'startTime',
      'endTime',
      'channelCodes',
      'tagIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeBcPhoto-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafeBcPhoto-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafeBcPhoto-ky/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcVehicleTree',
      'bdDateField',
      'bdCheckboxGroupDropDown',
      'bcCcPhotoSingle',
      'bcPagination',
      'bcPhotoPanel',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'Logger',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'xcBcPhoto',
    'url': 'xcBcPhoto',
    'directive': 'bcPhotoXc',
    'authCode': 'eap.photo',
    'params': [
      'vehicleIds',
      'startTime',
      'endTime',
      'channelCodes',
      'tagIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeBcPhoto-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeBcPhoto-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeBcPhoto-xc/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcVehicleTreeXc',
      'bdDateField',
      'bdCheckboxGroupDropDown',
      'bcCcPhotoSingle',
      'bcPagination',
      'bcPhotoPanel',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'Logger',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  // 深视创新，图像自动识别
  {
    'state': 'imageRecognition',
    'url': 'imageRecognition',
    'directive': 'imageRecognition',
    'authCode': 'eap.image',
    'params': [
      'vehicleIds',
      'startTime',
      'endTime',
      'channelCodes',
      'tagIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeImageRecognition/js/controller.js',
      leadsafeURL + 'pages/leadsafeImageRecognition/js/directive.js',
      leadsafeURL + 'pages/leadsafeImageRecognition/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcVehicleTree',
      'bdDateField',
      'bdCheckboxGroupDropDown',
      'bcCcPhotoSingle',
      'bcPagination',
      'bcPhotoPanelNew',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'Logger',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  // 车辆限速设置
  {
    'state': 'vehiclesPeedLimit',
    'url': 'vehiclesPeedLimit',
    'directive': 'vehiclesPeedLimit',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehiclesPeedLimit/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehiclesPeedLimit/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehiclesPeedLimit/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdInputDropList',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcAgGrid',
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
      'bcNoAuthElement',
      'bdDateField'
    ]
  },
  // 手动锁车设置
  {
    'state': 'xnyLockVehicle',
    'url': 'xnyLockVehicle',
    'directive': 'vehicleLockCar',
    'authCode': 'eap.vehicleLock',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleLockCar/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleLockCar/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleLockCar/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdInputDropList',
      'xnyVehicleTree',
      'xnyVehicleOrgSelector',
      'bcObjectSearchTree',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcAgGrid',
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
      'bcNoAuthElement',
      'bdDateField'
    ]
  },
  /* 照片标签设置,重复*/
  {
    'state': 'kyBcPcPhotoLabelList',
    'url': 'kyBcPcPhotoLabelList',
    'directive': 'bcPcPhotoLabelList',
    'authCode': 'eap.photeTagSet',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafePhotoLabelList-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafePhotoLabelList-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafePhotoLabelList-ky/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bdTextInput',
      'bdTextArea',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'BizTypeResolver',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'xcBcPcPhotoLabelList',
    'url': 'xcBcPcPhotoLabelList',
    'directive': 'bcPcPhotoLabelListXc',
    'authCode': 'eap.photeTagSet',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafePhotoLabelList-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafePhotoLabelList-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafePhotoLabelList-xc/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bdTextInput',
      'bdTextArea',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'BizTypeResolver',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  /* 触发拍照设置，重复*/
  {
    'state': 'kyBcVehicleParamSettingNew',
    'url': 'kyBcVehicleParamSettingNew',
    'directive': 'bcVehicleParamSettingNew',
    'authCode': 'eap.cameraCmd',
    'params': [
      'vehicleId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleParamSettingNew-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleParamSettingNew-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleParamSettingNew-ky/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bdTimeField',
      'bcPagination',
      'bcGrid',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'xcBcVehicleParamSettingNew',
    'url': 'xcBcVehicleParamSettingNew',
    'directive': 'bcVehicleParamSettingXc',
    'authCode': 'eap.cameraCmd',
    'params': [
      'vehicleId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleParamSettingNew-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleParamSettingNew-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleParamSettingNew-xc/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTreeXc',
      'bdTimeField',
      'bcPagination',
      'bcGrid',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  /* 视频,重复*/
  // 校车的视频都指向xc定制
  {
    'state': 'xcVideoWall',
    'url': 'xcVideoWall',
    'directive': 'xcVideoWall',
    'authCode': 'eap.video',
    'params': [
      'objectIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVideoWall-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeVideoWall-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeVideoWall-xc/js/service.js'
    ],
    'dependencies': [
      'bcVideoLib',
      'bcVehicleTreeVideo',
      'Authorization',
      '$translate',
      'bdCheckboxGroup',
      'BizPageManager',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'xcHistoryVideo',
    'url': 'xcHistoryVideo',
    'directive': 'xcHistoryVideo',
    'authCode': 'eap.historyVideo',
    'params': [
      'objects'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeHistoryVideo-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeHistoryVideo-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeHistoryVideo-xc/js/service.js'
    ],
    'dependencies': [
      'bcVideoLib',
      'bcHistoryVideoList',
      'bcVehicleTreeXc',
      'bdDateField',
      'Authorization',
      'bizCommon',
      'BizPageManager',
      'BizTypeResolver',
      'DateUtils',
      'Logger',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 轨迹,重复*/
  {
    'state': 'xcBcPcLocusList',
    'url': 'xcBcPcLocusList',
    'directive': 'bcPcLocusListXc',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'locusType',
      'startTime',
      'endTime',
      'objectIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusList-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusList-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusList-xc/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTreeXc',
      'bcGridMenu',
      'bdDateTimeField',
      'bdDateField',
      'bcAddress',
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
  // 下个版本上
  // {
  //     "state": "xcBcPcLocusList",
  //     "url": "xcBcPcLocusList",
  //     "directive": "bcPcLocusListXc",
  //     "authCode": "eap.track",
  //     "params": [
  //         "vehicleId",
  //         "locusType",
  //         "startTime",
  //         "endTime",
  //         "objectIds"
  //     ],
  //     "files": [
  //         leadsafeURL + "pages/leadsafeLocusList-xc/js/controller.js",
  //         leadsafeURL + "pages/leadsafeLocusList-xc/js/directive.js",
  //         leadsafeURL + "pages/leadsafeLocusList-xc/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bcMapLib",
  //         "bcVehicleTreeXc",
  //         "bdDateTimeField",
  //         "bdCheckboxGroup",
  //         "bdRadioGroup",
  //         "bdDateFieldXc",
  //         "bdDropDownXc",
  //         "bcCcObjectLogo",
  //         "bcLocusBar",
  //         "AppConfig",
  //         "BizPageManager",
  //         "DateUtils",
  //         "TipService",
  //         "User",
  //         "Utils",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "echartsDiagram"
  //     ]
  // },
  {
    'state': 'xcBcPcLocusDetail',
    'url': 'xcBcPcLocusDetail',
    'directive': 'bcPcLocusDetailXc',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusDetail-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-xc/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcCcObjectLogo',
      'bdCheckboxGroup',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'echartsDiagram'
    ]
  },
  {
    'state': 'bcPcLocusList',
    'url': 'bcPcLocusList',
    'directive': 'bcPcLocusList',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'locusType',
      'startTime',
      'endTime',
      'objectIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusList/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusList/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bdDateTimeField',
      'bdDateField',
      'bcAddress',
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
    'state': 'bcPcLocusDetail',
    'url': 'bcPcLocusDetail',
    'directive': 'bcPcLocusDetailXc',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusDetail/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusDetail/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusDetail/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcCcObjectLogo',
      'bdCheckboxGroup',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'echartsDiagram'
    ]
  },
  {
    'state': 'xnyBcPcLocusList',
    'url': 'xnyBcPcLocusList',
    'directive': 'bcPcLocusListXny',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'locusType',
      'startTime',
      'endTime',
      'objectIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusList-xny/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusList-xny/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusList-xny/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdDateTimeField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'xnyBcPcLocusDetail',
    'url': 'xnyBcPcLocusDetail',
    'directive': 'bcPcLocusDetail',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusDetail-xny/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-xny/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-xny/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcCcObjectLogo',
      'bdCheckboxGroup',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcLocusDetail',
    'url': 'jwPcLocusDetail',
    'directive': 'jwPcLocusDetail',
    'authCode': 'eap.locusMonitor',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusDetail-jw/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-jw/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-jw/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcAgGrid',
      'jwFaultVehicleTree',
      'bdDateTimeField',
      'bdCheckboxGroup',
      'bdRadioGroup',
      'bdDateFieldXc',
      'bdDropDownXc',
      'bcCcObjectLogo',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'echartsDiagram'
    ]
  },
  {
    'state': 'jydPcLocusDetail',
    'url': 'jydPcLocusDetail',
    'directive': 'jydPcLocusDetail',
    'authCode': 'eap.locusMonitor',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusDetail-jyd/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-jyd/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-jyd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcAgGrid',
      'jydVehicleTree',
      'bdDateTimeField',
      'bdCheckboxGroup',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jpzPcLocusDetail',
    'url': 'jpzPcLocusDetail',
    'directive': 'xnyPcLocusDetail',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeLocusDetail-jpz/js/controller.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-jpz/js/directive.js',
      leadsafeURL + 'pages/leadsafeLocusDetail-jpz/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
      'bdDateTimeField',
      'bdCheckboxGroup',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  /* 车辆超载记录*/
  {
    'state': 'bcPcOverloadListxc',
    'url': 'bcPcOverloadListxc',
    'directive': 'bcPcOverloadListxc',
    'authCode': 'eap.vehicleOverLoadRecord',
    'params': [
      'startTime',
      'endTime',
      'handleStatus'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeOverloadList-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeOverloadList-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeOverloadList-xc/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcGridMenu',
      'bcVehicleTreeXc',
      'bdDropDown',
      'bdDateField',
      'bcPagination',
      'bcAddressXc',
      'bdTextInput',
      'bdTextArea',
      'bcGrid',
      'bdCheckboxGroupDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcPhotoPanelXc',
      'bcAddress'
    ]
  },
  /* 驾行记录*/
  {
    'state': 'bcPcDriveBehaviorList',
    'url': 'bcPcDriveBehaviorList',
    'directive': 'bcPcDriveBehaviorListXc',
    'authCode': 'eap.driveLineRecord',
    'params': [
      'behaviorTypes',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeDriveBehaviorList/js/controller.js',
      leadsafeURL + 'pages/leadsafeDriveBehaviorList/js/directive.js',
      leadsafeURL + 'pages/leadsafeDriveBehaviorList/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcGridMenu',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bcVehicleTreeXc',
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
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  /* 行程记录*/
  // {
  //     "state": "xcPcTripListAxxc",
  //     "url": "xcPcTripListAxxc",
  //     "directive": "xcPcTripListAxxc",
  //     "authCode": "eap.tripRecordTwo",
  //     "params": [
  //         "orgId",
  //         "routeId",
  //         "vehicleId",
  //         "tripStatus",
  //         "startTime",
  //         "endTime"
  //     ],
  //     "files": [
  //         leadsafeURL + "pages/leadsafeTripListAxxc/js/controller.js",
  //         leadsafeURL + "pages/leadsafeTripListAxxc/js/directive.js",
  //         leadsafeURL + "pages/leadsafeTripListAxxc/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bcPagination",
  //         "bcOrgSelector",
  //         "bcRouteSelector",
  //         "bcVehicleTreeXc",
  //         "bdDropDown",
  //         "bdTextInput",
  //         "bdDateField",
  //         "bcGrid",
  //         "BizPageManager",
  //         "DateUtils",
  //         "DialogService",
  //         "TipService",
  //         "Utils",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters"
  //     ]
  // },
  /* 行车统计*/
  {
    'state': 'bcPcDriveStatOverview',
    'url': 'bcPcDriveStatOverview',
    'directive': 'bcPcDriveStatOverview',
    'authCode': 'eap.driverRecordStatistics',
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
      leadsafeURL + 'pages/leadsafeDriveStatOverview/js/controller.js',
      leadsafeURL + 'pages/leadsafeDriveStatOverview/js/directive.js',
      leadsafeURL + 'pages/leadsafeDriveStatOverview/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcCcDriveStatSummary',
      'bcCcDriveStatIndicator',
      'bcCcDriveStatList',
      'bizCommon',
      'DateUtils',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 驾驶统计*/
  {
    'state': 'bcPcDriveBehaviorStatOverview',
    'url': 'bcPcDriveBehaviorStatOverview',
    'directive': 'bcPcDriveBehaviorStatOverview',
    'authCode': 'eap.drivingBehavior',
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
      leadsafeURL + 'pages/leadsafeDriveBehaviorStatOverview/js/controller.js',
      leadsafeURL + 'pages/leadsafeDriveBehaviorStatOverview/js/directive.js',
      leadsafeURL + 'pages/leadsafeDriveBehaviorStatOverview/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcCcDriveBehaviorStatSummary',
      'bcCcDriveBehaviorStatIndicator',
      'bcCcDriveBehaviorStatList',
      'bizCommon',
      'DateUtils',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 行驶记录查询，未改*/
  {
    'state': 'kyPcTrackRecordList',
    'url': 'kyPcTrackRecordList',
    'directive': 'kyPcTrackRecordList',
    'authCode': 'eap.drivingRecord',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeTrackRecordList/js/controller.js',
      leadsafeURL + 'pages/leadsafeTrackRecordList/js/directive.js',
      leadsafeURL + 'pages/leadsafeTrackRecordList/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcVehicleSelector',
      'bcExportDialog',
      'bdDateTimeField',
      'bcAddress',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  /* 上线率统计*/
  {
    'state': 'bcPcVehicleOnlineListHg',
    'url': 'bcPcVehicleOnlineListHg',
    'directive': 'bcPcVehicleOnlineListHg',
    'authCode': 'eap.vehicleOnlineRateStatistics',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleOnlineListHg/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleOnlineListHg/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleOnlineListHg/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcVehicleSelector',
      'bcButtonGroup',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bcCcVehicleOnlineListHg',
      'bcCcEntOnlineListHg',
      'bizCommon',
      'DateUtils',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  /* 监管查岗记录*/
  {
    'state': 'bcPcPlatInspectionList',
    'url': 'bcPcPlatInspectionList',
    'directive': 'bcPcPlatInspectionList',
    'authCode': 'eap.supervChagangRecord',
    'params': [
      'entId',
      'ackState',
      'beginTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafePlatInspectionList/js/controller.js',
      leadsafeURL + 'pages/leadsafePlatInspectionList/js/directive.js',
      leadsafeURL + 'pages/leadsafePlatInspectionList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  /* 督办历史记录查询*/
  {
    'state': 'bcPcAlarmSupervisionList',
    'url': 'bcPcAlarmSupervisionList',
    'directive': 'bcPcAlarmSupervisionList',
    'authCode': 'eap.supervHistoryRecord',
    'params': [
      'orgId',
      'alarmType',
      'beginTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeAlarmSupervisionList/js/controller.js',
      leadsafeURL + 'pages/leadsafeAlarmSupervisionList/js/directive.js',
      leadsafeURL + 'pages/leadsafeAlarmSupervisionList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  /* 预警历史记录查询*/
  {
    'state': 'bcPcPlatWarningList',
    'url': 'bcPcPlatWarningList',
    'directive': 'bcPcPlatWarningList',
    'authCode': 'eap.alertHistoryRecord',
    'params': [
      'orgId',
      'warningType',
      'beginTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafePlatWarningList/js/controller.js',
      leadsafeURL + 'pages/leadsafePlatWarningList/js/directive.js',
      leadsafeURL + 'pages/leadsafePlatWarningList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  /* 危险驾驶分析*/
  {
    'state': 'bcPcDangerDriveList',
    'url': 'bcPcDangerDriveList',
    'directive': 'bcPcDangerDriveList',
    'authCode': 'eap.badDrivingAnalysis',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeDangerDriveList/js/controller.js',
      leadsafeURL + 'pages/leadsafeDangerDriveList/js/directive.js',
      leadsafeURL + 'pages/leadsafeDangerDriveList/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bcExportDialog',
      'bcOrgTree',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcDriverTree',
      'bcRouteTree',
      'bcRouteSelector',
      'bcVehicleSelector',
      'bcOrgSelector',
      'bdDateField',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bcCcCommonMap',
      'bcCcDangerDriveDetailList',
      'BcMapApi',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'Skin',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  /* 车辆超速分析*/
  {
    'state': 'bcPcOverSpeedListKc',
    'url': 'bcPcOverSpeedListKc',
    'directive': 'bcPcOverSpeedListKc',
    'authCode': 'eap.speedAnalysis',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeOverSpeedListKc/js/controller.js',
      leadsafeURL + 'pages/leadsafeOverSpeedListKc/js/directive.js',
      leadsafeURL + 'pages/leadsafeOverSpeedListKc/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcExportDialog',
      'bdTextInput',
      'bcVehicleSelector',
      'bcObjectSearchTree',
      'bdDateField',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bcCcCommonMap',
      'bcCcOverSpeedDetailListKc',
      'BcMapApi',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'Skin',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  /* 事故疑点分析*/
  {
    'state': 'bcPcAccidentPointList',
    'url': 'bcPcAccidentPointList',
    'directive': 'bcPcAccidentPointList',
    'authCode': 'eap.accidentDoubtAnalysis',
    'params': [
      'accidentPointId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeAccidentPointList/js/controller.js',
      leadsafeURL + 'pages/leadsafeAccidentPointList/js/directive.js',
      leadsafeURL + 'pages/leadsafeAccidentPointList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdDateTimeField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bcCcAccidentPointDetailIndicator',
      'bcCcAccidentPointDetailList',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  /* 车辆状态分析*/
  {
    'state': 'bcPcVehicleConditionList',
    'url': 'bcPcVehicleConditionList',
    'directive': 'bcPcVehicleConditionList',
    'authCode': 'eap.vehicleStatusAnalysis',
    'params': [
      'vehicleIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleConditionList-xny/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleConditionList-xny/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleConditionList-xny/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'asyncPagination',
      'bcGrid',
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
      'gridColumnFilter'
    ]
  },
  /* 车辆状态*/
  {
    'state': 'bcPcVehicleStateConditionList',
    'url': 'bcPcVehicleStateConditionList',
    'directive': 'bcPcVehicleStateConditionList',
    'authCode': 'eap.vehicleStateAnalysisData',
    'params': [
      'vehicleIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleStateConditionList-xny/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleStateConditionList-xny/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleStateConditionList-xny/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcVehicleStateConditionListFromHbase',
    'url': 'bcPcVehicleStateConditionListFromHbase',
    'directive': 'bcPcVehicleStateConditionListFromHbase',
    'authCode': '',
    'params': [
      'vehicleIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleStateConditionListFromHbase/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleStateConditionListFromHbase/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleStateConditionListFromHbase/js/service.js'
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
  },
  {
    'state': 'bcPcVehicleConditionListFromHbase',
    'url': 'bcPcVehicleConditionListFromHbase',
    'directive': 'bcPcVehicleConditionListFromHbase',
    'authCode': '',
    'params': [
      'vehicleIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleConditionListFromHbase/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleConditionListFromHbase/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleConditionListFromHbase/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'bcPagination',
      'bcGrid',
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
      'gridColumnFilter'
    ]
  },
  /* 关键位置提醒*/
  // {
  //     "state": "bcPcSetPoints",
  //     "url": "bcPcSetPoints",
  //     "directive": "bcPcSetPointsXc",
  //     "authCode": "eap.keyLocationReminders",
  //     "params": [],
  //     "files": [
  //         leadsafeURL + "pages/leadsafeSetPointsXc/js/controller.js",
  //         leadsafeURL + "pages/leadsafeSetPointsXc/js/directive.js",
  //         leadsafeURL + "pages/leadsafeSetPointsXc/js/service.js"
  //     ],
  //     "dependencies": [
  //         'bcMapLib',
  //         'bcGridMenu',
  //         "bcRouteTree",
  //         "bcVehicleTreeXc",
  //         "bcPagination",
  //         "bdTextInput",
  //         'bcRouteBind',
  //         "bdDateField",
  //         "bdDropDown",
  //         "bcGrid",
  //         'User',
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "DialogService",
  //         "TipService",
  //         "BizControlResolver",
  //         "I18n",
  //         "FloatService",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement",
  //         "bcNoAuthElement"
  //     ]
  // },
  // {
  //     "state": "bcPcSetPointsEditXc",
  //     "url": "bcPcSetPointsEditXc",
  //     "directive": "bcPcSetPointsEditXc",
  //     "authCode": "eap.route.add",
  //     "params": [
  //         "pointsId",
  //         "operaType"
  //     ],
  //     "files": [
  //         leadsafeURL + "pages/leadsafeSetPointsEditXc/js/controller.js",
  //         leadsafeURL + "pages/leadsafeSetPointsEditXc/js/directive.js",
  //         leadsafeURL + "pages/leadsafeSetPointsEditXc/js/service.js"
  //     ],
  //     "dependencies": [
  //         'bcMapLib',
  //         'AppConfig',
  //         "bcGrid",
  //         "bdRadioGroup",
  //         "bdCheckboxGroup",
  //         "bcOrgSelector",
  //         "bdTextInput",
  //         "bdDropDown",
  //         "bdDateField",
  //         "bdTimeField",
  //         "bdDateTimeField",
  //         "bdIntegerField",
  //         "bdTextArea",
  //         "bcStationSelectNew",
  //         "bcCcCommonMap",
  //         "bcRouteStationMap",
  //         "BcMapApi",
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "DialogService",
  //         "FieldValidate",
  //         "FloatService",
  //         "Logger",
  //         "Skin",
  //         "TipService",
  //         "Utils",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "bcOuterClick"
  //     ]
  // },
  /* 电子围栏,重复*/
  {
    'state': 'bcPcFenceListXc',
    'url': 'bcPcFenceListXc',
    'directive': 'bcPcFenceListNew',
    'authCode': 'eap.elecFence',
    'params': [
      'fenceName'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFenceListNew-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeFenceListNew-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeFenceListNew-xc/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdTextInput',
      'bcGridMenu',
      'kyVehicleSelect',
      'bcVehicleTreeXc',
      'bdDateField',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'xcBcPcFenceEdit',
    'url': 'xcBcPcFenceEdit',
    'directive': 'bcPcFenceEditNew',
    'authCode': 'eap.fence.edit',
    'params': [
      'fenceId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFenceEditNew-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeFenceEditNew-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeFenceEditNew-xc/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdTextInput',
      'bdIntegerField',
      'bdDateField',
      'bcCcCommonMap',
      'bdCheckboxGroup',
      'bdRadioGroup',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'GaodeMapApi',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider'
    ]
  },
  {
    'state': 'jpzBcPcFenceList',
    'url': 'jpzBcPcFenceListXc',
    'directive': 'bcPcFenceListNew',
    'authCode': 'eap.elecFence',
    'params': [
      'fenceName'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFenceListNew-jpz/js/controller.js',
      leadsafeURL + 'pages/leadsafeFenceListNew-jpz/js/directive.js',
      leadsafeURL + 'pages/leadsafeFenceListNew-jpz/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdTextInput',
      'bcGridMenu',
      'kyVehicleSelect',
      'xnyVehicleTree',
      'bdDateField',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'jpzBcPcFenceEdit',
    'url': 'jpzBcPcFenceEdit',
    'directive': 'bcPcFenceEditNew',
    'authCode': 'eap.fence.edit',
    'params': [
      'fenceId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFenceEditNew-jpz/js/controller.js',
      leadsafeURL + 'pages/leadsafeFenceEditNew-jpz/js/directive.js',
      leadsafeURL + 'pages/leadsafeFenceEditNew-jpz/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdTextInput',
      'bdIntegerField',
      'bdDateField',
      'bcCcCommonMap',
      'bdCheckboxGroup',
      'bdRadioGroup',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'GaodeMapApi',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider'
    ]
  },
  {
    'state': 'kyPcFenceList',
    'url': 'kyPcFenceList',
    'directive': 'bcPcFenceListXc',
    'authCode': 'eap.elecFence',
    'params': [
      'fenceName'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFenceList-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafeFenceList-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafeFenceList-ky/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bdDateField',
      'bcGrid',
      'bdTextInput',
      'kyVehicleSelect',
      'bcVehicleTree',
      'bdDateTimeField',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'kyBcPcFenceEdit',
    'url': 'kyBcPcFenceEdit',
    'directive': 'bcPcFenceEditXc',
    'authCode': 'eap.fence.edit',
    'params': [
      'fenceId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFenceEdit-ky/js/controller.js',
      leadsafeURL + 'pages/leadsafeFenceEdit-ky/js/directive.js',
      leadsafeURL + 'pages/leadsafeFenceEdit-ky/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bdTextInput',
      'bdIntegerField',
      'bdDateField',
      'bdCheckboxGroup',
      'bdRadioGroup',
      'bizCommon',
      'bcCcCommonMap',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'GaodeMapApi',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider'
    ]
  },
  /* {
     "state": "bcPcFenceList",
     "url": "bcPcFenceList",
     "directive": "bcPcFenceListXc",
     "authCode": "eap.elecFence",
     "params": [
     "fenceName"
     ],
     "files": [
     leadsafeURL + "pages/leadsafeFenceListNew-ky/js/controller.js",
     leadsafeURL + "pages/leadsafeFenceListNew-ky/js/directive.js",
     leadsafeURL + "pages/leadsafeFenceListNew-ky/js/service.js"
     ],
     "dependencies": [
     "bcGrid",
     "bcPagination",
     "bdTextInput",
     "kyVehicleSelect",
     "bcVehicleTree",
     "bdDateField",
     "bizCommon",
     "BizPageManager",
     "DateUtils",
     "DialogService",
     "FloatService",
     "TipService",
     "BizControlResolver",
     "I18n",
     "Utils",
     "DataProvider",
     "utilFilters",
     "bcAuthElement"
     ]
     },*/
  /* 事件等级设置*/
  {
    'state': 'bcPcAlarmLevelSetting',
    'url': 'bcPcAlarmLevelSetting',
    'directive': 'bcPcAlarmLevelSetting',
    'authCode': 'eap.setAlarmLevel',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeAlarmLevelSetting/js/controller.js',
      leadsafeURL + 'pages/leadsafeAlarmLevelSetting/js/directive.js',
      leadsafeURL + 'pages/leadsafeAlarmLevelSetting/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'BizControlResolver',
      'FieldValidate',
      'DialogService',
      'Logger',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'xcAlarmLevelSetting',
    'url': 'xcAlarmLevelSetting',
    'directive': 'xcPcAlarmLevelSetting',
    'authCode': 'eap.setAlarmLevel',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeAlarmLevelSetting-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeAlarmLevelSetting-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeAlarmLevelSetting-xc/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'BizControlResolver',
      'FieldValidate',
      'DialogService',
      'Logger',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider'
    ]
  },
  /* 事件自动语音提示*/
  {
    'state': 'bcPcAlarmAutomaticVoicePromptList',
    'url': 'bcPcAlarmAutomaticVoicePromptList',
    'directive': 'bcPcAlarmAutomaticVoicePromptList',
    'authCode': 'eap.autoAlarmVoicePrompts',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeAlarmAutomaticVoicePromptList/js/controller.js',
      leadsafeURL + 'pages/leadsafeAlarmAutomaticVoicePromptList/js/directive.js',
      leadsafeURL + 'pages/leadsafeAlarmAutomaticVoicePromptList/js/service.js'
    ],
    'dependencies': [
      'bcTip',
      'bdTimeField',
      'bdDropDown',
      'bdInputDropList',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  /* 事件策略设置*/
  {
    'state': 'bcPcAlarmStrategySetting',
    'url': 'bcPcAlarmStrategySetting',
    'directive': 'bcPcAlarmStrategySetting',
    'authCode': 'eap.alarmPolicySettings',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeAlarmStrategySetting/js/controller.js',
      leadsafeURL + 'pages/leadsafeAlarmStrategySetting/js/directive.js',
      leadsafeURL + 'pages/leadsafeAlarmStrategySetting/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdTimeField',
      'bdDropDown',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },

  /* 事件*/
  {
    'state': 'bcPcEventListxc',
    'url': 'bcPcEventListxc',
    'directive': 'bcPcEventListxc',
    'authCode': 'eap.event',
    'params': [
      'objectId',
      'objectType',
      'startTime',
      'endTime',
      'handleStatus',
      'eventLevelId',
      'orgId',
      'eventSource',
      'eventTypeNameId',
      'eventClassId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeEventList-xc/js/controller.js',
      leadsafeURL + 'pages/leadsafeEventList-xc/js/directive.js',
      leadsafeURL + 'pages/leadsafeEventList-xc/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcVehicleTreeXc',
      'bdDropDown',
      'bdDateField',
      'bcPagination',
      'bcAddressXc',
      'bdTextInput',
      'bdTextArea',
      'bcGrid',
      'bdCheckboxGroupDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAddress'
    ]
  },
  {
    'state': 'bcPcEventList',
    'url': 'bcPcEventList',
    'directive': 'bcPcEventList',
    'authCode': 'eap.event',
    'params': [
      'objectId',
      'objectType',
      'startTime',
      'endTime',
      'handleStatus',
      'eventLevelId',
      'orgId',
      'eventClassId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeEventList-gd/js/controller.js',
      leadsafeURL + 'pages/leadsafeEventList-gd/js/directive.js',
      leadsafeURL + 'pages/leadsafeEventList-gd/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bdDropDown',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },

  {
    'state': 'jydRealTimeStateQuery',
    'url': 'jydRealTimeStateQuery',
    'directive': 'jydRealTimeStateQuery',
    'authCode': 'eap.deviceStatus',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeRealTimeStateQuery-jyd/js/controller.js',
      leadsafeURL + 'pages/leadsafeRealTimeStateQuery-jyd/js/directive.js',
      leadsafeURL + 'pages/leadsafeRealTimeStateQuery-jyd/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'jydVehicleTree',
      'bcPagination',
      'bdTextInput',
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
    'state': 'jwPcAdasWarningInformation',
    'url': 'jwPcAdasWarningInformation',
    'directive': 'jwPcAdasWarningInformation',
    'authCode': 'eap.safeBehiverStat',
    'params': [
      'obj_id',
      'dayKey'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeAdasWarningInformation/js/controller.js',
      leadsafeURL + 'pages/leadsafeAdasWarningInformation/js/directive.js',
      leadsafeURL + 'pages/leadsafeAdasWarningInformation/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
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
  },
  {
    'state': 'leadsafeAdasStatistics',
    'url': 'leadsafeAdasStatistics',
    'directive': 'leadsafeAdasStatistics',
    'authCode': 'eap.safeBehiverStatistics',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeAdasStatistics/js/controller.js',
      leadsafeURL + 'pages/leadsafeAdasStatistics/js/directive.js',
      leadsafeURL + 'pages/leadsafeAdasStatistics/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
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
  },
  // Ads数据统计
  {
    'state': 'adasDataStatistics',
    'url': 'adasDataStatistics',
    'directive': 'adasDataStatistics',
    'authCode': 'eap.adasBehiverStatistics',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeAdasDataStatistics/js/controller.js',
      leadsafeURL + 'pages/leadsafeAdasDataStatistics/js/directive.js',
      leadsafeURL + 'pages/leadsafeAdasDataStatistics/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
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
  },
  // Ads数据查询
  {
    'state': 'adasDataQuery',
    'url': 'adasDataQuery',
    'directive': 'adasDataQuery',
    'authCode': 'eap.safeAdasDataQuery',
    'params': [
      'vehicleId',
      'startTime',
      'endTime',
      'faultName'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeAdasDataQuery/js/controller.js',
      leadsafeURL + 'pages/leadsafeAdasDataQuery/js/directive.js',
      leadsafeURL + 'pages/leadsafeAdasDataQuery/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
      'bcVehicleTreeXc',
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
  },
  // adas数据看板
  {
    'state': 'adasDashboard',
    'url': 'adasDashboard',
    'directive': 'adasDashboard',
    'authCode': 'eap.safeDashBoard',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeAdasDashboard/js/controller.js',
      leadsafeURL + 'pages/leadsafeAdasDashboard/js/directive.js',
      leadsafeURL + 'pages/leadsafeAdasDashboard/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcAgGrid',
      'bcPagination',
      'bdArrowDateTimeField',
      'echartsDiagram'
    ]
  },
  {
    'state': 'xnyPcLocusDetail',
    'url': 'xnyPcLocusDetail',
    'directive': 'xnyPcLocusDetail',
    'authCode': 'eap.track',
    'params': [
      'vehicleId',
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafexnyPcLocusDetail/js/controller.js',
      leadsafeURL + 'pages/leadsafexnyPcLocusDetail/js/directive.js',
      leadsafeURL + 'pages/leadsafexnyPcLocusDetail/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'xnyVehicleOrgTree',
      'bdDateTimeField',
      'bdCheckboxGroup',
      'bcLocusBar',
      'AppConfig',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'User',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcHisEventList',
    'url': 'bcPcHisEventList',
    'directive': 'bcPcHisEventList',
    'authCode': 'eap.event',
    'params': [
      'objectId',
      'objectType',
      'startTime',
      'endTime',
      'handleStatus',
      'eventLevelId',
      'orgId',
      'eventSource',
      'eventTypeNameId',
      'eventClassId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeHisEventList/js/controller.js',
      leadsafeURL + 'pages/leadsafeHisEventList/js/directive.js',
      leadsafeURL + 'pages/leadsafeHisEventList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcExportDialog',
      'bcOrgSelector',
      'bcVehicleSelector',
      'bcObjectSearchTree',
      'bdDropDown',
      'bdInputDropList',
      'bdDateField',
      'bcPagination',
      'bcAddress',
      'bdTextInput',
      'bdTextArea',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jpzBcPcHisEventList',
    'url': 'jpzBcPcHisEventList',
    'directive': 'bcPcHisEventList',
    'authCode': 'eap.alarmEvent',
    'params': [
      'objectId',
      'objectType',
      'startTime',
      'endTime',
      'handleStatus',
      'eventLevelId',
      'orgId',
      'eventSource',
      'eventTypeNameId',
      'eventClassId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeHisEventList-jpz/js/controller.js',
      leadsafeURL + 'pages/leadsafeHisEventList-jpz/js/directive.js',
      leadsafeURL + 'pages/leadsafeHisEventList-jpz/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'bcExportDialog',
      'bcOrgSelector',
      'bcVehicleSelector',
      'bcObjectSearchTree',
      'bdDropDown',
      'bdInputDropList',
      'bdDateField',
      'bcPagination',
      'bcAddress',
      'bdTextInput',
      'bdTextArea',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'kyPcVehicleRunStatisticList',
    'url': 'kyPcVehicleRunStatisticList',
    'directive': 'kyPcVehicleRunStatisticList',
    'authCode': 'eap.vehicleOperStatistics',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafekyPcVehicleRunStatisticList/js/controller.js',
      leadsafeURL + 'pages/leadsafekyPcVehicleRunStatisticList/js/directive.js',
      leadsafeURL + 'pages/leadsafekyPcVehicleRunStatisticList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bdRadioGroup',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcCcCommonMap',
      'bcCcDangerDriveDetailList',
      'BcMapApi',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'Skin',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jydPcFaultDetail',
    'url': 'jydPcFaultDetail',
    'directive': 'jydPcFaultDetail',
    'authCode': 'eap.monitorRecord.detail',
    'params': [
      'vehicleInfo'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafePcFaultDetail-jyd/js/controller.js',
      leadsafeURL + 'pages/leadsafePcFaultDetail-jyd/js/directive.js',
      leadsafeURL + 'pages/leadsafePcFaultDetail-jyd/js/service.js'
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
    'state': 'jydPcFaultRecordList',
    'url': 'jydPcFaultRecordList',
    'directive': 'jydPcFaultRecordList',
    'authCode': 'eap.monitorRecord',
    'params': [
      'faultTypeId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeFaultRecordList-jyd/js/controller.js',
      leadsafeURL + 'pages/leadsafeFaultRecordList-jyd/js/directive.js',
      leadsafeURL + 'pages/leadsafeFaultRecordList-jyd/js/service.js'
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
    'state': 'bcPcIllegalOperations',
    'url': 'bcPcIllegalOperations',
    'directive': 'bcPcIllegalOperations',
    'authCode': 'eap.operViolaStatistics',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeIllegalOperations/js/controller.js',
      leadsafeURL + 'pages/leadsafeIllegalOperations/js/directive.js',
      leadsafeURL + 'pages/leadsafeIllegalOperations/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bcExportDialog',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcDriverTree',
      'bcDriverSelector',
      'bcVehicleSelector',
      'bcButtonGroup',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcGridMenu',
      'bdDateField',
      'bcCcCommonMap',
      'bcCcIllegalOperationsDetailList',
      'BcMapApi',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'Skin',
      'TipService',
      'I18n',
      'DataProvider'
    ]
  },
  // 行车记录
  {
    'state': 'bcPcDriveRecordList',
    'url': 'bcPcDriveRecordList',
    'directive': 'bcPcDriveRecordListXc',
    'authCode': 'eap.driverRecord',
    'params': [
      'vehicleIds',
      'driverIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeDriveRecordListXc/js/controller.js',
      leadsafeURL + 'pages/leadsafeDriveRecordListXc/js/directive.js',
      leadsafeURL + 'pages/leadsafeDriveRecordListXc/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bcGridMenu',
      'bcVehicleTreeXc',
      'bcDriverSelector',
      'bcAddress',
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
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  // {
  //     "state": "bcPcVehicleRunTimeList",
  //     "url": "bcPcVehicleRunTimeList",
  //     "directive": "bcPcVehicleRunTimeListXc",
  //     "authCode": "eap.runtimeSet",
  //     "params": [],
  //     "files": [
  //         leadsafeURL+"pages/leadsafeVehicleRunTimeListXc/js/controller.js",
  //         leadsafeURL+"pages/leadsafeVehicleRunTimeListXc/js/directive.js",
  //         leadsafeURL+"pages/leadsafeVehicleRunTimeListXc/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bdTimeField",
  //         "bcGrid",
  //         "bizCommon",
  //         "BizControlResolver",
  //         "BizPageManager",
  //         "DateUtils",
  //         "DialogService",
  //         "TipService",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement"
  //     ]
  // },
  {
    'state': 'bcPcVehicleDashboard',
    'url': 'bcPcVehicleDashboard',
    'directive': 'bcPcVehicleDashboard',
    'authCode': 'eap.pcVehicleDashboard',
    'params': [
      'vehicleId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleDashboard-jw/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleDashboard-jw/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleDashboard-jw/js/service.js'
    ],
    'dependencies': [
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'echartsDiagram'
    ]
  },
  // 提取记录
  {
    'state': 'bcPcAccidentOldPointList',
    'url': 'bcPcAccidentOldPointList',
    'directive': 'bcPcAccidentOldPointList',
    'authCode': 'eap.accidentDoubtAnalysis',
    'params': [
      'accidentPointId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeAccidentOldPointList/js/controller.js',
      leadsafeURL + 'pages/leadsafeAccidentOldPointList/js/directive.js',
      leadsafeURL + 'pages/leadsafeAccidentOldPointList/js/service.js'
    ],
    'dependencies': [
      'bcVehicleSelector',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bcCcAccidentPointDetailIndicator',
      'bcCcAccidentPointDetailList',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DialogService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jydAlarmParameterSetting',
    'url': 'jydAlarmParameterSetting',
    'directive': 'jydAlarmParameterSetting',
    'authCode': 'eap.paramConfig',
    'files': [
      leadsafeURL + 'pages/leadsafeAlarmParameterSetting-jyd/js/controller.js',
      leadsafeURL + 'pages/leadsafeAlarmParameterSetting-jyd/js/directive.js',
      leadsafeURL + 'pages/leadsafeAlarmParameterSetting-jyd/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective'
    ]
  },
  {
    'state': 'bcPcDriveRecordList-gd',
    'url': 'bcPcDriveRecordList-gd',
    'directive': 'bcPcDriveRecordList',
    'authCode': 'eap.driverRecord',
    'params': [
      'vehicleIds',
      'driverIds'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafePcDriveRecordList/js/controller.js',
      leadsafeURL + 'pages/leadsafePcDriveRecordList/js/directive.js',
      leadsafeURL + 'pages/leadsafePcDriveRecordList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bcVehicleTree',
      'bcDriverSelector',
      'bcAddress',
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
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  /* 机务设备状态*/
  {
    'state': 'jwRealTimeStateQuery',
    'url': 'jwRealTimeStateQuery',
    'directive': 'jwRealTimeStateQuery',
    'authCode': 'eap.equipStatus',
    'params': [
      'startTime',
      'endTime'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeRealTimeStateQueryJw/js/controller.js',
      leadsafeURL + 'pages/leadsafeRealTimeStateQueryJw/js/directive.js',
      leadsafeURL + 'pages/leadsafeRealTimeStateQueryJw/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcObjectSearchTree',
      'bcPagination',
      'bdTextInput',
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
      'bcNoAuthElement',
      'jwArrowDateField'
    ]
  },
  {
    'state': 'bcPcVehicleInArea',
    'url': 'bcPcVehicleInArea',
    'directive': 'bcPcVehicleInArea',
    'authCode': 'eap.pcVehicleInArea',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleInArea/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleInArea/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleInArea/js/service.js'
    ],
    'dependencies': [
      'bcCcCommonMap',
      'bdDateTimeField',
      'BcMapApi',
      'bizCommon',
      'DateUtils',
      'DialogService',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'bcPcDriveStatListHg',
    'url': 'bcPcDriveStatListHg',
    'directive': 'bcPcDriveStatListHg',
    'authCode': 'eap.mileageStatistics',
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
      leadsafeURL + 'pages/leadsafeDriveStatListHg/js/controller.js',
      leadsafeURL + 'pages/leadsafeDriveStatListHg/js/directive.js',
      leadsafeURL + 'pages/leadsafeDriveStatListHg/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bcExportDialog',
      'bcOrgTree',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcDriverTree',
      'bdTextInput',
      'bdDropDown',
      'bcButtonGroup',
      'bcAddress',
      'bdDateField',
      'bcVehicleSelector',
      'bcDriverSelector',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'Logger',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcVehicleTrace',
    'url': 'bcPcVehicleTrace',
    'directive': 'bcPcVehicleTraceKy',
    'authCode': 'eap.trace',
    'params': [
      'vehicleId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleTraceKy/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleTraceKy/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleTraceKy/js/service.js'
    ],
    'dependencies': [
      'bcCcCommonMap',
      'bcVehicleSelector',
      'BcMapApi',
      'bizCommon',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'asgoldBatterySafetyMonitoring',
    'url': 'asgoldBatterySafetyMonitoring',
    'directive': 'asgoldBatterySafetyMonitoring',
    'authCode': 'eap.batteryMainStatistics',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeBatterySafetyMonitoring/js/controller.js',
      leadsafeURL + 'pages/leadsafeBatterySafetyMonitoring/js/directive.js',
      leadsafeURL + 'pages/leadsafeBatterySafetyMonitoring/js/service.js'
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
      'bcAuthElement',
      'bcRouteSelector',
      'AppConfig',
      'User',
      'echarts'
    ]
  },

  {
    'state': 'jwPcMonitorWorkerArchive',
    'url': 'jwPcMonitorWorkerArchive',
    'directive': 'jwPcMonitorWorkerArchive',
    'authCode': 'eap.monitorWorkerArchive',
    'params': ['personId'],
    'files': [
      leadsafeURL + 'pages/leadsafeMonitorWorkerArchive-jw/js/controller.js',
      leadsafeURL + 'pages/leadsafeMonitorWorkerArchive-jw/js/directive.js',
      leadsafeURL + 'pages/leadsafeMonitorWorkerArchive-jw/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'DataProvider',
      'utilFilters',
      'jwFilters'
    ]
  },
  {
    'state': 'bcPcTerminalStateList',
    'url': 'bcPcTerminalStateList',
    'directive': 'bcPcTerminalStateList',
    'authCode': 'eap.equipStatus',
    'params': [],
    'files': [
      leadsafeURL + 'pages/leadsafeTerminalStateList/js/controller.js',
      leadsafeURL + 'pages/leadsafeTerminalStateList/js/directive.js',
      leadsafeURL + 'pages/leadsafeTerminalStateList/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bdDropDown',
      'bcPagination',
      'bcAddress',
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
    'state': 'vehicleWarningHeatMap',
    'url': 'vehicleWarningHeatMap',
    'directive': 'vehicleWarningHeatMap',
    'authCode': 'eap.safeHeatMap',
    'params': [
      'jobId',
      'bindStatus'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeVehicleWarningHeatMap/js/controller.js',
      leadsafeURL + 'pages/leadsafeVehicleWarningHeatMap/js/directive.js',
      leadsafeURL + 'pages/leadsafeVehicleWarningHeatMap/js/service.js'
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
      'bcTimerSlider',
      'coordtransform',
      'BcMapApi'
    ]
  }, {
    'state': 'eleStation-xc',
    'url': 'eleStation-xc',
    'directive': 'bcPcEleStation',
    'authCode': 'eap.otherChargerMonitor',
    'params': [
      'objects',
      'objectType',
      'objectId'
    ],
    'files': [
      leadsafeURL + 'pages/leadsafeEleStation/js/controller.js',
      leadsafeURL + 'pages/leadsafeEleStation/js/directive.js',
      leadsafeURL + 'pages/leadsafeEleStation/js/service.js',
      leadsafeURL + 'pages/leadsafeEleStation/js/eleDetailController.js',
      leadsafeURL + 'pages/leadsafeEleStation/js/eleListMonitorController.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcAddress',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
      'bdRadioGroup',
      'bdInputDropList',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'Skin',
      'TipService',
      'User',
      'Utils',
      'AppConfig',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'toggleFloatBar',
      'bcNoAuthElement',
      'xnySyncEleStationTree',
      'bcCcCommonMapToolBox'
    ]
  }
]
