## 控件开发者

### 安装流程

1.git clone git@dev.yutong.com:v-3.0-group/element-dev.git

2.我们使用package-lock来锁定依赖，所以请先确保已经安装了npm最新版本

```shell
npm i npm -g
```
3.启动项目
```shell
npm run dev
```
4.在浏览器打开 127.0.0.1:8085 进行开发

### 控件开发流程

1.在dev创建分支

2.运行make new命令,创建组件目录结构，包含测试代码、入口文件、cooking 配置、package.json、文档
```shell
npm run makenew 组件名称(英文) 组件名称（中文）
```
例如：
```shell
npm run makenew button 
```
将在packages/目录下创建名为button的组件

3.如果包含父子组件，需要更改目录结构，参考 Button组件

4.组件内如果依赖了其他组件，需要在当前组件内引入，参考 Select组件

### 组件库发布流程
1.保证代码已经提交并正常运行

2.在对应分支下，依次执行npm scripts如下
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

