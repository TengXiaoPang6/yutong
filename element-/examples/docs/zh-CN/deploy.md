## 生产环境部署、打补丁

### 部署到生产环境

1.配置webpack

webpack 有多种配置方式，根据项目的特点进行合理的配置可使生产环境部署和补丁应用更方便。

举例
```javascript
module.exports = {
  entry: {
    app: path.join(__dirname, 'src/main.js'),
    vendor: ['vue']  // 所有类库都可以在这里声明
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
}
```
2.项目代码提交到指定分支

3.组件发布到npm私有仓库

4.构建机器安装node.js和node包管理工具npm

5.设置私有npm仓库地址

6.拉取分支代码

7.安装依赖
```shell
> npm install
```
8.输出到生产环境：
```shell
> npm run build
```
可以搭配jenkins等集成工具减少上述过程的人工干预。

### 应用补丁

1.开发环境打包
```shell
> npm install
> npm run build
```
2.拷贝打包好的对应文件到提测目录

3.测试

4.替换对应文件到生产环境：

5.提交源码到分支/主干