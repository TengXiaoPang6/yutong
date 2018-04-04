<style>
  .demo-typo-box {
    height: 200px;
    width: 200px;
    position: relative;
    border: 1px solid #eaeefb;
    font-size: 40px;
    color: #1f2d3d;
    text-align: center;
    line-height: 162px;
    padding-bottom: 36px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 17px;
    border-radius: 4px;

    .name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-top: 1px solid #eaeefb;
      font-size: 14px;
      color: #8492a6;
      line-height: 35px;
      text-align: left;
      text-indent: 10px;
      font-family: 'Helvetica Neue';
    }
  }
  #demo-typo-size {
    .title{
      font-size:36px;
      line-height:48px;
       color:#2c405a;
    }
    .h1 {
      font-size:24px ;
      line-height: 32px;
      color:#2c405a;
    }
    .h2 {
      font-size:18px ;
      line-height: 24px;
       color:#2c405a;
    }
    .h3 {
      font-size:16px; ;
      line-height: 22px;
      color:#2c405a;
    }
    .text-regular {
      font-size: 14px;
      line-height: 20px;
      color:#3f536e;
    }
    .text-small {
      font-size: 12px;
      line-height: 28px;
      color:#3f536e;
    }
    .text-large {
      font-size: 18px;
      line-height: 30px;
    color:#3f536e;
    }
    .color-dark-light {
      color: #99a9bf;
    }

    .text-pagination{
      color:#8dabc4 !import;
    }

  }
  .typo-PingFang {
    font-family: 'PingFang SC';
  }
  .typo-Hiragino {
    font-family: 'Hiragino Sans GB';
  }
  .typo-Microsoft {
    font-family: 'Microsoft YaHei';
  }
  /* 英文 */
  .typo-Helvetica-Neue {
    font-family: 'Helvetica Neue';
  }
  .typo-Helvetica {
    font-family: 'Helvetica';
  }
  .typo-Arial {
    font-family: 'Arial';
  }
</style>

## Typography 字体

我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。

### 中文字体

<div class="demo-typo-box typo-PingFang">
  和畅惠风
  <div class="name">PingFang SC</div>
</div>
<div class="demo-typo-box typo-Hiragino">
  和畅惠风
  <div class="name">Hiragino Sans GB</div>
</div>
<div class="demo-typo-box typo-Microsoft">
  和畅惠风
  <div class="name">Microsoft YaHei</div>
</div>

### 英文／数字字体

<div class="demo-typo-box typo-Helvetica-neue">
  RGag
  <div class="name">Helvetica Neue</div>
</div>
<div class="demo-typo-box typo-Helvetica">
  RGag
  <div class="name">Helvetica</div>
</div>
<div class="demo-typo-box typo-Arial">
  RGag
  <div class="name">Arial</div>
</div>

### Font-family 代码

```css
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Heebo","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
```

### 字体使用规范

<table id="demo-typo-size">
  <tbody>
    <tr>
      <td >文字类型</td>
      <td >显示内容</td>
      <td class="color-dark-light">规格</td>
      <td >Class Name</td>
    </tr>
    <tr>
      <td class="title">主标题</td>
      <td class="title">用 Element 快速搭建页面</td>
      <td class="color-dark-light">36px </td>
      <td >'el-text-title'</td>
    </tr>
    <tr>
      <td class="h1">h1</td>
      <td class="h1">用 Element 快速搭建页面</td>
      <td class="color-dark-light">24px</td>
      <td>'el-text-h1'</td>
    </tr>
    <tr>
      <td class="h2">h2</td>
      <td class="h2">用 Element 快速搭建页面</td>
      <td class="color-dark-light">18px </td>
      <td>'el-text-h2'</td>
    </tr>
     <tr>
      <td class="h3">h3</td>
      <td class="h3">用 Element 快速搭建页面</td>
      <td class="color-dark-light">16px</td>
      <td>'el-text-h3'</td>
    </tr>
    <tr>
      <td class="text-large">正文(大)</td>
      <td class="text-large">用 Element 快速搭建页面</td>
      <td class="color-dark-light">18px</td>
      <td>'el-text-large'</td>
    </tr>
    <tr>
      <td class="text-regular">正文</td>
      <td class="text-regular">用 Element 快速搭建页面</td>
      <td class="color-dark-light">14px </td>
      <td>'el-text-base'</td>
    </tr>
    <tr>
      <td class="text-small">正文（小）</td>
      <td class="text-small">用 Element 快速搭建页面</td>
      <td class="color-dark-light">12px</td>
      <td>'el-text-small'</td>
    </tr>
    <tr>
      <td class="text-pagination">辅助文字</td>
      <td class="text-pagination">用 Element 快速搭建页面</td>
      <td class="color-dark-light">coloc:#8dabc4</td>
      <td>'el-text-gray'</td>
    </tr>
  </tbody>
</table>
