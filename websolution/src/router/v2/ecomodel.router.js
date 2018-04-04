var ecomodelUrl = 'ecomodel/' // 获取产品引用URL
/* *
 * 智能能耗产品路由配置
 * 智能能耗产品的功能页面在此进行配置
 * */
var ecomodelRouter = [
  {
    'state': 'jwPcEnergyMonitoringList',
    'url': 'jwPcEnergyMonitoringList',
    'directive': 'jwPcEnergyMonitoringList',
    'authCode': 'eap.energyMonReport',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelMonitorReport/js/controller.js',
      ecomodelUrl + 'pages/ecomodelMonitorReport/js/directive.js',
      ecomodelUrl + 'pages/ecomodelMonitorReport/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdDropDown',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcOrgTree',
      'bcFleetTree',
      'bcRouteTree',
      'bcDriverTree',
      'bcAddress',
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
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
    'state': 'jwPcEnergyReport',
    'url': 'jwPcEnergyReport',
    'directive': 'jwPcEnergyReport',
    'authCode': 'eap.energyReport',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelReport/js/controller.js',
      ecomodelUrl + 'pages/ecomodelReport/js/directive.js',
      ecomodelUrl + 'pages/ecomodelReport/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'echartsDiagram',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'bdDropDown'
    ]
  },
  {
    'state': 'jwPcEnergyHighCostVehicle',
    'url': 'jwPcEnergyHighCostVehicle',
    'directive': 'jwPcEnergyHighCostVehicle',
    'authCode': 'eap.highEnergy',
    'params': [
      'paramsTime'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelHighCostVehicle/js/controller.js',
      ecomodelUrl + 'pages/ecomodelHighCostVehicle/js/directive.js',
      ecomodelUrl + 'pages/ecomodelHighCostVehicle/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bdDropDown',
      'bcOrgTree',
      'bcPagination',
      'BizControlResolver',
      'BizPageManager',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcEnergyRepairOrderList',
    'url': 'jwPcEnergyRepairOrderList',
    'directive': 'jwPcEnergyRepairOrderList',
    'authCode': 'eap.highEnergy.sheet',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelRenovationWorkOrder/js/controller.js',
      ecomodelUrl + 'pages/ecomodelRenovationWorkOrder/js/directive.js',
      ecomodelUrl + 'pages/ecomodelRenovationWorkOrder/js/service.js'
    ],
    'dependencies': [
      'bcOrgTree',
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcPaginationDropDown'
    ]
  },
  {
    'state': 'jwPcEnergyHighCostVehicleList',
    'url': 'jwPcEnergyHighCostVehicleList',
    'directive': 'jwPcEnergyHighCostVehicleList',
    'authCode': 'eap.highEnergy.list',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelHighCostVehicleList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelHighCostVehicleList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelHighCostVehicleList/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bdTextInput',
      'bcOrgSelector',
      'bcOrgTree',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcEnergyRecords',
    'url': 'jwPcEnergyRecords',
    'directive': 'jwPcEnergyRecords',
    'authCode': 'eap.energyRecord',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelRecordManagement/js/controller.js',
      ecomodelUrl + 'pages/ecomodelRecordManagement/js/directive.js',
      ecomodelUrl + 'pages/ecomodelRecordManagement/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bcGrid',
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
    'state': 'energyRealtimeOilList',
    'url': 'energyRealtimeOilList',
    'directive': 'energyRealtimeOilList',
    'authCode': 'eap.energyRealtimeOilList',
    'dependencies': [
      'bdDateTimeField',
      'energyVehicleTree',
      'asyncPagination',
      'bdArrowDateTimeField',
      'bdArrowDateField',
      'bcGrid',
      'BcMapApi',
      'echartsDiagram',
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
      'bcPagination',
      'bcCcCommonMap',
      'bdCheckboxGroup'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelRealTimeOil/js/controller.js',
      ecomodelUrl + 'pages/ecomodelRealTimeOil/js/directive.js',
      ecomodelUrl + 'pages/ecomodelRealTimeOil/js/service.js'
    ]
  },
  {
    'state': 'energyOilMonitorDetail',
    'url': 'energyOilMonitorDetail',
    'directive': 'energyOilMonitorDetail',
    'authCode': '',
    'params': ['vehicleId', 'vehicleName', 'startTime', 'endTime', 'timeSelectorsValue'],
    'files': [
      ecomodelUrl + 'pages/ecomodelOilMonitorDetail/js/controller.js',
      ecomodelUrl + 'pages/ecomodelOilMonitorDetail/js/directive.js',
      ecomodelUrl + 'pages/ecomodelOilMonitorDetail/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcPagination',
      'bdArrowDateTimeField',
      'bdArrowDateField',
      'echartsDiagram',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'DataProvider',
      'bdDropDown',
      'bdCheckboxGroup',
      'User',
      'BcMapApi',
      'bcCcCommonMap',
      'bcAuthElement'
    ]
  },
  {
    'state': 'energyOilStatistical',
    'url': 'energyOilStatistical',
    'directive': 'energyOilStatistical',
    'authCode': 'eap.energyOilStatistical',
    'dependencies': [
      'bdDateTimeField',
      'energyVehicleTree',
      'asyncPagination',
      'echartsDiagram',
      'bcGrid',
      'bcPaginationDropDown',
      'bdDropDown',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcPagination',
      'bdArrowDateTimeField',
      'bdArrowDateField',
      'bdCheckboxGroup',
      'User',
      'BcMapApi',
      'bcCcCommonMap'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelOilQuantityStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelOilQuantityStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelOilQuantityStat/js/service.js'
    ]
  },
  {
    'state': 'energyOilTankSetting',
    'url': 'energyOilTankSetting',
    'directive': 'energyOilTankSetting',
    'authCode': 'eap.energyOilTankSetting',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelOilTankSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelOilTankSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelOilTankSetting/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'TipService',
      'Utils',
      'DataProvider',
      'FieldValidate',
      'bdTextInput',
      'bcAuthElement',
      'DateUtils'
    ]
  },
  {
    'state': 'jwPcAnalysisShows',
    'url': 'jwPcAnalysisShows',
    'directive': 'jwPcAnalysisShows',
    'authCode': 'eap.saveEnergyAnalysed',
    'params': [
      'vehicleLn',
      'energySavingRate',
      'orgName',
      'vehicleCode',
      'startTime',
      'endTime',
      'vehicleId'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelAnalysisAndImprovement/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAnalysisAndImprovement/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAnalysisAndImprovement/js/service.js'
    ],
    'dependencies': [
      'echartsDiagram',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcYearRatedConsumptionSetting',
    'url': 'jwPcYearRatedConsumptionSetting',
    'directive': 'jwPcYearRatedConsumptionSetting',
    'authCode': 'eap.energySet.yearly',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelYearRatedConsumptionSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelYearRatedConsumptionSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelYearRatedConsumptionSetting/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bdDecimalField',
      'bcGrid',
      'bdTextInput',
      'bdDropDown',
      'bcPagination',
      'BizControlResolver',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcRouteTree'
    ]
  },
  {
    'state': 'jwPcMonthlyCoefficientSetting',
    'url': 'jwPcMonthlyCoefficientSetting',
    'directive': 'jwPcMonthlyCoefficientSetting',
    'authCode': 'eap.energySet.month',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelMonthlyCoefficientSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelMonthlyCoefficientSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelMonthlyCoefficientSetting/js/service.js'
    ],
    'dependencies': [
      'bcOrgTree',
      'bdArrowDateTimeField',
      'bdDecimalField',
      'bcGrid',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'jwPcAirConditionerRiseRatioSetting',
    'url': 'jwPcAirConditionerRiseRatioSetting',
    'directive': 'jwPcAirConditionerRiseRatioSetting',
    'authCode': 'eap.energySet.air',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelAirConditionerRiseRatioSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAirConditionerRiseRatioSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAirConditionerRiseRatioSetting/js/service.js'
    ],
    'dependencies': [
      'bcOrgTree',
      'bdIntegerField',
      'bdDropDown',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcGasUnitSetting',
    'url': 'jwPcGasUnitSetting',
    'directive': 'jwPcGasUnitSetting',
    'authCode': 'eap.energySet.gas',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelGasUnitSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelGasUnitSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelGasUnitSetting/js/service.js'
    ],
    'dependencies': [
      'bdDecimalField',
      'bdRadioGroup',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcDrivingBehaviorParamSetting',
    'url': 'jwPcDrivingBehaviorParamSetting',
    'directive': 'jwPcDrivingBehaviorParamSetting',
    'authCode': 'eap.energySet.dBehavior',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelDrivingBehaviorParamSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelDrivingBehaviorParamSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelDrivingBehaviorParamSetting/js/service.js'
    ],
    'dependencies': [
      'bdIntegerField',
      'bdRadioGroup',
      'bcOrgTree',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcDriverScoreEvaluateSetting',
    'url': 'jwPcDriverScoreEvaluateSetting',
    'directive': 'jwPcDriverScoreEvaluateSetting',
    'authCode': 'eap.energySet.score',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelDriverScoreEvaluateSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelDriverScoreEvaluateSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelDriverScoreEvaluateSetting/js/service.js'
    ],
    'dependencies': [
      'bdDecimalField',
      'bcOrgTree',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'DataProvider',
      'bdIntegerField'
    ]
  },
  {
    'state': 'bcPcDrivingSystemList',
    'url': 'bcPcDrivingSystemList',
    'directive': 'bcPcDrivingSystemList',
    'authCode': 'eap.powerSysAnalysis',
    'params': [
      'vehicleIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelDrivingSystemList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelDrivingSystemList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelDrivingSystemList/js/service.js'
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
      'bcAuthElement',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'ecomodelMotorStateList',
    'url': 'ecomodelMotorStateList',
    'directive': 'ecomodelMotorStateList',
    'authCode': 'eap.motorState',
    'params': [
      'vehicleIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelMotorStateList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelMotorStateList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelMotorStateList/js/service.js'
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
      'bcAuthElement',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'bcPcDrivingSystemListFromHbase',
    'url': 'bcPcDrivingSystemListFromHbase',
    'directive': 'bcPcDrivingSystemListFromHbase',
    'authCode': 'eap.powerSysAnalysisHbase',
    'params': [
      'vehicleIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelDrivingSystemListFromHbase/js/controller.js',
      ecomodelUrl + 'pages/ecomodelDrivingSystemListFromHbase/js/directive.js',
      ecomodelUrl + 'pages/ecomodelDrivingSystemListFromHbase/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'bcPagination',
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
    'state': 'bcPcSuperCapacitorList',
    'url': 'bcPcSuperCapacitorList',
    'directive': 'bcPcSuperCapacitorList',
    'authCode': 'eap.superCapacitorAnalysis',
    'params': [
      'vehicleIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelSuperCapacitorList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelSuperCapacitorList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelSuperCapacitorList/js/service.js'
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
    'state': 'bcPcSparePartConsumptionDataList',
    'url': 'bcPcSparePartConsumptionDataList',
    'directive': 'bcPcSparePartConsumptionDataList',
    'authCode': 'eap.partsElecConsData',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelSparePartConsumptionDataList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelSparePartConsumptionDataList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelSparePartConsumptionDataList/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'bcGrid',
      'asyncPagination',
      'bcObjectTree',
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
      'bcAuthElement',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'bcPcSparePartConsumptionDataListHw',
    'url': 'bcPcSparePartConsumptionDataListHw',
    'directive': 'bcPcSparePartConsumptionDataListHw',
    'authCode': 'eap.partsElecConsDataHw',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelSparePartConsumptionDataListHw/js/controller.js',
      ecomodelUrl + 'pages/ecomodelSparePartConsumptionDataListHw/js/directive.js',
      ecomodelUrl + 'pages/ecomodelSparePartConsumptionDataListHw/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'bcGrid',
      'asyncPagination',
      'bcObjectTree',
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
    'state': 'bcPcChargerRunStatisList',
    'url': 'bcPcChargerRunStatisList',
    'directive': 'bcPcChargerRunStatisList',
    'authCode': 'eap.chargerRunStatistics',
    'params': [
      'vehicleIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelChargerRunStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelChargerRunStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelChargerRunStat/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'xnyChargingPileTree',
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
    'state': 'bcPcAirConditionDataList',
    'url': 'bcPcAirConditionDataList',
    'directive': 'bcPcAirConditionDataList',
    'authCode': 'eap.airCondModule',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelAirConditionModule/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAirConditionModule/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAirConditionModule/js/service.js'
    ],
    'dependencies': [
      'bdDateTimeField',
      'xnyVehicleOrgSelector',
      'bcGrid',
      'asyncPagination',
      'bcObjectTree',
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
      'bcAuthElement',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'jwPcEnergyRecordAdd',
    'url': 'jwPcEnergyRecordAdd',
    'directive': 'jwPcEnergyRecordAdd',
    'authCode': 'eap.energyRecord.add',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelRecordManagementAdd/js/controller.js',
      ecomodelUrl + 'pages/ecomodelRecordManagementAdd/js/directive.js',
      ecomodelUrl + 'pages/ecomodelRecordManagementAdd/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdRadioGroup',
      'bdTextInput',
      'bcGrid',
      'BizControlResolver',
      'BizPageManager',
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
    'state': 'bcPcEnergySupplyDeviceRecordList',
    'url': 'bcPcEnergySupplyDeviceRecordList',
    'directive': 'bcPcEnergySupplyDeviceRecordList',
    'authCode': 'eap.chargerChargingRecord',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelChargerChargeRecord/js/controller.js',
      ecomodelUrl + 'pages/ecomodelChargerChargeRecord/js/directive.js',
      ecomodelUrl + 'pages/ecomodelChargerChargeRecord/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bcVehicleSelector',
      'xnyChargingPileTree',
      'toggleFloatBar',
      'bdDateTimeField',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bdTextInput',
      'bdDropDown',
      'bcCcInputValIndicator',
      'bcCcInputValList',
      'bcCcOutputValIndicator',
      'bcCcOutputValList',
      'bcCcPowerValIndicator',
      'bcCcPowerValList',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcEnergySupplyDeviceList',
    'url': 'bcPcEnergySupplyDeviceList',
    'directive': 'bcPcEnergySupplyDeviceList',
    'authCode': 'eap.chargerDataFlow',
    'params': [
      'pileId',
      'startTime',
      'endTime',
      'workGun'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelChargerPipeliningData/js/controller.js',
      ecomodelUrl + 'pages/ecomodelChargerPipeliningData/js/directive.js',
      ecomodelUrl + 'pages/ecomodelChargerPipeliningData/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bcPagination',
      'xnyChargingPileTree',
      'toggleFloatBar',
      'bdDateTimeField',
      'bcGrid',
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
    'state': 'xnyEnergyEveryChargingList',
    'url': 'xnyEnergyEveryChargingList',
    'directive': 'xnyEnergyEveryChargingList',
    'authCode': 'eap.singleChargeStatistics',
    'files': [
      ecomodelUrl + 'pages/ecomodelOneTimeChargeStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelOneTimeChargeStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelOneTimeChargeStat/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyVehicleOrgSelector',
      'bdDateTimeField',
      'bdDropDown',
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
    'state': 'bcPcEnergySupplyDailyStatisticList',
    'url': 'bcPcEnergySupplyDailyStatisticList',
    'directive': 'xnyEnergySupplyDailyStatisticList',
    'authCode': 'eap.batteryChargerDay',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelChargerDailyElectricQuantityStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelChargerDailyElectricQuantityStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelChargerDailyElectricQuantityStat/js/service.js',
      ecomodelUrl + 'pages/ecomodelChargerDailyElectricQuantityStat/js/detailCtrl.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdInputDropList',
      'xnyChargingPileTree',
      'toggleFloatBar',
      'xnySyncChargingPileSelector',
      'bdDateTimeField',
      'bdDateField',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bdTextInput',
      'bdDropDown',
      'bcCcInputValList',
      'bcCcOutputValList',
      'bcCcPowerValList',
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
      'echartsDiagram'
    ]
  },
  {
    'state': 'bcPcEnergySupplyVehicleRecordList',
    'url': 'bcPcEnergySupplyVehicleRecordList',
    'directive': 'bcPcEnergySupplyVehicleRecordList',
    'authCode': 'eap.vehicleChargingRecord',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelVehicleChargeRecord/js/controller.js',
      ecomodelUrl + 'pages/ecomodelVehicleChargeRecord/js/directive.js',
      ecomodelUrl + 'pages/ecomodelVehicleChargeRecord/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyVehicleOrgSelector',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcEnergyConsumptionDetailList',
    'url': 'bcPcEnergyConsumptionDetailList',
    'directive': 'bcPcEnergyConsumptionDetailList',
    'authCode': 'eap.bicycleEnergyDetail',
    'params': [
      'vehicleId',
      'beginTime',
      'endTime'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelBicyleConsumptionDetail/js/controller.js',
      ecomodelUrl + 'pages/ecomodelBicyleConsumptionDetail/js/directive.js',
      ecomodelUrl + 'pages/ecomodelBicyleConsumptionDetail/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcButtonGroup',
      'xnyVehicleOrgSelector',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcTBEnergyConsumptionStatisticListXny',
    'url': 'bcPcTBEnergyConsumptionStatisticListXny',
    'directive': 'bcPcTBEnergyConsumptionStatisticListXny',
    'authCode': 'eap.tbEnergyStatistics',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelTBConsumptionStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelTBConsumptionStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelTBConsumptionStat/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'xnyVehicleOrgTree',
      'xnyFleetTree',
      'bcOrgTreeXny',
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
  {
    'state': 'bcPcEnergyConsumptionStatisticListXny',
    'url': 'bcPcEnergyConsumptionStatisticListXny',
    'directive': 'bcPcEnergyConsumptionStatisticListXny',
    'authCode': 'eap.energyStatistics',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelConsumptionStat-xny/js/controller.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat-xny/js/directive.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat-xny/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'xnyVehicleOrgTree',
      'xnyFleetTree',
      'bcRouteTree',
      'bcOrgTreeXny',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcAgGrid'
    ]
  },
  {
    'state': 'kyPcEnergyConsumptionStatisticList',
    'url': 'bcPcEnergyConsumptionStatisticList',
    'directive': 'kyPcEnergyConsumptionStatisticList',
    'authCode': 'eap.fuelconsStatistics',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelConsumptionStat-ky/js/controller.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat-ky/js/directive.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat-ky/js/service.js'
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
      'bcDriverTree',
      'bcObjectSearchTree',
      'bcOrgTree',
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
  {
    'state': 'jwPcRouteEnvList',
    'url': 'jwPcRouteEnvList',
    'directive': 'jwPcRouteEnvList',
    'authCode': 'eap.routeEnv',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelRouteEnvCoefficient/js/controller.js',
      ecomodelUrl + 'pages/ecomodelRouteEnvCoefficient/js/directive.js',
      ecomodelUrl + 'pages/ecomodelRouteEnvCoefficient/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcPagination',
      'bdTextInput',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'bcPcAssessMonthRangeSetList',
    'url': 'bcPcAssessMonthRangeSetList',
    'directive': 'bcPcAssessMonthRangeSetListXc',
    'authCode': 'eap.mothAssessSet',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelAssessMonthRangeSetList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAssessMonthRangeSetList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAssessMonthRangeSetList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'BizTypeResolver',
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
    'state': 'bcPcAssessConsumptionSetList',
    'url': 'bcPcAssessConsumptionSetList',
    'directive': 'bcPcAssessConsumptionSetListXc',
    'authCode': 'eap.energyAssessSet',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelAssessConsumptionSetList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAssessConsumptionSetList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAssessConsumptionSetList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcOrgSelector',
      'bcVehicleSelector',
      'bcPaginationDropDown',
      'bdDropDown',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
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
    'state': 'bcPcOilMonitoring',
    'url': 'bcPcOilMonitoring',
    'directive': 'bcPcOilMonitoring',
    'authCode': 'eap.oilMonitor',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelOilMonitoring/js/controller.js',
      ecomodelUrl + 'pages/ecomodelOilMonitoring/js/directive.js',
      ecomodelUrl + 'pages/ecomodelOilMonitoring/js/service.js'
    ],
    'dependencies': [
      'bcMapLib',
      'bcCcCommonMap',
      'echartsDiagram',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcOilMonitoringException',
    'url': 'bcPcOilMonitoringException',
    'directive': 'bcPcOilMonitoringException',
    'authCode': '',
    'params': ['vehicleId', 'vehicleName', 'startTime', 'endTime'],
    'files': [
      ecomodelUrl + 'pages/ecomodelOilMonitoringException/js/controller.js',
      ecomodelUrl + 'pages/ecomodelOilMonitoringException/js/directive.js',
      ecomodelUrl + 'pages/ecomodelOilMonitoringException/js/service.js'
    ],
    'dependencies': [
      'bcAddress',
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcConsumptionOverview-xc',
    'url': 'bcPcConsumptionOverview-xc',
    'directive': 'bcPcConsumptionOverview',
    'authCode': 'eap.energyStatistics',
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
      ecomodelUrl + 'pages/ecomodelConsumptionStat-xc/js/controller.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat-xc/js/directive.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat-xc/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bizCommon',
      'DateUtils',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcGrid',
      'echartsDiagram',
      'BizPageManager',
      'bcPagination'
    ]
  },
  {
    'state': 'bcPcConsumptionOverview',
    'url': 'bcPcConsumptionOverview',
    'directive': 'bcPcConsumptionOverview',
    'authCode': 'eap.energyStatistics',
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
      ecomodelUrl + 'pages/ecomodelConsumptionStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelConsumptionStat/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcCcConsumptionSummary',
      'bcCcConsumptionStatIndicator',
      'bcCcConsumptionStatList',
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
    'state': 'bcPcSaveOilDriveStatisticList',
    'url': 'bcPcSaveOilDriveStatisticList',
    'directive': 'kyPcSaveOilDriveStatisticList',
    'authCode': 'eap.saveOilBehiverStat',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelSaveOilDriveStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelSaveOilDriveStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelSaveOilDriveStat/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bcExportDialog',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bcGridMenu',
      'bdRadioGroup',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcDriverTree',
      'bcFleetTree',
      'bcOrgTree',
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
      'vehicleTreeOrgSearchTip',
      'xnyVehicleOrgTree',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'kyPcEnergyConsumptionAnalysed',
    'url': 'bcPcEnergyConsumptionAnalysed',
    'directive': 'kyPcEnergyConsumptionAnalysed',
    'authCode': 'eap.bicycleFuelconsAnalysis',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelBicycleConsumptionAnalysed/js/controller.js',
      ecomodelUrl + 'pages/ecomodelBicycleConsumptionAnalysed/js/directive.js',
      ecomodelUrl + 'pages/ecomodelBicycleConsumptionAnalysed/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDateTimeField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcFleetTree',
      'bcOrgTreeXny',
      'BcMapApi',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'echartsDiagram',
      'highchartNG'
    ]
  },
  {
    'state': 'bcPcEnergyConsumptionStatisticListXc',
    'url': 'bcPcEnergyConsumptionStatisticListXc',
    'directive': 'bcPcEnergyConsumptionStatisticListXc',
    'authCode': 'eap.vehicleEnergyStat',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelBicycleConsumptionStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelBicycleConsumptionStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelBicycleConsumptionStat/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'xcVehicleOrgTree'
    ]
  },
  {
    'state': 'fsbcPcEnergyPlusStationDetail',
    'url': 'fsbcPcEnergyPlusStationDetail',
    'directive': 'fsbcPcEnergyPlusStationDetail',
    'authCode': 'eap.energyStationDetail',
    'params': [
      'objectId'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelEnergyStationArchive/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEnergyStationArchive/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEnergyStationArchive/js/service.js'
    ],
    'dependencies': [
      'bcCcPopPosition',
      'bcPosition',
      'fsbcCcEnergyPlusStationSummary',
      'fsbcCcEnergyPlusDeviceListShort',
      'xnyCcEnergyPlusDeviceListShort',
      'fsbcCcEnergyPlusRecordListShort',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'fsbcPcEnergyPlusDevice',
    'url': 'fsbcPcEnergyPlusDevice',
    'directive': 'fsbcPcEnergyPlusDevice',
    'authCode': 'eap.energyEquipDetail',
    'params': [
      'objectId'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelEnergyStationEquipmentArchive/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEnergyStationEquipmentArchive/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEnergyStationEquipmentArchive/js/service.js'
    ],
    'dependencies': [
      'bcPosition',
      'bcCcPopPosition',
      'fsbcCcEnergyPlusDeviceInfo',
      'fsbcCcEnergyPlusDeviceDynaInfoNew',
      'fsbcCcEnergyPlusRecordListShort',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'energySubsidyReport',
    'url': 'energySubsidyReport',
    'directive': 'energySubsidyReport',
    'authCode': 'eap.energySubsidyList',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelEnergySubsidyReport/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEnergySubsidyReport/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEnergySubsidyReport/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bdDropDown',
      'bcPagination',
      'DialogService',
      'bcGrid',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bdExcelUploadXny',
      'bcAuthElement',
      'Authorization'
    ]
  },
  {
    'state': 'ecomodelAirConsumptionStat',
    'url': 'ecomodelAirConsumptionStat',
    'directive': 'ecomodelAirConsumptionStat',
    'authCode': 'eap.energyStatistics',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelAirConsumptionStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAirConsumptionStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAirConsumptionStat/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bcOrgSelector',
      'bdRadioGroup',
      'xnyVehicleOrgTree',
      'xnyFleetTree',
      'bcOrgTreeXny',
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
  {
    'state': 'ecomodelElectricalAccessoriesAnalysisStat',
    'url': 'ecomodelElectricalAccessoriesAnalysisStat',
    'directive': 'ecomodelElectricalAccessoriesAnalysisStat',
    'authCode': 'eap.electricalAccessoriesAnalysisStat',
    'params': [
      'vehicleIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelElectricalAccessoriesAnalysisStat/js/controller.js',
      ecomodelUrl + 'pages/ecomodelElectricalAccessoriesAnalysisStat/js/directive.js',
      ecomodelUrl + 'pages/ecomodelElectricalAccessoriesAnalysisStat/js/service.js'
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
      'bcAuthElement',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'bcPageObjectsMap-ytcup',
    'url': 'bcPageObjectsMap-ytcup',
    'reloadOnSearch': false,
    'directive': 'ytcupMapMonitor',
    'dependencies': [
      'bcMapLib',
      'GaodeMapApi',
      'echartsDiagram',
      'bcLocusBar',
      'bcGrid',
      'bcPagination',
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
      'bcNoAuthElement',
      'highchartNG'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelMapMonitor-ytcup/js/service.js',
      ecomodelUrl + 'pages/ecomodelMapMonitor-ytcup/js/directive.js',
      ecomodelUrl + 'pages/ecomodelMapMonitor-ytcup/js/ytcupMapMonitorCtrl.js',
      ecomodelUrl + 'pages/ecomodelMapMonitor-ytcup/js/alarmListCtrl.js'
    ]
  },

  {
    'state': 'ytcupGameData',
    'url': 'ytcupGameData',
    'directive': 'ytcupGameData',
    'params': [
      'entId',
      'roleName',
      'source'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelGameData-ytcup/js/controller.js',
      ecomodelUrl + 'pages/ecomodelGameData-ytcup/js/directive.js',
      ecomodelUrl + 'pages/ecomodelGameData-ytcup/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdTextArea',
      'bdRadioGroup',
      'bcOrgSelector',
      'bdDropDown',
      'bcOrgTree',
      'bcAuthorityTree',
      'bcPagination',
      'bcGrid',
      'bcCcObjFilterTree',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'bcDriverSelector',
      'bcPaginationDropDown',
      'DataProvider',
      'utilFilters',
      'bdDateTimeField',
      'bcAuthElement'
    ]
  },
  {
    'state': 'ytcupRecord',
    'url': 'ytcupRecord',
    'templateUrl': ecomodelUrl + 'pages/ecomodelGameRecord-ytcup/tpl/main.html',
    'dependencies': [
      'bcGrid',
      'bcDriverSelector',
      'bcPagination',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FloatService',
      'Skin',
      'TipService',
      'bdTextInput',
      'User',
      'Utils',
      'AppConfig',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelGameRecord-ytcup/js/ytcupRecordCtrl.js',
      ecomodelUrl + 'pages/ecomodelGameRecord-ytcup/js/service.js'
    ]
  },
  {
    'state': 'ytcupGameRewind',
    'url': 'ytcupGameRewind',
    'directive': 'ytcupGameRewind',
    'params': [
      'vehicleId',
      'driverId',
      'startTime',
      'endTime'
    ],
    'dependencies': [
      'GaodeMapApi',
      'bdCheckboxGroup',
      'echartsDiagram',
      'bcMapLib',
      'bcLocusBar',
      'bcGrid',
      'bcInclude',
      'bcPagination',
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
      'bcNoAuthElement',
      'highchartNG'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelGameRewind-ytcup/js/service.js',
      ecomodelUrl + 'pages/ecomodelGameRewind-ytcup/js/directive.js',
      ecomodelUrl + 'pages/ecomodelMapMonitor-ytcup/js/service.js',
      ecomodelUrl + 'pages/ecomodelMapMonitor-ytcup/js/alarmListCtrl.js',
      ecomodelUrl + 'pages/ecomodelGameRewind-ytcup/js/ytcupGameRewindCtrl.js'
    ]
  },
  {
    'state': 'ecomodelAirExceptionReminderSettings',
    'url': 'ecomodelAirExceptionReminderSettings',
    'directive': 'ecomodelAirExceptionReminderSettings',
    'authCode': 'eap.acMonitorSet',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelAirExceptionReminderSettings/js/controller.js',
      ecomodelUrl + 'pages/ecomodelAirExceptionReminderSettings/js/directive.js',
      ecomodelUrl + 'pages/ecomodelAirExceptionReminderSettings/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bdRadioGroup',
      'bdDropDown',
      'bdTimeField',
      'bdTextInput',
      'bdTextArea',
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
      'jwFilters'
    ]
  },
  {
    'state': 'bcPcConsumptionList',
    'url': 'bcPcConsumptionList',
    'directive': 'bcPcConsumptionList',
    'authCode': 'eap.energyStatistics',
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
      ecomodelUrl + 'pages/ecomodelConsumptionList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelConsumptionList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelConsumptionList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'DateUtils',
      'FieldValidate',
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
    'state': 'bcPcChargingPileSetting',
    'url': 'bcPcChargingPileSetting',
    'directive': 'bcPcChargingPileSetting',
    'authCode': 'eap.chargeParamSet.set',
    'params': [
      'chargingPileIds'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelChargingPileSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelChargingPileSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelChargingPileSetting/js/service.js'
    ],
    'dependencies': [
      'bdDecimalField',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'xnyBcPcPureElectricVehicleOprList',
    'url': 'xnyBcPcPureElectricVehicleOprList',
    'directive': 'xnyBcPcPureElectricVehicleOprList',
    'authCode': 'eap.pureElecVehiclesOperReport',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelPureElectricVehicleOprList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelPureElectricVehicleOprList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelPureElectricVehicleOprList/js/service.js'
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'xnyBcPcVehicleNoOperationList',
    'url': 'xnyBcPcVehicleNoOperationList',
    'directive': 'xnyBcPcVehicleNoOperationList',
    'authCode': 'eap.noVehiclesOperStatistics',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelVehicleNoOperationList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelVehicleNoOperationList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelVehicleNoOperationList/js/service.js'
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'xnyBcPcVehicleTotalMileageReportList',
    'url': 'xnyBcPcVehicleTotalMileageReportList',
    'directive': 'xnyBcPcVehicleTotalMileageReportList',
    'authCode': 'eap.totalMileageReport',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelVehicleTotalMileageReportList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelVehicleTotalMileageReportList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelVehicleTotalMileageReportList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'xnyVehicleOrgTree',
      'xnyFleetTree',
      'bcOrgTreeXny',
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
  {
    'state': 'ecomodelConsumptionList',
    'url': 'ecomodelConsumptionList',
    'directive': 'bcPcConsumptionList',
    'params': ['statObjType',
      'statObjId',
      'statRangeType',
      'statRangeId',
      'periodType',
      'startTime',
      'endTime'],
    'files': [
      ecomodelUrl + 'pages/ecomodelConsumptionList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelConsumptionList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelConsumptionList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'DateUtils',
      'FieldValidate',
      'Logger',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {// 节能潜力分析
    'state': 'saveEnergyAnalysed',
    'url': 'saveEnergyAnalysed',
    'directive': 'ecomodelEnergySavingPotentialAnalysis',
    'authCode': 'eap.saveEnergyAnalysed',
    'params': [
      'statsCycle', 'vehicleId', 'startTime', 'endTime'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelEnergySavingPotentialAnalysis/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEnergySavingPotentialAnalysis/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEnergySavingPotentialAnalysis/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bcVehicleSelector',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'jwFilters',
      'TipService',
      'DataProvider',
      'utilFilters',
      'echartsDiagram',
      'User'
      // "bcAgGrid"
    ]
  },
  {// 节能效果对比
    'state': 'saveEnergyCompare',
    'url': 'saveEnergyCompare',
    'directive': 'ecomodelEnergySavingEffectComparison',
    'authCode': 'eap.saveEnergyCompare',
    'params': ['statsCycle', 'vehicleId', 'startTime', 'endTime'],
    'files': [
      ecomodelUrl + 'pages/ecomodelEnergySavingEffectComparison/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEnergySavingEffectComparison/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEnergySavingEffectComparison/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'Utils',
      'TipService',
      'DataProvider',
      'utilFilters',
      'bcVehicleSelector'
    ]
  },
  {// 能耗看板
    'state': 'ecomodelBoard',
    'url': 'ecomodelBoard',
    'directive': 'ecomodelBoard',
    'authCode': 'eap.ecomodelBoard',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelBoard/js/controller.js',
      ecomodelUrl + 'pages/ecomodelBoard/js/directive.js',
      ecomodelUrl + 'pages/ecomodelBoard/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'echartsDiagram',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'bdDropDown',
      'bdDateField',
      // "bdDropDownBySearch",
      // "bdCheckboxGroupKb",
      'bdSortable',
      'User'
    ]
  },
  {
    'state': 'ecomodelParamSetting',
    'url': 'ecomodelParamSetting',
    'directive': 'ecomodelParamSetting',
    'authCode': 'eap.ecomodelThresholdSet',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelEcomodelParamSetting/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEcomodelParamSetting/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEcomodelParamSetting/js/service.js'
    ],
    'dependencies': [
      'bdIntegerField',
      'bdRadioGroup',
      'bcOrgTree',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'TipService',
      'I18n',
      'DataProvider',
      'bdDropDown'
    ]
  },
  {
    'state': 'bcPcTBEnergyConsumptionStatisticListXnyDalian',
    'url': 'bcPcTBEnergyConsumptionStatisticListXnyDalian',
    'directive': 'bcPcTBEnergyConsumptionStatisticListXnyDalian',
    'authCode': 'eap.tbEnergyStatistics.dalian',
    'params': [
      'isSum'
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelTBConsumptionStat-dalian/js/controller.js',
      ecomodelUrl + 'pages/ecomodelTBConsumptionStat-dalian/js/directive.js',
      ecomodelUrl + 'pages/ecomodelTBConsumptionStat-dalian/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'xnyVehicleOrgTree',
      'xnyFleetTree',
      'bcOrgTreeXny',
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
  // 能补记录概览
  {
    'state': 'fsbcPcEnergyPlusRecordList',
    'url': 'fsbcPcEnergyPlusRecordList',
    'directive': 'fsbcPcEnergyPlusRecordList',
    'authCode': '',
    'params': [
    ],
    'files': [
      ecomodelUrl + 'pages/ecomodelFsbcPcEnergyPlusRecordList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelFsbcPcEnergyPlusRecordList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelFsbcPcEnergyPlusRecordList/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
      'bcPagination',
      'bcGrid',
      'bdRadioGroup',
      'xnyVehicleOrgTree',
      'xnyFleetTree',
      'bcOrgTreeXny',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  // 充电机入口
  {
    'state': 'ecomodelChargerEntrance',
    'url': 'ecomodelChargerEntrance',
    'directive': 'ecomodelChargerEntrance',
    'authCode': 'eap.charging.app',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelChargerEntrance/js/controller.js',
      ecomodelUrl + 'pages/ecomodelChargerEntrance/js/directive.js',
      ecomodelUrl + 'pages/ecomodelChargerEntrance/js/service.js'
    ],
    'dependencies': [
      'bcAuthElement'
    ]
  },
  // 能补统计
  {
    'state': 'ecomodelComplementaryStatistics',
    'url': 'ecomodelComplementaryStatistics',
    'directive': 'ecomodelComplementaryStatistics',
    'authCode': 'eap.energyChargeRecord',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelComplementaryStatistics/js/controller.js',
      ecomodelUrl + 'pages/ecomodelComplementaryStatistics/js/directive.js',
      ecomodelUrl + 'pages/ecomodelComplementaryStatistics/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdDropDown',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bcOrgTree',
      'bcFleetTree',
      'bcRouteTree',
      'bcDriverTree',
      'bcAddress',
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'FieldValidate',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  // 发动机能耗大数据分析
  {
    'state': 'ecomodelEngineDataAnalysis',
    'url': 'ecomodelEngineDataAnalysis',
    'directive': 'ecomodelEngineDataAnalysis',
    'authCode': 'eap.ecomodelEngineDataAnalysis',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysis/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysis/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysis/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateField',
      'bdDropDown',
      'bdArrowDateTimeField',
      'BizControlResolver',
      'BizPageManager',
      'TipService',
      'Utils',
      'DataProvider',
      'utilFilters',
      'bcAgGrid',
      'bcPaginationDropDown',
      'bdTextInput',
      'echartsDiagram',
      'bizCommon',
      'FieldValidate'
      // "$cache"
    ]
  },
  {
    'state': 'ecomodelEngineDataAnalysisDay',
    'url': 'ecomodelEngineDataAnalysisDay',
    'directive': 'ecomodelEngineDataAnalysisDay',
    'authCode': 'eap.ecomodelEngineDataAnalysisDay',
    'params': ['time', 'vin', 'orgId'],
    'files': [
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysisDay/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysisDay/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysisDay/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'BizPageManager',
      'Utils',
      'DataProvider',
      'bcAgGrid',
      'bizCommon',
      'echartsDiagram'
    ]
  },
  {
    'state': 'ecomodelEngineDataAnalysisHour',
    'url': 'ecomodelEngineDataAnalysisHour',
    'directive': 'ecomodelEngineDataAnalysisHour',
    'authCode': 'eap.ecomodelEngineDataAnalysisHour',
    'params': ['time', 'vin', 'orgId'],
    'files': [
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysisHour/js/controller.js',
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysisHour/js/directive.js',
      ecomodelUrl + 'pages/ecomodelEngineDataAnalysisHour/js/service.js'
    ],
    'dependencies': [
      'BizControlResolver',
      'DataProvider',
      'bcAgGrid',
      'bizCommon',
      'echartsDiagram'
    ]
  },
  {
    'state': 'ecomodelHistoryDrivingRecordList',
    'url': 'ecomodelHistoryDrivingRecordList',
    'directive': 'ecomodelHistoryDrivingRecordList',
    'authCode': 'eap.historyDrivingData',
    'params': [],
    'files': [
      ecomodelUrl + 'pages/ecomodelHistoryDrivingRecordList/js/controller.js',
      ecomodelUrl + 'pages/ecomodelHistoryDrivingRecordList/js/directive.js',
      ecomodelUrl + 'pages/ecomodelHistoryDrivingRecordList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'xnyVehicleOrgSelector',
      'bcAgGrid',
      'bizCommon',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'jwFilters'
    ]
  }
]
if (!products.ecomodel) {
  products.addRouters(ecomodelRouter, 'ecomodel')
  products.ecomodel = true
  if (window.console) {
    console.log('load ecomodel.router')
  }
}
