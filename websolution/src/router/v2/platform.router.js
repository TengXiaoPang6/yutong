var platformURL = 'platform/' // 获取产品引用URL
/* *
 * 平台服务产品路由配置
 * 平台服务产品的功能页面在此进行配置
 * */
var platformRouter = [
  {
    'state': 'bcPcWorkspace',
    'url': 'bcPcWorkspace',
    'directive': 'bcPcWorkspace',
    'authCode': 'eap.workspace',
    'dependencies': [
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcWorkspaceLayout'
    ],
    'files': [
      platformURL + 'pages/platformWorkspace/js/controller.js',
      platformURL + 'pages/platformWorkspace/js/directive.js',
      platformURL + 'pages/platformWorkspace/js/service.js'
    ]
  },
  {
    'state': 'bcPcUserSettingCenter',
    'url': 'bcPcUserSettingCenter',
    'directive': 'bcPcUserSettingCenter',
    'authCode': 'eap.userSpecialSet',
    'params': ['defaultHome'],
    'files': [
      platformURL + 'pages/platformUserSettingCenter/js/controller.js',
      platformURL + 'pages/platformUserSettingCenter/js/directive.js',
      platformURL + 'pages/platformUserSettingCenter/js/service.js'
    ],
    'dependencies': [
      'bdEmailField',
      'bdTextInput',
      'bdLabel',
      'bcOrgSelector',
      'bdRadioGroup',
      'bdDateField',
      'bdCountryProvinceCityField',
      'bdFileUpload',
      'bdDropDown',
      'BizPageManager',
      'FieldValidate',
      'I18n',
      'TipService',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcUserList',
    'url': 'bcPcUserList',
    'directive': 'bcPcUserList',
    'authCode': 'eap.user',
    'params': [
      'roleId',
      'status',
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformUserList/js/controller.js',
      platformURL + 'pages/platformUserList/js/directive.js',
      platformURL + 'pages/platformUserList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcOrgSelector',
      'bdDropDown',
      'bdPwdInput',
      'bdLabel',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'MD5',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcUserEdit',
    'url': 'bcPcUserEdit',
    'directive': 'jwPcUserEdit',
    'authCode': 'eap.user.add',
    'params': [
      'userId',
      'orgId',
      'preRoute'
    ],
    'files': [
      platformURL + 'pages/platformUserEdit-jw/js/controller.js',
      platformURL + 'pages/platformUserEdit-jw/js/directive.js',
      platformURL + 'pages/platformUserEdit-jw/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
      'BizTypeResolver',
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
    'state': 'bcPcUserList-xc',
    'url': 'bcPcUserList-xc',
    'directive': 'bcPcUserList',
    'authCode': 'eap.user',
    'params': [
      'roleId',
      'status',
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformUserList/js/controller.js',
      platformURL + 'pages/platformUserList/js/directive.js',
      platformURL + 'pages/platformUserList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcOrgSelector',
      'bdDropDown',
      'bdPwdInput',
      'bdLabel',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'MD5',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jwPcUserList',
    'url': 'jwPcUserList',
    'directive': 'bcPcUserList',
    'authCode': 'eap.user',
    'params': [
      'roleId',
      'status',
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformUserList/js/controller.js',
      platformURL + 'pages/platformUserList/js/directive.js',
      platformURL + 'pages/platformUserList/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcPagination',
      'bcOrgSelector',
      'bdDropDown',
      'bdPwdInput',
      'bcGrid',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'FieldValidate',
      'MD5',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'jwPcUserEdit',
    'url': 'jwPcUserEdit',
    'directive': 'jwPcUserEdit',
    'authCode': 'eap.user.add',
    'params': [
      'userId',
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformUserEdit-jw/js/controller.js',
      platformURL + 'pages/platformUserEdit-jw/js/directive.js',
      platformURL + 'pages/platformUserEdit-jw/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
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
    'state': 'bcPcUserList-zndd',
    'url': 'bcPcUserList-zndd',
    'directive': 'bcPcUserList',
    'authCode': 'eap.user',
    'params': [
      'roleId',
      'status',
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformUserList/js/controller.js',
      platformURL + 'pages/platformUserList/js/directive.js',
      platformURL + 'pages/platformUserList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcOrgSelector',
      'bdDropDown',
      'bdPwdInput',
      'bdLabel',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'MD5',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcUserList-acdb',
    'url': 'bcPcUserList-acdb',
    'directive': 'bcPcUserList',
    'authCode': 'eap.user',
    'params': [
      'roleId',
      'status',
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformUserList/js/controller.js',
      platformURL + 'pages/platformUserList/js/directive.js',
      platformURL + 'pages/platformUserList/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcOrgSelector',
      'bdDropDown',
      'bdPwdInput',
      'bdLabel',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'MD5',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcRoleList',
    'url': 'bcPcRoleList',
    'directive': 'bcPcRoleList',
    'authCode': 'eap.role',
    'params': [
      'entId',
      'roleName',
      'source'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/controller.js',
      platformURL + 'pages/platformRoleList/js/directive.js',
      platformURL + 'pages/platformRoleList/js/service.js'
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
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcRoleList-xny',
    'url': 'bcPcRoleList-xny',
    'directive': 'bcPcRoleList',
    'authCode': 'eap.role',
    'params': [
      'entId',
      'roleName',
      'source'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/service.js',
      platformURL + 'pages/platformRoleList/js/controller.js',
      platformURL + 'pages/platformRoleList/js/directive.js'
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
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcRolePileAuthList',
    'url': 'bcPcRolePileAuthList',
    'directive': 'bcPcRolePileAuthList',
    'authCode': 'eap.role',
    'params': [
      'roleId',
      'roleName'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/service.js',
      platformURL + 'pages/platformRolePileAuthList/js/service.js',
      platformURL + 'pages/platformRolePileAuthList/js/controller.js',
      platformURL + 'pages/platformRolePileAuthList/js/directive.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdRadioGroup',
      'xnySyncChargingPileTree',
      'bdDropDown',
      'bcXGrid',
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
    'state': 'bcPcRoleVehicleAuthList',
    'url': 'bcPcRoleVehicleAuthList',
    'directive': 'bcPcRoleVehicleAuthList',
    'authCode': 'eap.role',
    'params': [
      'roleId',
      'roleName'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/service.js',
      platformURL + 'pages/platformRoleVehicleAuthList/js/service.js',
      platformURL + 'pages/platformRoleVehicleAuthList/js/controller.js',
      platformURL + 'pages/platformRoleVehicleAuthList/js/directive.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdExcelImport',
      'bdRadioGroup',
      'bcObjectSearchTree',
      'bdDropDown',
      'bcXGrid',
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
    'state': 'bcPcRoleList-xc',
    'url': 'bcPcRoleList-xc',
    'directive': 'bcPcRoleList',
    'authCode': 'eap.role',
    'params': [
      'entId',
      'roleName',
      'source'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/controller.js',
      platformURL + 'pages/platformRoleList/js/directive.js',
      platformURL + 'pages/platformRoleList/js/service.js'
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
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcRoleList-acdb',
    'url': 'bcPcRoleList-acdb',
    'directive': 'bcPcRoleList',
    'authCode': 'eap.role',
    'params': [
      'entId',
      'roleName',
      'source'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/controller.js',
      platformURL + 'pages/platformRoleList/js/directive.js',
      platformURL + 'pages/platformRoleList/js/service.js'
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
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcRoleList-zndd',
    'url': 'bcPcRoleList-zndd',
    'directive': 'bcPcRoleList',
    'authCode': 'eap.role',
    'params': [
      'entId',
      'roleName',
      'source'
    ],
    'files': [
      platformURL + 'pages/platformRoleList/js/controller.js',
      platformURL + 'pages/platformRoleList/js/directive.js',
      platformURL + 'pages/platformRoleList/js/service.js'
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
      'DataProvider',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcComponentSnList',
    'url': 'bcPcComponentSnList',
    'directive': 'bcPcComponentSnList',
    'authCode': 'eap.partsSerialNumber',
    'params': [],
    'files': [
      platformURL + 'pages/platformComponentSnList/js/controller.js',
      platformURL + 'pages/platformComponentSnList/js/directive.js',
      platformURL + 'pages/platformComponentSnList/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bcPaginationDropDown',
      'bdTextInput',
      'bdDateTimeField',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
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
    'state': 'bcPcVehicleTerminalFilesList',
    'url': 'bcPcVehicleTerminalFilesList',
    'directive': 'bcPcVehicleTerminalFilesList',
    'authCode': 'eap.vehicleTerminalFile',
    'params': [],
    'files': [
      platformURL + 'pages/platformVehicleTerminalFilesList/js/controller.js',
      platformURL + 'pages/platformVehicleTerminalFilesList/js/directive.js',
      platformURL + 'pages/platformVehicleTerminalFilesList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'xnyVehicleOrgSelector',
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
      'bcTerminalSelector',
      'xnyChargingPileTree',
      'bdFileImport'
    ]
  },
  {
    'state': 'bcPcEnterpriseSetting',
    'url': 'bcPcEnterpriseSetting',
    'directive': 'bcPcEnterpriseSetting',
    'authCode': 'eap.entSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformEnterpriseSetting/js/controller.js',
      platformURL + 'pages/platformEnterpriseSetting/js/directive.js',
      platformURL + 'pages/platformEnterpriseSetting/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bdFileUpload',
      'BizPageManager',
      'BizTypeResolver',
      'FieldValidate',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'platformEnterpriseSetting-xc',
    'url': 'platformEnterpriseSetting-xc',
    'directive': 'bcPcEnterpriseSetting',
    'authCode': 'eap.entSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformEnterpriseSetting/js/controller.js',
      platformURL + 'pages/platformEnterpriseSetting/js/directive.js',
      platformURL + 'pages/platformEnterpriseSetting/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bdFileUpload',
      'BizPageManager',
      'BizTypeResolver',
      'FieldValidate',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'platformEnterpriseSettingXc-zndd',
    'url': 'platformEnterpriseSettingXc-zndd',
    'directive': 'bcPcEnterpriseSetting',
    'authCode': 'eap.entSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformEnterpriseSetting/js/controller.js',
      platformURL + 'pages/platformEnterpriseSetting/js/directive.js',
      platformURL + 'pages/platformEnterpriseSetting/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bdFileUpload',
      'BizPageManager',
      'BizTypeResolver',
      'FieldValidate',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'platformUserSettingCenter-xc',
    'url': 'platformUserSettingCenter-xc',
    'directive': 'bcPcUserSettingCenterXc',
    'authCode': 'eap.userSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformUserSettingCenter-xc/js/controller.js',
      platformURL + 'pages/platformUserSettingCenter-xc/js/directive.js',
      platformURL + 'pages/platformUserSettingCenter-xc/js/service.js'
    ],
    'dependencies': [
      'bdEmailField',
      'bdTextInput',
      'bdLabel',
      'bcOrgSelector',
      'bdRadioGroup',
      'bdDateField',
      'bdCountryProvinceCityFieldXc',
      'bdFileUploadXc',
      'bdDropDown',
      'BizPageManager',
      'FieldValidate',
      'I18n',
      'TipService',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'platformUserSettingCenter-jw',
    'url': 'platformUserSettingCenter-jw',
    'directive': 'jwPcUserSettingCenter',
    'authCode': 'eap.userSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformUserSettingCenter-jw/js/controller.js',
      platformURL + 'pages/platformUserSettingCenter-jw/js/directive.js',
      platformURL + 'pages/platformUserSettingCenter-jw/js/service.js'
    ],
    'dependencies': [
      'bdEmailField',
      'bdTextInput',
      'bdLabel',
      'bcOrgSelector',
      'bdRadioGroup',
      'bdDateField',
      'bdCountryProvinceCityField',
      'bdFileUpload',
      'bdDropDown',
      'BizPageManager',
      'FieldValidate',
      'I18n',
      'TipService',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcOrgEdit',
    'url': 'bcPcOrgEdit',
    'directive': 'bcPcOrgEdit',
    'authCode': 'eap.org',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformOrgEdit/js/controller.js',
      platformURL + 'pages/platformOrgEdit/js/directive.js',
      platformURL + 'pages/platformOrgEdit/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'FieldValidate',
      'dynamicDirective',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'bizCommon',
      'FieldValidate',
      'DialogService'
    ]
  },
  {
    'state': 'bcPcOrgEdit-xc',
    'url': 'bcPcOrgEdit-xc',
    'directive': 'bcPcOrgEdit',
    'authCode': 'eap.org',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformOrgEdit/js/controller.js',
      platformURL + 'pages/platformOrgEdit/js/directive.js',
      platformURL + 'pages/platformOrgEdit/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'dynamicDirective',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'bizCommon',
      'FieldValidate',
      'DialogService'
    ]
  },
  {
    'state': 'jwPcOrgEdit',
    'url': 'jwPcOrgEdit',
    'directive': 'bcPcOrgEdit',
    'authCode': 'eap.org',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformOrgEdit/js/controller.js',
      platformURL + 'pages/platformOrgEdit/js/directive.js',
      platformURL + 'pages/platformOrgEdit/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'dynamicDirective',
      'Utils',
      'TipService',
      'BizPageManager',
      'bizCommon',
      'FieldValidate',
      'DialogService'
    ]
  },
  {
    'state': 'bcPcOrgEdit-acdb',
    'url': 'bcPcOrgEdit-acdb',
    'directive': 'bcPcOrgEdit',
    'authCode': 'eap.org',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformOrgEdit/js/controller.js',
      platformURL + 'pages/platformOrgEdit/js/directive.js',
      platformURL + 'pages/platformOrgEdit/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'dynamicDirective',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'bizCommon',
      'FieldValidate',
      'DialogService'
    ]
  },
  {
    'state': 'bcPcOrgEdit-zndd',
    'url': 'bcPcOrgEdit-zndd',
    'directive': 'bcPcOrgEdit',
    'authCode': 'eap.org',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformOrgEdit/js/controller.js',
      platformURL + 'pages/platformOrgEdit/js/directive.js',
      platformURL + 'pages/platformOrgEdit/js/service.js'
    ],
    'dependencies': [
      'bcObjectTree',
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'dynamicDirective',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'bizCommon',
      'FieldValidate',
      'DialogService'
    ]
  },
  {
    'state': 'bcPcOrgCreate',
    'url': 'bcPcOrgCreate',
    'directive': 'bcPcOrgCreate',
    'authCode': 'eap.org.add',
    'params': [
      'orgParentId',
      'preRouter'
    ],
    'files': [
      platformURL + 'pages/platformOrgCreate/js/controller.js',
      platformURL + 'pages/platformOrgCreate/js/directive.js',
      platformURL + 'pages/platformOrgCreate/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'bizCommon',
      'BizPageManager',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective'
    ]
  },
  {
    'state': 'bcPcFleetList',
    'url': 'bcPcFleetList',
    'directive': 'bcPcFleetList',
    'authCode': 'eap.vehicleTeam',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformFleetList/js/controller.js',
      platformURL + 'pages/platformFleetList/js/directive.js',
      platformURL + 'pages/platformFleetList/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'bcPcFleetList-xc',
    'url': 'bcPcFleetList-xc',
    'directive': 'bcPcFleetList',
    'authCode': 'eap.vehicleTeam',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformFleetList/js/controller.js',
      platformURL + 'pages/platformFleetList/js/directive.js',
      platformURL + 'pages/platformFleetList/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'bcPcFleetList-acdb',
    'url': 'bcPcFleetList-acdb',
    'directive': 'bcPcFleetList',
    'authCode': 'eap.vehicleTeam',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformFleetList/js/controller.js',
      platformURL + 'pages/platformFleetList/js/directive.js',
      platformURL + 'pages/platformFleetList/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcPagination',
      'bcGrid',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },

  {
    'state': 'bcPcTerminalParamSetting',
    'url': 'bcPcTerminalParamSetting',
    'directive': 'bcPcTerminalParamSetting',
    'authCode': 'eap.terminalSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformTerminalParamSetting/js/controller.js',
      platformURL + 'pages/platformTerminalParamSetting/js/directive.js',
      platformURL + 'pages/platformTerminalParamSetting/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'bdTextInput',
      'bcVehicleTree',
      'bcObjectSearchTree',
      'bdInputDropList',
      'bcGrid',
      'bdDropDown',
      'bizCommon',
      'BizControlResolver',
      'BizTypeResolver',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'Logger',
      'TipService',
      'Utils',
      'I18n',
      'DataProvider',
      'dynamicDirective',
      'utilFilters',
      'bcTerminalSelector'
    ]
  },
  {
    'state': 'bcPcChargingPileConfigList',
    'url': 'bcPcChargingPileConfigList',
    'directive': 'bcPcChargingPileConfigList',
    'authCode': 'eap.chargeParamSet',
    'params': [
      'chargingPileIds'
    ],
    'files': [
      platformURL + 'pages/platformChargingPileConfigList/js/controller.js',
      platformURL + 'pages/platformChargingPileConfigList/js/directive.js',
      platformURL + 'pages/platformChargingPileConfigList/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'bcChargingPileSelector',
      'bcPagination',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
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
    'state': 'platformIntegratedQuery',
    'url': 'platformIntegratedQuery',
    'directive': 'bcPcIntegratedQuery',
    'authCode': 'eap.integratedQuery',
    'params': [
      'vehicle',
      'startTime',
      'endTime',
      'fields',
      'template'
    ],
    'files': [
      platformURL + 'pages/platformIntegratedQuery/js/controller.js',
      platformURL + 'pages/platformIntegratedQuery/js/directive.js',
      platformURL + 'pages/platformIntegratedQuery/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bdDateTimeField',
      'asyncPagination',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'FloatService',
      'TipService',
      'I18n',
      'Authorization',
      'DataProvider',
      'bcOuterClick',
      'utilFilters',
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcIntegratedQueryTemplateSetting',
    'url': 'bcPcIntegratedQueryTemplateSetting',
    'directive': 'bcPcIntegratedQueryTemplateSetting',
    'authCode': 'eap.integratedQueryTmplSet',
    'params': [
      'template'
    ],
    'files': [
      platformURL + 'pages/platformIntegratedQueryTemplateSetting/js/controller.js',
      platformURL + 'pages/platformIntegratedQueryTemplateSetting/js/directive.js',
      platformURL + 'pages/platformIntegratedQueryTemplateSetting/js/service.js'
    ],
    'dependencies': [
      'BizPageManager',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'bcOuterClick'
    ]
  },
  {
    'state': 'bcFeedbackList',
    'url': 'bcFeedbackList',
    'directive': 'bcFeedbackList',
    'authCode': 'eap.feedback',
    'params': [],
    'files': [
      platformURL + 'pages/platformFeedbackList/js/controller.js',
      platformURL + 'pages/platformFeedbackList/js/directive.js',
      platformURL + 'pages/platformFeedbackList/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'BizControlResolver',
      'I18n',
      'utilFilters',
      'bcAuthElement',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager'
    ]
  },
  {
    'state': 'bcFeedbackCreate',
    'url': 'bcFeedbackCreate',
    'directive': 'bcFeedbackCreate',
    'authCode': 'eap.feedback.add',
    'params': [],
    'files': [
      platformURL + 'pages/platformFeedbackCreate/js/controller.js',
      platformURL + 'pages/platformFeedbackCreate/js/directive.js',
      platformURL + 'pages/platformFeedbackCreate/js/service.js'
    ],
    'dependencies': [
      'bdFileUpload',
      'BizControlResolver',
      'I18n',
      'DateUtils',
      'Utils',
      'TipService',
      'BizPageManager',
      'BizTypeResolver'
    ]
  },
  {
    'state': 'bcNoticeList',
    'url': 'bcNoticeList',
    'directive': 'bcNoticeList',
    'authCode': 'eap.notice',
    'params': [
      'isRead',
      'noticeTypeId',
      'pageIndex'
    ],
    'files': [
      platformURL + 'pages/platformNoticeList/js/controller.js',
      platformURL + 'pages/platformNoticeList/js/directive.js',
      platformURL + 'pages/platformNoticeList/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'Logger',
      'pushAgent',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'bcPcInfoCommonList',
    'url': 'bcPcInfoCommonList',
    'directive': 'bcPcInfoCommonList',
    'authCode': 'eap.sysNotice',
    'params': [
      'type',
      'publishers'
    ],
    'files': [
      platformURL + 'pages/platformInfoCommonList/js/controller.js',
      platformURL + 'pages/platformInfoCommonList/js/directive.js',
      platformURL + 'pages/platformInfoCommonList/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
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
    'state': 'bcPcInfoCommonDetail',
    'url': 'bcPcInfoCommonDetail',
    'directive': 'bcPcInfoCommonDetail',
    'authCode': 'eap.sysNotice',
    'params': [
      'infoId'
    ],
    'files': [
      platformURL + 'pages/platformInfoCommonDetail/js/controller.js',
      platformURL + 'pages/platformInfoCommonDetail/js/directive.js',
      platformURL + 'pages/platformInfoCommonDetail/js/service.js'
    ],
    'dependencies': [
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'platformTaskList',
    'url': 'platformTaskList',
    'directive': 'bcPcTaskList',
    'authCode': 'eap.task',
    'params': [
      'startTime',
      'endTime',
      'taskType'
    ],
    'files': [
      platformURL + 'pages/platformTaskList/js/controller.js',
      platformURL + 'pages/platformTaskList/js/directive.js',
      platformURL + 'pages/platformTaskList/js/service.js'
    ],
    'dependencies': [
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
    'state': 'platformTaskDetail',
    'url': 'platformTaskDetail',
    'directive': 'bcPcTaskDetail',
    'authCode': 'eap.task',
    'params': [
      'taskId',
      'taskType',
      'batchCode'
    ],
    'files': [
      platformURL + 'pages/platformTaskDetail/js/controller.js',
      platformURL + 'pages/platformTaskDetail/js/directive.js',
      platformURL + 'pages/platformTaskDetail/js/service.js'
    ],
    'dependencies': [
      'bcTaskDetail',
      'bizCommon',
      'DateUtils',
      'Logger',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcDriverList',
    'url': 'jwPcDriverList',
    'directive': 'bcPcDriverList',
    'authCode': 'eap.driver',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformDriverList/js/controller.js',
      platformURL + 'pages/platformDriverList/js/directive.js',
      platformURL + 'pages/platformDriverList/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'BizPageManager',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcGridMenu'
    ]
  },
  {
    'state': 'jwPcDriverEdit',
    'url': 'jwPcDriverEdit',
    'directive': 'jwPcDriverEdit',
    'authCode': 'eap.driver.add',
    'params': [
      'driverId'
    ],
    'files': [
      platformURL + 'pages/platformDriverEdit-jw/js/controller.js',
      platformURL + 'pages/platformDriverEdit-jw/js/directive.js',
      platformURL + 'pages/platformDriverEdit-jw/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective'
    ]
  },
  {
    'state': 'bcPcDriverList-xc',
    'url': 'bcPcDriverList-xc',
    'directive': 'bcPcDriverList',
    'authCode': 'eap.driver',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformDriverList/js/controller.js',
      platformURL + 'pages/platformDriverList/js/directive.js',
      platformURL + 'pages/platformDriverList/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcOrgSelector',
      'bcGridMenu',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcGridMenu'
    ]
  },
  {
    'state': 'bcPcDriverEdit-xc',
    'url': 'bcPcDriverEdit-xc',
    'directive': 'bcPcDriverEditXc',
    'authCode': 'eap.driver.add',
    'params': [
      'driverId'
    ],
    'files': [
      platformURL + 'pages/platformDriverEdit-xc/js/controller.js',
      platformURL + 'pages/platformDriverEdit-xc/js/directive.js',
      platformURL + 'pages/platformDriverEdit-xc/js/service.js'
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
    'state': 'bcPcDriverList',
    'url': 'bcPcDriverList',
    'directive': 'bcPcDriverList',
    'authCode': 'eap.driver',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformDriverList/js/controller.js',
      platformURL + 'pages/platformDriverList/js/directive.js',
      platformURL + 'pages/platformDriverList/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcOrgSelector',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcGridMenu'
    ]
  },
  {
    'state': 'bcPcDriverEdit',
    'url': 'bcPcDriverEdit',
    'directive': 'bcPcDriverEdit',
    'authCode': 'eap.driver.add',
    'params': [
      'driverId',
      'preRoute'
    ],
    'files': [
      platformURL + 'pages/platformDriverEdit/js/controller.js',
      platformURL + 'pages/platformDriverEdit/js/directive.js',
      platformURL + 'pages/platformDriverEdit/js/service.js'
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
    'state': 'bcPcDriverList-zndd',
    'url': 'bcPcDriverList-zndd',
    'directive': 'bcPcDriverList',
    'authCode': 'eap.driver',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformDriverList/js/controller.js',
      platformURL + 'pages/platformDriverList/js/directive.js',
      platformURL + 'pages/platformDriverList/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcOrgSelector',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcGridMenu'
    ]
  },
  {
    'state': 'bcPcDriverEdit-zndd',
    'url': 'bcPcDriverEdit-zndd',
    'directive': 'bcPcDriverEditXc',
    'authCode': 'eap.driver.add',
    'params': [
      'driverId'
    ],
    'files': [
      platformURL + 'pages/platformDriverEdit-zndd/js/controller.js',
      platformURL + 'pages/platformDriverEdit-zndd/js/directive.js',
      platformURL + 'pages/platformDriverEdit-zndd/js/service.js'
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
  // {
  //     "state": "bcPcDriverSwipeCardInfoList",
  //     "url": "bcPcDriverSwipeCardInfoList",
  //     "directive": "bcPcDriverSwipeCardInfoList",
  //     "authCode": "eap.driveCardRecord",
  //     "params": [
  //         "statObjType",
  //         "statObjId",
  //         "statRangeType",
  //         "statRangeId",
  //         "periodType",
  //         "startTime",
  //         "endTime"
  //     ],
  //     "files": [
  //         platformURL + "pages/platformDriverSwipeCardInfoList/js/controller.js",
  //         platformURL + "pages/platformDriverSwipeCardInfoList/js/directive.js",
  //         platformURL + "pages/platformDriverSwipeCardInfoList/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bcButtonGroup",
  //         "bdDateField",
  //         "bcPagination",
  //         "bcDriverSelector",
  //         "bcOrgSelector",
  //         "bcVehicleTree",
  //         "bcObjectSearchTree",
  //         "bcGrid",
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "TipService",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement"
  //     ]
  // },
  // {
  //     "state": "bcPcDriverSwipeCardInfoList-xc",
  //     "url": "bcPcDriverSwipeCardInfoList-xc",
  //     "directive": "bcPcDriverSwipeCardInfoListXc",
  //     "authCode": "eap.driveCardRecord",
  //     "params": [
  //         "statObjType",
  //         "statObjId",
  //         "statRangeType",
  //         "statRangeId",
  //         "periodType",
  //         "startTime",
  //         "endTime"
  //     ],
  //     "files": [
  //         platformURL + "pages/platformDriverSwipeCardInfoList-xc/js/controller.js",
  //         platformURL + "pages/platformDriverSwipeCardInfoList-xc/js/directive.js",
  //         platformURL + "pages/platformDriverSwipeCardInfoList-xc/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bcButtonGroup",
  //         "bcGridMenu",
  //         "bdDateField",
  //         "bcPagination",
  //         "bcDriverSelector",
  //         "bcOrgSelector",
  //         "bcVehicleTreeXc",
  //         "bcGrid",
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "TipService",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement"
  //     ]
  // },
  // {
  //     "state": "bcPcDriverSwipeCardInfoList-gj",
  //     "url": "bcPcDriverSwipeCardInfoList-gj",
  //     "directive": "bcPcDriverSwipeCardInfoListXc",
  //     "authCode": "eap.driveCardRecord",
  //     "params": [
  //         "statObjType",
  //         "statObjId",
  //         "statRangeType",
  //         "statRangeId",
  //         "periodType",
  //         "startTime",
  //         "endTime"
  //     ],
  //     "files": [
  //         "pages/platformDriverSwipeCardInfoList-gj/js/controller.js",
  //         "pages/platformDriverSwipeCardInfoList-gj/js/directive.js",
  //         "pages/platformDriverSwipeCardInfoList-gj/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bcButtonGroup",
  //         "bdDateField",
  //         "bcPagination",
  //         "bcDriverSelector",
  //         "bcOrgSelector",
  //         "bcVehicleTree",
  //         "bcGrid",
  //         "bizCommon",
  //         "BizPageManager",
  //         "DateUtils",
  //         "TipService",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider",
  //         "utilFilters",
  //         "bcAuthElement"
  //     ]
  // },
  {
    'state': 'kyPcDriverList',
    'url': 'kyPcDriverList',
    'directive': 'kyPcDriverList',
    'authCode': 'eap.driver',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformDriverList-ky/js/controller.js',
      platformURL + 'pages/platformDriverList-ky/js/directive.js',
      platformURL + 'pages/platformDriverList-ky/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bcObjectSearchTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'bcGridMenu'
    ]
  },
  {
    'state': 'kyPcDriverEdit',
    'url': 'kyPcDriverEdit',
    'directive': 'kyPcDriverEdit',
    'authCode': 'eap.driver.add',
    'params': [
      'driverId'
    ],
    'files': [
      platformURL + 'pages/platformDriverEdit-ky/js/controller.js',
      platformURL + 'pages/platformDriverEdit-ky/js/directive.js',
      platformURL + 'pages/platformDriverEdit-ky/js/service.js'
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
    'state': 'bcPcConductorList',
    'url': 'bcPcConductorList',
    'directive': 'bcPcConductorListXc',
    'authCode': 'eap.passengers',
    'params': [
      'orgId'
    ],
    'files': [
      platformURL + 'pages/platformConductorList-xc/js/controller.js',
      platformURL + 'pages/platformConductorList-xc/js/directive.js',
      platformURL + 'pages/platformConductorList-xc/js/service.js'
    ],
    'dependencies': [
      'bcOrgSelector',
      'bcGridMenu',
      'bcPagination',
      'bcGrid',
      'bcOrgTree',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
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
    'state': 'bcPcConductorEdit',
    'url': 'bcPcConductorEdit',
    'directive': 'bcPcConductorEditXc',
    'authCode': 'eap.passengers.add',
    'params': [
      'conductorId'
    ],
    'files': [
      platformURL + 'pages/platformConductorEdit-xc/js/controller.js',
      platformURL + 'pages/platformConductorEdit-xc/js/directive.js',
      platformURL + 'pages/platformConductorEdit-xc/js/service.js'
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
  // {
  //     "state": "bcPcConductorDetail",
  //     "url": "bcPcConductorDetail",
  //     "directive": "bcPcConductorDetailXc",
  //     "authCode": "eap.passengersDetail",
  //     "params": [
  //         "conductorId",
  //         "objectId"
  //     ],
  //     "files": [
  //         platformURL + "pages/platformConductorDetail-xc/js/controller.js",
  //         platformURL + "pages/platformConductorDetail-xc/js/directive.js",
  //         platformURL + "pages/platformConductorDetail-xc/js/service.js"
  //     ],
  //     "dependencies": [
  //         "bcCcConductorSummary",
  //         "bcCcTripListAxxc",
  //         "bizCommon",
  //         "Logger",
  //         "Utils",
  //         "BizControlResolver",
  //         "I18n",
  //         "DataProvider"
  //     ]
  // },
  {
    'state': 'bcPcStudentList',
    'url': 'bcPcStudentList',
    'directive': 'bcPcStudentListXc',
    'authCode': 'eap.student',
    'params': [],
    'files': [
      platformURL + 'pages/platformStudentList-xc/js/controller.js',
      platformURL + 'pages/platformStudentList-xc/js/directive.js',
      platformURL + 'pages/platformStudentList-xc/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bcGridMenu',
      'bdTextInput',
      'bdDropDown',
      'bdCheckboxGroupDropDown',
      'bcGrid',
      'bizCommon',
      'FloatService',
      'bdExcelUploadXc',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement',
      'bcNoAuthElement',
      'bdDateField'
    ]
  },
  {
    'state': 'bcPcStudentEdit',
    'url': 'bcPcStudentEdit',
    'directive': 'bcPcStudentEdit',
    'authCode': 'eap.student.add',
    'params': [
      'stuId',
      'passengerId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformStudentEdit/js/controller.js',
      platformURL + 'pages/platformStudentEdit/js/directive.js',
      platformURL + 'pages/platformStudentEdit/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
      'FieldValidate',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective',
      'DateUtils',
      'bdDateField'

    ]
  },
  {
    'state': 'bcPcStudentDetail',
    'url': 'bcPcPassengerDetail',
    'directive': 'bcPcStudentDetailXc',
    'authCode': 'eap.studentDetail',
    'params': [
      'passengerId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformStudentDetail/js/controller.js',
      platformURL + 'pages/platformStudentDetail/js/directive.js',
      platformURL + 'pages/platformStudentDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcStudentSummary',
      'bcCcTravelRecordList',
      'Logger',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider'
    ]
  },
  {
    'state': 'jwPcVehicleList',
    'url': 'jwPcVehicleList',
    'directive': 'jwPcVehicleList',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId',
      'vehicleOrgIds'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList-jw/js/controller.js',
      platformURL + 'pages/platformVehicleList-jw/js/directive.js',
      platformURL + 'pages/platformVehicleList-jw/js/service.js'
    ],
    'dependencies': [
      'bcVehicleTree',
      'jwFaultVehicleTree',
      'bcPaginationDropDown',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
      'bcAgGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DialogService',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'bcNoAuthElement',
      'FloatService',
      'bdExcelUploadVehicleListJw',
      'bdExcelImportBase',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'jwPcVehicleConfig',
    'url': 'jwPcVehicleConfig',
    'directive': 'jwPcVehicleConfig',
    'authCode': 'eap.vehicle',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleAdd-jw/js/controller.js',
      platformURL + 'pages/platformVehicleAdd-jw/js/directive.js',
      platformURL + 'pages/platformVehicleAdd-jw/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective',
      'bdImageUpload',
      'bdDropDown'
    ]
  },
  {
    'state': 'jwPcVehicleEdit',
    'url': 'jwPcVehicleEdit',
    'directive': 'jwPcVehicleEdit',
    'authCode': 'eap.vehicle.edit',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleEdit-jw/js/controller.js',
      platformURL + 'pages/platformVehicleEdit-jw/js/directive.js',
      platformURL + 'pages/platformVehicleEdit-jw/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective',
      'bdImageUpload',
      'bdDropDown'
    ]
  },
  {
    'state': 'xnyPcVehicleList',
    'url': 'xnyPcVehicleList',
    'directive': 'xnyPcVehicleList',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList-xny/js/controller.js',
      platformURL + 'pages/platformVehicleList-xny/js/directive.js',
      platformURL + 'pages/platformVehicleList-xny/js/service.js'
    ],
    'dependencies': [
      'xnyVehicleOrgSelector',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
      'bcAgGrid',
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
      'bcNoAuthElement',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'xnyPcVehicleEdit',
    'url': 'xnyPcVehicleEdit',
    'directive': 'xnyPcVehicleEdit',
    'authCode': 'eap.vehicle.edit',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleEdit-xny/js/controller.js',
      platformURL + 'pages/platformVehicleEdit-xny/js/directive.js',
      platformURL + 'pages/platformVehicleEdit-xny/js/service.js'
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
    'state': 'bcPcVehicleList-xc',
    'url': 'bcPcVehicleList-xc',
    'directive': 'bcPcVehicleListXc',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList-xc/js/controller.js',
      platformURL + 'pages/platformVehicleList-xc/js/directive.js',
      platformURL + 'pages/platformVehicleList-xc/js/service.js'
    ],
    'dependencies': [
      'bcGridMenu',
      'bdTextInput',
      'bdInputDropList',
      'bcVehicleTreeXc',
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
      'bdDateField',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'bcPcVehicleEdit-xc',
    'url': 'bcPcVehicleEdit-xc',
    'directive': 'bcPcVehicleEditAxxc',
    'authCode': 'eap.vehicle.edit',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleEdit-xc/js/controller.js',
      platformURL + 'pages/platformVehicleEdit-xc/js/directive.js',
      platformURL + 'pages/platformVehicleEdit-xc/js/service.js'
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
    'state': 'bcPcVehicleList',
    'url': 'bcPcVehicleList',
    'directive': 'bcPcVehicleList',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList/js/controller.js',
      platformURL + 'pages/platformVehicleList/js/directive.js',
      platformURL + 'pages/platformVehicleList/js/service.js'
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
      'bdDateField',
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'bcPcVehicleEdit',
    'url': 'bcPcVehicleEdit',
    'directive': 'bcPcVehicleEdit',
    'authCode': 'eap.vehicle.edit',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleEdit/js/controller.js',
      platformURL + 'pages/platformVehicleEdit/js/directive.js',
      platformURL + 'pages/platformVehicleEdit/js/service.js'
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
    'state': 'bcPcVehicleList-jyd',
    'url': 'bcPcVehicleList-jyd',
    'directive': 'bcPcVehicleList',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList-jyd/js/controller.js',
      platformURL + 'pages/platformVehicleList-jyd/js/directive.js',
      platformURL + 'pages/platformVehicleList-jyd/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdInputDropList',
      'bcObjectSearchTree',
      'bcAddress',
      'bcOrgSelector',
      'bcPagination',
      'bdDropDown',
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
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'kyPcVehicleEdit',
    'url': 'kyPcVehicleEdit',
    'directive': 'kyPcVehicleEdit',
    'authCode': 'eap.vehicle.edit',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleEdit-ky/js/controller.js',
      platformURL + 'pages/platformVehicleEdit-ky/js/directive.js',
      platformURL + 'pages/platformVehicleEdit-ky/js/service.js'
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
    'state': 'bcPcVehicleList-zndd',
    'url': 'bcPcVehicleList-zndd',
    'directive': 'bcPcVehicleListXc',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList-zndd/js/controller.js',
      platformURL + 'pages/platformVehicleList-zndd/js/directive.js',
      platformURL + 'pages/platformVehicleList-zndd/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdInputDropList',
      'bcVehicleTreeXc',
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
      'bcGridMenu',
      'gridColumnFilter'
    ]
  },
  {
    'state': 'bcPcVehicleEdit-zndd',
    'url': 'bcPcVehicleEdit-zndd',
    'directive': 'bcPcVehicleEditAxxc',
    'authCode': 'eap.vehicle.edit',
    'params': [
      'vehicleId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleEdit-zndd/js/controller.js',
      platformURL + 'pages/platformVehicleEdit-zndd/js/directive.js',
      platformURL + 'pages/platformVehicleEdit-zndd/js/service.js'
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
    'state': 'platformUserSettingCenter-acdb',
    'url': 'platformUserSettingCenter-acdb',
    'directive': 'bcPcUserSettingCenterXc',
    'authCode': 'eap.userSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformUserSettingCenter-acdb/js/controller.js',
      platformURL + 'pages/platformUserSettingCenter-acdb/js/directive.js',
      platformURL + 'pages/platformUserSettingCenter-acdb/js/service.js'
    ],
    'dependencies': [
      'bdEmailField',
      'bdTextInput',
      'bdLabel',
      'bcOrgSelector',
      'bdRadioGroup',
      'bdDateField',
      'bdCountryProvinceCityFieldXc',
      'bdFileUploadXc',
      'bdDropDown',
      'BizPageManager',
      'FieldValidate',
      'I18n',
      'TipService',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  // {
  //    "state": "platformUserSettingCenter-gj",
  //    "url": "platformUserSettingCenter-gj",
  //    "directive": "jwPcUserSettingCenter",
  //    "authCode": "eap.userSpecialSet",
  //    "params": [],
  //    "files": [
  //        platformURL + "pages/platformUserSettingCenter-gj/js/controller.js",
  //        platformURL + "pages/platformUserSettingCenter-gj/js/directive.js",
  //        platformURL + "pages/platformUserSettingCenter-gj/js/service.js"
  //    ],
  //    "dependencies": [
  //        "bdEmailField",
  //        "bdTextInput",
  //        "bdLabel",
  //        "bcOrgSelector",
  //        "bdRadioGroup",
  //        "bdDateField",
  //        "bdCountryProvinceCityField",
  //        "bdFileUpload",
  //        "bdDropDown",
  //        "BizPageManager",
  //        "FieldValidate",
  //        "I18n",
  //        "TipService",
  //        "Utils",
  //        "BizControlResolver",
  //        "DataProvider",
  //        "bcAuthElement"
  //    ]
  // },
  {
    'state': 'platformUserSettingCenter-zndd',
    'url': 'platformUserSettingCenter-zndd',
    'directive': 'bcPcUserSettingCenterXc',
    'authCode': 'eap.userSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformUserSettingCenter-zndd/js/controller.js',
      platformURL + 'pages/platformUserSettingCenter-zndd/js/directive.js',
      platformURL + 'pages/platformUserSettingCenter-zndd/js/service.js'
    ],
    'dependencies': [
      'bdEmailField',
      'bdTextInput',
      'bdLabel',
      'bcOrgSelector',
      'bdRadioGroup',
      'bdDateField',
      'bdCountryProvinceCityFieldXc',
      'bdFileUploadXc',
      'bdDropDown',
      'BizPageManager',
      'FieldValidate',
      'I18n',
      'TipService',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcAuthElement',
      'Authorization'
    ]
  },
  {
    'state': 'bcPageChangePwd',
    'url': 'bcPageChangePwd',
    'directive': 'bcPageChangePwd',
    'authCode': 'eap.resetPasswd',
    'params': [],
    'files': [
      platformURL + 'pages/platformPageChangePwd/js/controller.js',
      platformURL + 'pages/platformPageChangePwd/js/directive.js',
      platformURL + 'pages/platformPageChangePwd/js/service.js'
    ],
    'dependencies': [
      'bdPwdInput',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'MD5',
      'DateUtils',
      'Utils',
      'TipService',
      'FieldValidate'
    ]
  },
  {
    'state': 'platformUserSettingCenter-xny',
    'url': 'platformUserSettingCenter-xny',
    'directive': 'bcPcUserSettingCenterXny',
    'authCode': 'eap.userSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformUserSettingCenter-xny/js/controller.js',
      platformURL + 'pages/platformUserSettingCenter-xny/js/directive.js',
      platformURL + 'pages/platformUserSettingCenter-xny/js/service.js'
    ],
    'dependencies': [
      'bdEmailField',
      'bdTextInput',
      'bdLabel',
      'bcOrgSelector',
      'bdRadioGroup',
      'bdDateField',
      'bdCountryProvinceCityField',
      'bdFileUpload',
      'bdDropDown',
      'BizPageManager',
      'FieldValidate',
      'I18n',
      'TipService',
      'Utils',
      'BizControlResolver',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'platformRepairmanList',
    'url': 'platformRepairmanList',
    'directive': 'bcPcRepairmanList',
    'authCode': 'eap.repairman',
    'params': [
      'workType'
    ],
    'files': [
      platformURL + 'pages/platformRepairmanList/js/controller.js',
      platformURL + 'pages/platformRepairmanList/js/directive.js',
      platformURL + 'pages/platformRepairmanList/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
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
    'state': 'platformVehicleConfList-jw',
    'url': 'platformVehicleConfList-jw',
    'directive': 'jwPcVehicleConfList',
    'authCode': 'eap.vehicleConf',
    'params': [],
    'files': [
      platformURL + 'pages/platformVehicleConfList-jw/js/controller.js',
      platformURL + 'pages/platformVehicleConfList-jw/js/directive.js',
      platformURL + 'pages/platformVehicleConfList-jw/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bdTextInput',
      'bdDropDown',
      'bcGrid',
      'BizControlResolver',
      'FieldValidate',
      'I18n',
      'DataProvider',
      'utilFilters'
    ]
  },
  {
    'state': 'xcBcPcVehicleDetail',
    'url': 'xcBcPcVehicleDetail',
    'directive': 'xcPcVehicleDetail',
    'authCode': 'eap.vehicleDetail',
    'params': [
      'vehicleId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleDetail-xc/js/controller.js',
      platformURL + 'pages/platformVehicleDetail-xc/js/directive.js',
      platformURL + 'pages/platformVehicleDetail-xc/js/service.js'
    ],
    'dependencies': [
      'bcCcVehicleDetailOperate',
      'bcCcVehicleSummary',
      'bcCcVehicleModelParam',
      'bcVehicleDashboard01',
      'bcCcPopPosition',
      'bcCcEventList',
      'bcCcDriveStatIndicator',
      'bcCcPhotoList',
      'bcCcConsumptionStatIndicator',
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
    'state': 'kyBcPcVehicleDetail',
    'url': 'kyBcPcVehicleDetail',
    'directive': 'kyPcVehicleDetail',
    'authCode': 'eap.vehicleDetail',
    'params': [
      'vehicleId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleDetail-ky/js/controller.js',
      platformURL + 'pages/platformVehicleDetail-ky/js/directive.js',
      platformURL + 'pages/platformVehicleDetail-ky/js/service.js'
    ],
    'dependencies': [
      'bcCcVehicleDetailOperate',
      'bcCcVehicleSummary',
      'bcCcVehicleModelParam',
      'bcVehicleDashboard01',
      'bcCcPopPosition',
      'bcCcEventList',
      'bcCcDriveStatIndicator',
      'bcCcPhotoList',
      //                "bcCcMalfunctionStatIndicator",
      'bcCcConsumptionStatIndicator',
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
    'state': 'xnyPcVehicleDetail',
    'url': 'xnyPcVehicleDetail',
    'directive': 'xnyPcVehicleDetail',
    'authCode': 'eap.vehicleDetail',
    'params': [
      'vehicleId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleDetail-xny/js/controller.js',
      platformURL + 'pages/platformVehicleDetail-xny/js/directive.js',
      platformURL + 'pages/platformVehicleDetail-xny/js/service.js'
    ],
    'dependencies': [
      'bcCcVehicleDetailOperate',
      'bcCcVehicleSummary',
      'bcCcVehicleModelParam',
      'bcVehicleDashboard01',
      'bcCcCommonMap',
      'bcCcDriveStatIndicator',
      'bcCcMalfunctionStatIndicator',
      'bcCcConsumptionStatIndicator',
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
    'state': 'bcPcVehicleDetail',
    'url': 'bcPcVehicleDetail',
    'directive': 'xcPcVehicleDetail',
    'authCode': 'eap.vehicleDetail',
    'params': [
      'vehicleId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleDetail-xc/js/controller.js',
      platformURL + 'pages/platformVehicleDetail-xc/js/directive.js',
      platformURL + 'pages/platformVehicleDetail-xc/js/service.js'
    ],
    'dependencies': [
      'bcCcVehicleDetailOperate',
      'bcCcVehicleSummary',
      'bcCcVehicleModelParam',
      'bcVehicleDashboard01',
      'bcCcPopPosition',
      'bcCcEventList',
      'bcCcDriveStatIndicator',
      'bcCcPhotoList',
      'bcCcMalfunctionStatIndicator',
      'bcCcConsumptionStatIndicator',
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
    'state': 'bcPcOperationLogDetailList',
    'url': 'bcPcOperationLogDetailList',
    'directive': 'bcPcOperationLogDetailList',
    'authCode': 'eap.operLogger',
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
      platformURL + 'pages/platformOperationLogDetailList/js/controller.js',
      platformURL + 'pages/platformOperationLogDetailList/js/directive.js',
      platformURL + 'pages/platformOperationLogDetailList/js/service.js'
    ],
    'dependencies': [
      'bcButtonGroup',
      'bdDateField',
      'bdDateTimeField',
      'bcPagination',
      'bdDropDown',
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
  /* 车队档案*/
  {
    'state': 'bcPcFleetDetail',
    'url': 'bcPcFleetDetail',
    'directive': 'bcPcFleetDetail',
    'authCode': 'eap.org',
    'params': [
      'fleetId',
      'objectId',
      'preRouter'
    ],
    'files': [
      platformURL + 'pages/platformFleetDetail/js/controller.js',
      platformURL + 'pages/platformFleetDetail/js/directive.js',
      platformURL + 'pages/platformFleetDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcFleetSummary',
      'bcCcVehicleList',
      'bcCcDriverList',
      'bcCcDriveBehaviorList',
      'bcCcConsumptionStatIndicator',
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
    'state': 'bcPcVehicleDetail-zndd',
    'url': 'bcPcVehicleDetail-zndd',
    'directive': 'xcPcVehicleDetail',
    'authCode': 'eap.vehicleDetail',
    'params': [
      'vehicleId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleDetail-zndd/js/controller.js',
      platformURL + 'pages/platformVehicleDetail-zndd/js/directive.js',
      platformURL + 'pages/platformVehicleDetail-zndd/js/service.js'
    ],
    'dependencies': [
      'bcCcVehicleDetailOperate',
      'bcCcVehicleSummary',
      'bcCcVehicleModelParam',
      'bcVehicleDashboard01',
      'bcCcPopPosition',
      'bcCcEventList',
      'bcCcDriveStatIndicator',
      'bcCcPhotoList',
      'bcCcConsumptionStatIndicator',
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
    'state': 'bcPcFleetDetail-zndd',
    'url': 'bcPcFleetDetail-zndd',
    'directive': 'bcPcFleetDetail',
    'authCode': 'eap.org',
    'params': [
      'fleetId',
      'objectId',
      'preRouter'
    ],
    'files': [
      platformURL + 'pages/platformFleetDetail/js/controller.js',
      platformURL + 'pages/platformFleetDetail/js/directive.js',
      platformURL + 'pages/platformFleetDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcFleetSummary',
      'bcCcVehicleList',
      'bcCcDriverList',
      'bcCcDriveBehaviorList',
      'bcCcConsumptionStatIndicator',
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
    'state': 'bcPcEntDetail',
    'url': 'bcPcEntDetail',
    'directive': 'bcPcEntDetail',
    'authCode': 'eap.org',
    'params': [
      'entId',
      'objectId',
      'preRouter'
    ],
    'files': [
      platformURL + '/pages/platformEntDetail/js/controller.js',
      platformURL + '/pages/platformEntDetail/js/directive.js',
      platformURL + '/pages/platformEntDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcEntSummary',
      'bcCcFleetList',
      'bcCcConductorList',
      'bcCcVehicleList',
      'bcCcRouteList',
      'bcCcDriveStatIndicator',
      'bcCcConsumptionStatIndicator',
      'bcCcMalfunctionStatIndicator',
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
    'state': 'bcPcEntDetail-zndd',
    'url': 'bcPcEntDetail-zndd',
    'directive': 'bcPcEntDetail',
    'authCode': 'eap.org',
    'params': [
      'entId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformEntDetail/js/controller.js',
      platformURL + 'pages/platformEntDetail/js/directive.js',
      platformURL + 'pages/platformEntDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcEntSummary',
      'bcCcFleetList',
      'bcCcConductorList',
      'bcCcVehicleList',
      'bcCcRouteList',
      'bcCcDriveStatIndicator',
      'bcCcConsumptionStatIndicator',
      'bcCcMalfunctionStatIndicator',
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
    'state': 'jwPcVehicleArchive',
    'url': 'jwPcVehicleArchive',
    'directive': 'jwPcVehicleArchive',
    'authCode': 'eap.vehicleDetail',
    'params': ['vehicleId', 'vehicleLn', 'vehicleCode', 'energyType'],
    'files': [
      platformURL + 'pages/platformVehicleArchive-jw/js/controller.js',
      platformURL + 'pages/platformVehicleArchive-jw/js/directive.js',
      platformURL + 'pages/platformVehicleArchive-jw/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'jwInputAutoComplete',
      'bdArrowDateTimeField',
      'bcGrid',
      'bcPagination',
      'bcPaginationDropDown',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'DataProvider',
      'jwFilters',
      'echarts3Diagram',
      'echartsDiagram',
      'jwDropDown',
      'bdDateField',
      'bcAgGrid',
      'jwArrowDateField',
      'Utils',
      'bdImageUpload',
      'bcCcVehiclePhoto'
    ]
  },
  {
    'state': 'bcPcChargingPileEdit',
    'url': 'bcPcChargingPileEdit',
    'directive': 'bcPcChargingPileEdit',
    'authCode': 'eap.energyEquip.edit',
    'params': [
      'chargingPileId'
    ],
    'files': [
      platformURL + 'pages/platformEnergyStationEquipmentEdit/js/controller.js',
      platformURL + 'pages/platformEnergyStationEquipmentEdit/js/directive.js',
      platformURL + 'pages/platformEnergyStationEquipmentEdit/js/service.js'
    ],
    'dependencies': [
      'bcScrollSpyNavi',
      'bcScrollSpyContent',
      'bcCcCommonMap',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'dynamicDirective',
      'bcOuterClick'
    ]
  },
  {
    'state': 'bcPcDriverDetail',
    'url': 'bcPcDriverDetail',
    'directive': 'bcPcDriverDetail',
    'authCode': 'eap.driverDetail',
    'params': [
      'driverId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformDriverDetail/js/controller.js',
      platformURL + 'pages/platformDriverDetail/js/directive.js',
      platformURL + 'pages/platformDriverDetail/js/service.js'
    ],
    'dependencies': [
      'bcCcDriverSummary',
      'bcCcDriveStatIndicator',
      'bcCcConsumptionStatIndicator',
      'bcCcDriveBehaviorStatIndicator',
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
    'state': 'bcPcDriverDetail-zndd',
    'url': 'bcPcDriverDetail-zndd',
    'directive': 'bcPcDriverDetailXc',
    'authCode': 'eap.driverDetail',
    'params': [
      'driverId',
      'objectId'
    ],
    'files': [
      platformURL + 'pages/platformDriverDetailXc-zndd/js/controller.js',
      platformURL + 'pages/platformDriverDetailXc-zndd/js/directive.js',
      platformURL + 'pages/platformDriverDetailXc-zndd/js/service.js'
    ],
    'dependencies': [
      'bcCcDriverSummary',
      'bcCcDriveStatIndicator',
      'bcCcConsumptionStatIndicator',
      'bcCcDriveBehaviorStatIndicator',
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
    'state': 'bcPcStuMsgCfgList-xc',
    'url': 'bcPcStuMsgCfgList-xc',
    'directive': 'bcPcStuMsgCfgListXc',
    'authCode': 'eap.smsNotice',
    'params': [
      'stuName',
      'stuCode',
      'schoolName',
      'className',
      'status'
    ],
    'files': [
      platformURL + 'pages/platformStuMsgCfgListXc-xc/js/controller.js',
      platformURL + 'pages/platformStuMsgCfgListXc-xc/js/directive.js',
      platformURL + 'pages/platformStuMsgCfgListXc-xc/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bcGridMenu',
      'bdDropDown',
      'bdDateField',
      'bcPagination',
      'bcGrid',
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
      'bcAuthElement'
    ]
  },
  {
    'state': 'bcPcStuMsgCfgEdit-xc',
    'url': 'bcPcStuMsgCfgEdit-xc',
    'directive': 'bcPcStuMsgCfgEditXc',
    'authCode': 'eap.smsNotice.add',
    'params': [
      'stuId'
    ],
    'files': [
      platformURL + 'pages/platformStuMsgCfgEditXc-xc/js/controller.js',
      platformURL + 'pages/platformStuMsgCfgEditXc-xc/js/directive.js',
      platformURL + 'pages/platformStuMsgCfgEditXc-xc/js/service.js'
    ],
    'dependencies': [
      'bdTextInput',
      'bdDateField',
      'bdDropDown',
      'bcVehicleSelector',
      'bcAddress',
      'bcGrid',
      'bdInputDropList',
      'bdCheckboxGroup',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
      'FieldValidate',
      'FloatService',
      'TipService',
      'BizControlResolver',
      'I18n',
      'Utils',
      'DataProvider'
    ]
  },
  {
    'state': 'bcPcEnterpriseSetting-ytcup',
    'url': 'bcPcEnterpriseSetting-ytcup',
    'directive': 'bcPcEnterpriseSetting',
    'authCode': 'eap.entSpecialSet',
    'params': [],
    'files': [
      platformURL + 'pages/platformEnterpriseSetting/js/controller.js',
      platformURL + 'pages/platformEnterpriseSetting/js/directive.js',
      platformURL + 'pages/platformEnterpriseSetting/js/service.js'
    ],
    'dependencies': [
      'bdRadioGroup',
      'bdFileUpload',
      'BizPageManager',
      'BizTypeResolver',
      'FieldValidate',
      'MD5',
      'TipService',
      'Utils',
      'BizControlResolver',
      'I18n',
      'DataProvider',
      'bcAuthElement'
    ]
  },
  {
    'state': 'fsbcPcEnergyPlusStationList',
    'url': 'fsbcPcEnergyPlusStationList',
    'directive': 'fsbcPcEnergyPlusStationList',
    'authCode': 'eap.energyStation',
    'params': [
      'stationType'
    ],
    'files': [
      platformURL + 'pages/platformEnergyStationOverview/js/controller.js',
      platformURL + 'pages/platformEnergyStationOverview/js/directive.js',
      platformURL + 'pages/platformEnergyStationOverview/js/service.js'
    ],
    'dependencies': [
      'bdDropDown',
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
      'bcAuthElement',
      'bcNoAuthElement'
    ]
  },
  {
    'state': 'ytcupUserList',
    'url': 'ytcupUserList',
    'directive': 'ytcupUserList',
    'authCode': 'eap.vehicle',
    'params': [],
    'files': [
      platformURL + 'pages/platformUserList-ytcup/js/controller.js',
      platformURL + 'pages/platformUserList-ytcup/js/directive.js',
      platformURL + 'pages/platformUserList-ytcup/js/service.js'
    ],
    'dependencies': [
      'bcAddress',
      'bcOrgSelector',
      'bdTextInput',
      'bcPagination',
      'bdDropDown',
      'bcGrid',
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
    'state': 'ytcupPcVehicleList',
    'url': 'ytcupPcVehicleList',
    'directive': 'ytcupPcVehicleList',
    'authCode': 'eap.vehicle',
    'params': [
      'orgId',
      'vehicleModelId',
      'regState',
      'onlineState',
      'vehicleBrandId'
    ],
    'files': [
      platformURL + 'pages/platformVehicleList-ytcup/js/controller.js',
      platformURL + 'pages/platformVehicleList-ytcup/js/directive.js',
      platformURL + 'pages/platformVehicleList-ytcup/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'bdDropDown',
      'bcGrid',
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
    'state': 'ytcupUserEdit',
    'url': 'ytcupUserEdit',
    'directive': 'ytcupUserEdit',
    'authCode': 'eap.vehicle',
    'params': ['userId'],
    'files': [
      platformURL + 'pages/platformUserEdit-ytcup/js/controller.js',
      platformURL + 'pages/platformUserEdit-ytcup/js/directive.js',
      platformURL + 'pages/platformUserEdit-ytcup/js/service.js'
    ],
    'dependencies': [
      'bdDateField',
      'bdTextInput',
      'bcAddress',
      'bcPagination',
      'bcOrgSelector',
      'bdDropDown',
      'bdPwdInput',
      'bdLabel',
      'bcGrid',
      'bizCommon',
      'BizControlResolver',
      'BizPageManager',
      'DateUtils',
      'DialogService',
      'FieldValidate',
      'MD5',
      'TipService',
      'I18n',
      'DataProvider',
      'utilFilters',
      'bcAuthElement',
      'BizTypeResolver',
      'dynamicDirective'
    ]
  },
  {
    'state': 'bcPcChargingPileList',
    'url': 'bcPcChargingPileList',
    'directive': 'bcPcChargingPileList',
    'authCode': 'eap.energyEquip',
    'params': [
      'energyStationId',
      'chargingPileIds',
      'states',
      'brand'
    ],
    'files': [
      platformURL + 'pages/platformEnergyStationEquipmentOverview/js/controller.js',
      platformURL + 'pages/platformEnergyStationEquipmentOverview/js/directive.js',
      platformURL + 'pages/platformEnergyStationEquipmentOverview/js/service.js'
    ],
    'dependencies': [
      'bcGrid',
      'xnyChargingPileTree',
      'toggleFloatBar',
      'bdTextInput',
      'bdCheckboxGroupDropDown',
      'bcAddress',
      'bcPagination',
      'bizCommon',
      'BizPageManager',
      'DateUtils',
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
    'state': 'jwPcDriverArchive',
    'url': 'jwPcDriverArchive',
    'directive': 'jwPcDriverArchive',
    'authCode': 'eap.driverDetail',
    'params': [
      'driverId'
    ],
    'files': [
      platformURL + 'pages/platformDriverArchive-jw/js/controller.js',
      platformURL + 'pages/platformDriverArchive-jw/js/directive.js',
      platformURL + 'pages/platformDriverArchive-jw/js/service.js'
    ],
    'dependencies': [
      'bdArrowDateTimeField',
      'bdArrowDateField',
      'bcGrid',
      'bcPagination',
      'BizControlResolver',
      'DateUtils',
      'DialogService',
      'Utils',
      'Authorization',
      'DataProvider',
      'utilFilters',
      'jwFilters',
      'jwDropDown'
    ]
  },
  {
    'state': 'bcSearchResult',
    'url': 'bcSearchResult',
    'directive': 'bcSearchResult',
    'authCode': 'eap.search',
    'params': [
      'keyword'
    ],
    'files': [
      platformURL + 'pages/platformSearchResult/js/controller.js',
      platformURL + 'pages/platformSearchResult/js/directive.js',
      platformURL + 'pages/platformSearchResult/js/service.js'
    ],
    'dependencies': [
      'bcPagination',
      'BizControlResolver',
      'Utils',
      'Authorization',
      'DataProvider'
    ]
  }
]
