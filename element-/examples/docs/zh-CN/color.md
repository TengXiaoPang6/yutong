<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;

    & .value {
      font-size: 12px;
      opacity: 0.69;
      line-height: 24px;
    }
  }
  .demo-color-box-group {
    
    .demo-color-box {
      border-radius: 0;
      margin: 0;
    }
    .demo-color-box:first-child {
      border-radius: 4px 4px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .bg-blue {
    background-color: #0093EE;
  }

  .bg-success {
    background-color: #4ECE3D;
  }
  .bg-warning {
    background-color: #E6A23C;
  }
  .bg-danger {
    background-color: #FF151F;
  }
  .bg-info {
    background-color: #909399;
  }

  .bg-text-primary {
    background-color: #2c405a;
  }
  .bg-text-black {
    background-color: #3f536e;
  }
  .bg-text-gray {
    background-color: #8dabc4;
  }
  .bg-text-active {
    background-color: #abc6df;
  }

  .bg-text-disable {
    background-color: #c5d9e8 ;
  }

   .bg-base {
    background-color: #ecf5fd ;
    color:#8dabc4;
  }

   .bg-part {
    background-color: #FAFBFC ;
     color:#8dabc4;
  }

  .bg-text-purple{
    background-color: #ab7df6 ;
  }

  .bg-text-blue{
    background-color: #26c1c9 ;
  }

  .bg-text-yellow{
    background-color:#FACA00 ;
  }

  .bg-text-green{
    background-color: #86c636 ;
  }

  .bg-text-orange{
    background-color: #fd7b1f ;
  }


  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color 色彩

Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Element 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-blue">Blue<div class="value"> #0093EE</div></div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-success">Success<div class="value">#E6A23C</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-warning">Warning<div class="value">#E6A23C</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-danger">Danger<div class="value">#FF151F </div></div>
  </el-col>
</el-row>

### 其他颜色

组件库中用到的其他一些颜色

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">背景/标题<div class="value">#2C405A</div></div>
      <div class="demo-color-box bg-text-black">黑色(文字)<div class="value">#3F536E</div></div>
      <div class="demo-color-box bg-text-gray">灰色<div class="value">#8DABC4</div></div>
      <div class="demo-color-box bg-text-active ">激活<div class="value">#ABC6DF</div></div>
      <div class="demo-color-box bg-text-disable">未激活<div class="value">#C5D9E8</div></div>
      <div class="demo-color-box bg-base">主要背景<div class="value">#ECF5FD   </div></div>
      <div class="demo-color-box bg-part">区块灰色<div class="value">#FAFBFC</div></div>
    </div>
  </el-col>
</el-row>


### 亮色

品牌亮色

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-purple">紫色<div class="value">#AB7DF6</div></div>
      <div class="demo-color-box bg-text-blue">蓝色<div class="value">#26C1C9</div></div>
      <div class="demo-color-box bg-text-yellow">黄色<div class="value">#FAFC00</div></div>
      <div class="demo-color-box bg-text-green ">绿色<div class="value">#86C636</div></div>
      <div class="demo-color-box bg-text-orange">橘色<div class="value">#FDB1F</div></div>
    </div>
  </el-col>
</el-row>

