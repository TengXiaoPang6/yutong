## line 分隔线

<style>
    .block{
    padding: 30px;
    width: 50%;
    box-sizing: border-box;
    }

    .demonstration{
        display:block;
        padding-bottom:20px;
        font-size:16px;
    }

    .box1{
     padding:50px 0;
    }

</style>

### 基础用法

适用广泛的基础用法

:::demo 分隔线默认保留了 10px 的间距

```html
<template>
  <div class="block">
    <span class="demonstration">分隔符1</span>
     <span class="demonstration">最强的分割器。用于从控件面板分离内容块。可以是垂直的和水平的。不能在内容块内使用。</span>
    <div class='box'>
        <el-line></el-line>
    </div>
  </div>
   <div class="block">
    <span class="demonstration">分隔符2</span>
     <span class="demonstration">分隔符，用于将内容块中的控件与内容分开。</span>
    <div class='box'>
        <el-line line2></el-line>
    </div>
  </div>
   <div class="block">
    <span class="demonstration">分隔符3</span>
     <span class="demonstration">该分隔符将内容按重要性顺序分隔在内容块中。不能在内容块之外使用。可用于从块边界缩进。</span>
    <div class='box'>
        <el-line line3></el-line>
    </div>
  </div>
   <div class="block">
    <span class="demonstration">虚线分隔符</span>
     <span class="demonstration">图表和统计块分隔符。</span>
    <div class='box'>
        <el-line dashed></el-line>
    </div>
  </div>

</template>

<style>

</style>
```
:::


### Carousel Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| vertical | 分割线为垂直类型 |Boolean | — | — |
| dashed | 分隔线为虚线类型 | Boolean | — | - |
| line2 | 线型2 |Boolean | — | — |
| line3 | 线性3 | Boolean | — | - |


 