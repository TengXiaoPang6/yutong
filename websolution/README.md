# V3 WebSolution

## 项目结构
```bash
    ├── build                      // 构建相关 webpack config
    │   ├── build.js                        生产环境构建脚本
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置  
    ├── config                     // 配置相关 开发 测试 生产环境的配置
    │   ├── dev.env.js                        开发环境变量 
    │   ├── index.js                          整体参数配置 web.config.js
    │   ├── prod.env.js                       生产环境变量
    │   └── sit.env.js                        测试环境变量 
    ├── dist                       // 打包输出目录
    ├── node_modules               // 项目依赖的各种包 包含[基础控件]
    ├── src                        // 源代码
    │   ├── api                    // [前端ORM层] 
    │   │   ├── v2                            V+2.0的接口配置dataConfig.json
    │   │   ├── baseModule.js                 后端微服务和axios的适配层
    │   │   ├── BusinessService.js            业务设置服务类
    │   │   ├── DiagnosisService.js           诊断服务类
    │   │   ├── LoginService.js               登录鉴权等公用服务类
    │   │   ├── MapService.js                 地图监控服务类 
    │   │   ├── ResourceService.js            资源中心服务类
    │   │   └── TransferService.js            Transfer服务类，用于向3.0向2.0接口调用    
    │   ├── assets                 // echarts主题 字体 图片等静态资源
    │   ├── components             // [通用组件] 文件夹以大写开头
    │   ├── directive              // 全局自定义指令
    │   ├── filters                // 全局自定义filter
    │   ├── icons                  // svg icons图标和fallback png图标
    │   ├── lang                   // 国际化 
    │   ├── mock                   // 项目mock 模拟数据和拦截转发
    │   ├── router                 // [路由层] 前端静态资源池
    │   │   ├── v2                              V+2.0的路由配置
    │   │   ├── _import_development.js          加速dev hotreload时间 开发环境不使用code splite
    │   │   ├── _import_production.js           生产环境采用code splite减少打包大小和实现异步按需加载模块
    │   │   └── index.js                        路由配置    
    │   ├── store                  // [VUEX层]   状态管理机
    │   │   ├── modules                         按模块划分的store 包含选项卡 用户信息 权限等
    │   │   ├── getters.js                      store的接入层
    │   │   └── index.js                        store的初始化  
    │   ├── styles                 // 全局样式 Atom CSS 和 Critcal CSS
    │   ├── utils                  // 能够抽离出的工具类
    │   ├── views                  // [视图层]接入型组件（容器组件）
    │   │   ├── common                          公共的视图比如layout
    │   │   │   ├── layout                     不同类型的布局写在layout下，一个常规的layout通常包含header footer sidebar navbar main等
    │   │   │   ├── ...
    │   │   │   └── login                      登录页面是按解决方案定制的，是特殊的layout 
    │   │   ├── diagnosis   
    │   │   │   ├── components                 诊断模块用到的[领域通用组件]，将来可以合并同类项到[通用组件]
    │   │   │   ├── 诊断页面1...               可以是文件夹，如有子页面再建children文件夹
    │   │   │   └── 诊断页面2...               结构简单的可以是.vue文件    
    │   │   ├── mapMonitoring   
    │   │   │   ├── components                 地图监控模块用到的[领域通用组件]，将来可以合并同类项到[通用组件]
    │   │   │   ├── 地图页面1...               可以是文件夹，如有子页面再建children文件夹
    │   │   │   └── 地图页面2...               结构简单的可以是.vue文件                                   
    │   │   └── ...                             其他的各种页面视图 省略                        
    │   ├── App.vue                // 入口页面
    │   ├── errorLog.js            // 错误日志 供开发和测试使用
    │   ├── main.js                // 入口 加载组件 初始化等
    │   └── pro.loader.js          // 登陆后的预加载资源处理和权限过滤
    ├── .babelrc                    // babel-loader 配置
    ├── eslintrc.js                 // eslint 配置项
    ├── eslintignore.js             // eslint 忽略目录
    ├── .gitignore                  // git 忽略项
    ├── favicon.ico                 // favicon网站图标
    ├── gulpfile.js                 // gulp任务 用于打包网站主题
    ├── index.html                  // html模板
    └── package.json                // package.json
    └── package-lock.json           // 依赖锁定 需要 npm > 5
```


## Develop

```bash
# develop
npm run dev
# eslint code and fix
npm run test

```

## Build
```bash
# build for test environment
npm run build:sit

# build for production environment
npm run build:prod
```