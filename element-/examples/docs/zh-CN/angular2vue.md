<style>
  ul.language-list {
    color: #5e6d82;
    font-size: 14px;
    padding-left: 20px;
    li {
      line-height: 1.8
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 5) this.active = 0;
      }
    }
  }
</script>
## 从 Angular.js 迁移到 Vue.js


#### **迁移示例**

**1.组件迁移**

:::demo

```html
<el-steps :active="active" finish-status="success" :align-center=true>
  <el-step title="指令已下发"></el-step>
  <el-step title="指令验证"></el-step>
  <el-step title="下载完成"></el-step>
  <el-step title="转发完成"></el-step>
  <el-step title="开始刷写"></el-step>
  <el-step title="升级成功"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">下一步</el-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 5) this.active = 0;
      }
    }
  }
</script>
```
:::

**Angular代码结构**
```
+-- bcSteps
 |   +-- js
 |   |   -- controller
 |   |   -- directive
 |   +-- skin
 |    |   +-- css
 |    |   +-- image
 |    |   +-- less
 |   +-- tpl
 |    |   -- main.html
```

**使用 VueJS 组件代替 AngularJS 控制器**

文件：bcSteps/js/controller.js
```javascript
angular.module('PlatformBase').controller('bcStepsController',
    ['$scope', '$state',
        function ($scope, $state) {
        //...
}]);
```
文件：bcSteps/tpl/main.html
```html
<div class="el-steps" ng-class="['el-steps--' + direction]">
    <div class="el-step" ng-repeat="item in items" ng-style="calcStyle($index)" ng-class="...">
            <!-- icon & line -->
        <!-- title & description -->
    </div>
</div>
```

文件：bcSteps.vue
```javascript
<template>
  <div class="el-steps" v-class="">
      <slot><!---这里是父组件的插槽，可以插入子组件bcStep---></slot>
  </div>
</template>
<script>
export default {
  name: 'bcSteps',
  props: {

  },
  data() {
    return {
      steps: [],
      //...
    };
  },
  watch: {
    //...
  }
};
</script>
```
文件：bcStep.vue
```javascript
<template>
  <div class="el-step" v-style="" v-class="">
    <!-- icon & line -->
    <!-- title & description -->
  </div>
</template>

<script>
export default {
  name: 'ElStep',
  props: {
    //...
  },

  data() {
    return {
      //...
    };
  },
  computed: {
    //...
  },
  methods: {
    //...
  },
  mounted() {
    //...
  }
};
</script>
```