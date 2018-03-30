# element-dev

 V+ 3.0前端组件库(基于element-ui@2.2.1)

> A Vue.js 2.5.2 UI Toolkit for Web.

## dev
```shell
//安装node.js 8以上,另外我们使用package-lock来锁定依赖，所以请先安装npm最新版本
npm install npm -g 
npm run dev
```

## 开发新组件
```shell
npm run makenew 组件名称(英文) 组件名称（中文）
```

### 组件库发布流程
1.保证代码已经提交并正常运行

2.在**master**分支下，依次执行npm scripts如下
```shell
npm run adduser  //添加或登录用户npm run login

npm run dist    //生产环境打包

//修改package.json中的版本号
npm run pub //发布到内网组件仓库
//发布白老鼠版本请加tag beta
npm run pub --tag beta
```
3.同时发布组件管理平台（非必须）
```shell
npm run deploy
```
由于信息安全限制，不能自动发布文件到远程服务器
运行命令后请手动更新组件管理平台页面：
将examples/elment-ui 通过sftp工具复制到10.66.196.55的home/v3-element-static目录下
然后再该目录下运行：
```shell
npm run reload
```
然后就可以通过[http://10.66.196.55:4000](http://10.66.196.55:4000)实时预览最新的组件库了