## 组件开发者

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
4.在浏览器打开 127.0.0.1:8085 预览

### 组件开发流程

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

### 组件发布流程
由专人负责，在master分支下
```shell
npm publish
```
详细内容，内网npm仓库搭建完成后补充...


