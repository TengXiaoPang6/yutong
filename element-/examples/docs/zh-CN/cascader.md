<script>
  import Mock from 'mockjs';
  import Vue from 'vue';
  import axios from 'axios'
  export default {
    data() {
      return {
        options2: [{
          label: '中国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: [{
            label: '辽宁',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山东',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '陕西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '海南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '浙江',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          }]
        }, {
          label: '美国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '英国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '韩国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '法国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致',
            }, {
              value: 'fankui',
              label: '反馈',
            }, {
              value: 'xiaolv',
              label: '效率',
            }, {
              value: 'kekong',
              label: '可控',
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航',
            }, {
              value: 'dingbudaohang',
              label: '顶部导航',
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局',
            }, {
              value: 'color',
              label: 'Color 色彩',
            }, {
              value: 'typography',
              label: 'Typography 字体',
            }, {
              value: 'icon',
              label: 'Icon 图标',
            }, {
              value: 'button',
              label: 'Button 按钮',
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框',
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框',
            }, {
              value: 'input',
              label: 'Input 输入框',
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器',
            }, {
              value: 'select',
              label: 'Select 选择器',
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器',
            }, {
              value: 'switch',
              label: 'Switch 开关',
            }, {
              value: 'slider',
              label: 'Slider 滑块',
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器',
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器',
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器',
            }, {
              value: 'upload',
              label: 'Upload 上传',
            }, {
              value: 'rate',
              label: 'Rate 评分',
            }, {
              value: 'form',
              label: 'Form 表单',
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格',
            }, {
              value: 'tag',
              label: 'Tag 标签',
            }, {
              value: 'progress',
              label: 'Progress 进度条',
            }, {
              value: 'tree',
              label: 'Tree 树形控件',
            }, {
              value: 'pagination',
              label: 'Pagination 分页',
            }, {
              value: 'badge',
              label: 'Badge 标记',
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告',
            }, {
              value: 'loading',
              label: 'Loading 加载',
            }, {
              value: 'message',
              label: 'Message 消息提示',
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框',
            }, {
              value: 'notification',
              label: 'Notification 通知',
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单',
            }, {
              value: 'tabs',
              label: 'Tabs 标签页',
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑',
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单',
            }, {
              value: 'steps',
              label: 'Steps 步骤条',
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框',
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示',
            }, {
              value: 'popover',
              label: 'Popover 弹出框',
            }, {
              value: 'card',
              label: 'Card 卡片',
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯',
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板',
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components',
          }, {
            value: 'sketch',
            label: 'Sketch Templates',
          }, {
            value: 'jiaohu',
            label: '组件交互文档',
          }]
        }],
        optionsWithDisabled: [],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['zujian'],
        selectedOptions4: ['中国']
      };
    },
    created() {
      this.optionsWithDisabled = JSON.parse(JSON.stringify(this.options));
      this.optionsWithDisabled[0].disabled = true;
    },
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
        demos[demos.length - 1].style.padding = '0';
      });
    },
    methods: {
      handleItemChange(val, lastitem, fun, test) {
        setTimeout(_ => {
          switch(test){
            case 1:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@province",
                                    "cities":[],
                                    "objectId":"@integer(10000,99999)",
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    }
                                  ]
                                }).arr
              break;
            case 2:
              Vue.set(lastitem, 'cities', Mock.mock({
                                  "arr|20":[
                                    {
                                    "label":"@city",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr)
              break;
            case 3:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@county",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr
              break;
            case 4:
              lastitem.cities = Mock.mock({
                                  "arr|50":[
                                    { 
                                    "label":"豫A@integer(10000,99999)",
                                    "objectId":"@integer(10000,99999)",
                                    "isOnline":"@boolean()"
                                    }
                                  ]
                                }).arr
              break;
          }
          fun();
        }, 1000);
      },
      filter(val){
        console.log(val)
      },
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style>
  .demo-cascader {
    .el-cascader {
      width: 222px;
    }
  }
  .demo-cascader-size {
    .el-cascader {
      vertical-align: top;
      margin-right: 15px;
    }
  }
  .demo-cascader .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demo-cascader .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

### 基础用法

有两种触发子菜单的方式

:::demo 只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。通过`expand-trigger`可以定义展开子级菜单的触发方式。本例还展示了`change`事件，它的参数为 Cascader 的绑定值：一个由各级菜单的值所组成的数组。
```html
<div class="block">
  <span class="demonstration">默认 click 触发子菜单</span>
  <el-cascader
    :options="options"
    v-model="selectedOptions"
    :clearable=true
    :checkbox=true
    :breadcrumb=true
    @change="handleChange"
    @filter="filter">
  </el-cascader>
</div>
<div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <el-cascader
    expand-trigger="hover"
    :options="options"
    v-model="selectedOptions2"
    @change="handleChange">
  </el-cascader>
</div>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            
            children: [{
              value: 'yizhi',
              label: '一致',
              
            }, {
              value: 'fankui',
              label: '反馈',
              
            }, {
              value: 'xiaolv',
              label: '效率',
              
            }, {
              value: 'kekong',
              label: '可控',
              
            }]
          }, {
            value: 'daohang',
            label: '导航',
            
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航',
              
            }, {
              value: 'dingbudaohang',
              label: '顶部导航',
              
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          checked: true,
          children: [{
            value: 'basic',
            label: 'Basic',
            
            children: [{
              value: 'layout',
              label: 'Layout 布局',
              
            }, {
              value: 'color',
              label: 'Color 色彩',
              
            }, {
              value: 'typography',
              label: 'Typography 字体',
              
            }, {
              value: 'icon',
              label: 'Icon 图标',
              
            }, {
              value: 'button',
              label: 'Button 按钮',
              
            }]
          }, {
            value: 'form',
            label: 'Form',
            
            children: [{
              value: 'radio',
              label: 'Radio 单选框',
              
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框',
              
            }, {
              value: 'input',
              label: 'Input 输入框',
              
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器',
              
            }, {
              value: 'select',
              label: 'Select 选择器',
              
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器',
              
            }, {
              value: 'switch',
              label: 'Switch 开关',
              
            }, {
              value: 'slider',
              label: 'Slider 滑块',
              
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器',
              
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器',
              
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器',
              
            }, {
              value: 'upload',
              label: 'Upload 上传',
              
            }, {
              value: 'rate',
              label: 'Rate 评分',
              
            }, {
              value: 'form',
              label: 'Form 表单',
              
            }]
          }, {
            value: 'data',
            label: 'Data',
            
            children: [{
              value: 'table',
              label: 'Table 表格',
              
            }, {
              value: 'tag',
              label: 'Tag 标签',
              
            }, {
              value: 'progress',
              label: 'Progress 进度条',
              
            }, {
              value: 'tree',
              label: 'Tree 树形控件',
              
            }, {
              value: 'pagination',
              label: 'Pagination 分页',
              
            }, {
              value: 'badge',
              label: 'Badge 标记',
              
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            
            children: [{
              value: 'alert',
              label: 'Alert 警告',
              
            }, {
              value: 'loading',
              label: 'Loading 加载',
              
            }, {
              value: 'message',
              label: 'Message 消息提示',
              
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框',
              
            }, {
              value: 'notification',
              label: 'Notification 通知',
              
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单',
              
            }, {
              value: 'tabs',
              label: 'Tabs 标签页',
              
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑',
              
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单',
              
            }, {
              value: 'steps',
              label: 'Steps 步骤条',
              
            }]
          }, {
            value: 'others',
            label: 'Others',
            
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框',
              
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示',
              
            }, {
              value: 'popover',
              label: 'Popover 弹出框',
              
            }, {
              value: 'card',
              label: 'Card 卡片',
              
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯',
              
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板',
              
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          
          children: [{
            value: 'axure',
            label: 'Axure Components',
            
          }, {
            value: 'sketch',
            label: 'Sketch Templates',
            
          }, {
            value: 'jiaohu',
            label: '组件交互文档',
            
          }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      filter(val){
        console.log(val)
      }
    }
  };
</script>
```
:::

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

:::demo 本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。
```html
<el-cascader
  :options="optionsWithDisabled"
></el-cascader>
<script>
  export default {
    data() {
      return {
        optionsWithDisabled: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    }
  };
</script>
```
:::

### 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

:::demo 属性`show-all-levels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级
```html
<el-cascader
  :options="options"
  :show-all-levels="false"
></el-cascader>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    }
  };
</script>
```
:::

### 默认值

:::demo 默认值通过数组的方式指定。
```html
<el-cascader
  :options="options"
  v-model="selectedOptions3"
></el-cascader>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions3: ['zujian']
      };
    }
  };
</script>
```
:::

### 选择即改变

点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。

:::demo 若需要允许用户选择任意一级选项，则可将`change-on-select`赋值为`true`
```html
<el-cascader
  :options="options"
  change-on-select
></el-cascader>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    }
  };
</script>
```
:::

### 动态加载次级选项

当选中某一级时，动态加载该级下的选项。

:::demo 本例的选项数据源在初始化时不包含城市数据。利用`active-item-change`事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了`props`,`slot`的用法。
```html
<el-cascader
  :options="options2"
  @active-item-change="handleItemChange"
  :props="props"
  @filter="filter"
  placeholder="选择组织"
>
<?xml version="1.0" encoding="UTF-8"?>
<svg width="14px" height="14px" viewBox="0 0 14 14" slot="icon" id="icon_bus_filled_grey" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon_bus_filled_blue</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="正式页面" stroke="none" stroke-width="1" fill-rule="evenodd">
        <g id="2.31-充电机监控-组织筛选-最后车辆" transform="translate(-299.000000, -278.000000)">
            <g id="左侧菜单/地图监控/搜索展开" transform="translate(80.000000, 178.000000)">
                <g id="树状筛选">
                    <g id="Filter/Cascader/Level1-Choice" transform="translate(0.000000, 91.000000)">
                        <g id="右" transform="translate(185.000000, 0.000000)">
                            <g id="Group">
                                <g id="Filter/Date/Hour-List/上圆角">
                                    <g id="Group" transform="translate(16.000000, 7.000000)">
                                        <g id="Icons-Grey-/-bus" transform="translate(18.000000, 2.000000)">
                                            <path d="M10.5,12.4444444 L3.5,12.4444444 L3.5,13 C3.5,13.5522847 3.05228475,14 2.5,14 L2.16666667,14 C1.61438192,14 1.16666667,13.5522847 1.16666667,13 L1.16666667,11.6666667 L1.19144627,11.6666667 C1.17522905,11.5951975 1.16666667,11.5208209 1.16666667,11.4444444 L1.16666667,5.44444444 L1,5.44444444 L1,5.44444444 C0.44771525,5.44444444 -1.5440923e-16,4.99672919 -2.22044605e-16,4.44444444 L-5.55111512e-17,3.33333333 L0,3.33333333 C-6.76353751e-17,2.78104858 0.44771525,2.33333333 1,2.33333333 L1,2.33333333 L1.16666667,2.33333333 L1.16666667,1 L1.16666667,1 C1.16666667,0.44771525 1.61438192,-5.18242566e-16 2.16666667,-1.11022302e-15 L2.16666667,2.96059473e-17 L11.8333333,4.60865913e-15 L11.8333333,4.88498131e-15 C12.3856181,5.76458304e-15 12.8333333,0.44771525 12.8333333,1 L12.8333333,2.33333333 L13,2.33333333 C13.5522847,2.33333333 14,2.78104858 14,3.33333333 L14,4.44444444 C14,4.99672919 13.5522847,5.44444444 13,5.44444444 L12.8333333,5.44444444 L12.8333333,11.4444444 C12.8333333,11.5208209 12.824771,11.5951975 12.8085537,11.6666667 L12.8333333,11.6666667 L12.8333333,13 C12.8333333,13.5522847 12.3856181,14 11.8333333,14 L11.5,14 L11.5,14 C10.9477153,14 10.5,13.5522847 10.5,13 L10.5,12.4444444 Z M3.33333333,2.33338044 C2.78104858,2.33338044 2.33333333,2.78109569 2.33333333,3.33338044 L2.33333333,3.33338044 L2.33333333,7.70842847 C2.33333333,8.19726762 2.68674638,8.61445773 3.16893435,8.69482239 L3.16893435,8.69482239 L6.67120203,9.27853367 C6.88889924,9.31481654 7.11110076,9.31481654 7.32879797,9.27853367 L7.32879797,9.27853367 L10.8310657,8.69482239 C11.3132536,8.61445773 11.6666667,8.19726762 11.6666667,7.70842847 L11.6666667,3.33338044 C11.6666667,2.78109569 11.2189514,2.33338044 10.6666667,2.33338044 L3.33333333,2.33338044 Z M3.19417161,9.8795523 C3.12748358,9.85732295 3.05764793,9.84599018 2.98735257,9.84599018 C2.62614772,9.84599018 2.33333333,10.1388046 2.33333333,10.5000094 L2.33333333,10.5000094 L2.33333333,10.5000094 C2.33333333,11.0011544 2.73959159,11.4074126 3.24073655,11.4074126 L4.66666667,11.4074126 L4.66666667,11.0911432 C4.66666667,10.6607128 4.39123657,10.2785739 3.98289443,10.1424599 L3.19417161,9.8795523 Z M10.0171056,10.1424599 C9.60876343,10.2785739 9.33333333,10.6607128 9.33333333,11.0911432 L9.33333333,11.4074126 L10.7592634,11.4074126 C11.2604084,11.4074126 11.6666667,11.0011544 11.6666667,10.5000094 C11.6666667,10.4297141 11.6553339,10.3598784 11.6331046,10.2931904 C11.5188816,9.95052137 11.1484974,9.76532929 10.8058284,9.8795523 L10.0171056,10.1424599 Z" id="Combined-Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
</el-cascader>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: '中国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: [{
            label: '辽宁',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河北',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '河南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山东',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '山西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '陕西',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '湖南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '海南',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          },{
            label: '浙江',
            objectId: 10000,
            objectCount: 10,
            onlineCount: 0,
            cities: []
          }]
        }, {
          label: '美国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '英国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '韩国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }, {
          label: '法国',
          objectId: 10000,
          objectCount: 10,
          onlineCount: 0,
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },

    methods: {
      handleItemChange(val, lastitem, fun, test) {
        setTimeout(_ => {
          switch(test){
            case 1:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@province",
                                    "cities":[],
                                    "objectId":"@integer(10000,99999)",
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    }
                                  ]
                                }).arr
              break;
            case 2:
              Vue.set(lastitem, 'cities', Mock.mock({
                                  "arr|20":[
                                    {
                                    "label":"@city",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr)
              break;
            case 3:
              lastitem.cities = Mock.mock({
                                  "arr|10":[
                                    {
                                    "label":"@county",
                                    "cities":[],
                                    "objectCount": 10,
                                    "onlineCount": 0,
                                    "objectId":"@integer(10000,99999)"
                                    }
                                  ]
                                }).arr
              break;
            case 4:
              lastitem.cities = Mock.mock({
                                  "arr|50":[
                                    { 
                                    "label":"豫A@integer(10000,99999)",
                                    "objectId":"@integer(10000,99999)",
                                    "isOnline":"@boolean()"
                                    }
                                  ]
                                }).arr
              break;
          }
          fun();
        }, 1000);
      },
      filter(val){
        console.log(val)
      }
    }
  };
</script>
```
:::

### 可搜索

可以快捷地搜索选项并选择。

:::demo 将`filterable`赋值为`true`即可打开搜索功能。
```html
<div class="block">
  <span class="demonstration">只可选择最后一级菜单的选项</span>
  <el-cascader
    placeholder="试试搜索：指南"
    :options="options"
    filterable
  ></el-cascader>
</div>
<div class="block">
  <span class="demonstration">可选择任意一级菜单的选项</span>
  <el-cascader
    placeholder="试试搜索：指南"
    :options="options"
    filterable
    change-on-select
  ></el-cascader>
</div>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| checkbox | 是否支持多选 | boolean | true / false | true |
| breadcrumb | 是否显示面包屑 | boolean | true / false | true |
| options | 可选项数据源，键名可通过 `props` 属性配置 | array | — | — |
| props | 配置选项，具体见下表 | object | — | — |
| value | 选中项绑定值   | array | — | — |
| separator | 选项分隔符 | string | — | 斜杠'/' |
| popper-class | 自定义浮层类名   | string | —  | — |
| placeholder | 输入框占位文本 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否支持清空选项 | boolean | — | false |
| expand-trigger | 次级菜单的展开方式 | string | click / hover | click |
| show-all-levels | 输入框中是否显示选中值的完整路径 | boolean | — | true |
| filterable | 是否可搜索选项 | boolean | — | — |
| debounce | 搜索关键词输入的去抖延迟，毫秒 | number | — | 300 |
| change-on-select | 是否允许选择任意一级的选项 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |
| before-filter | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选 | function(value) | — | — |

### props
| 参数     | 说明              | 类型   | 可选值 | 默认值 |
| -------- | ----------------- | ------ | ------ | ------ |
| value    | 指定选项的值为选项对象的某个属性值 | string | — | — |
| label    | 指定选项标签为选项对象的某个属性值 | string | — | — |
| children | 指定选项的子选项为选项对象的某个属性值 | string | — | — |
| disabled | 指定选项的禁用为选项对象的某个属性值 | string | — | — |

### slot
| 名字     | 说明              | 用法   |
| -------- | ----------------- | ------ |
| icon    | 指定最后一级车辆前显示的图标，根据最后一级`isOnline`属性显示车辆是否在线颜色 | 传入SVG元素，大小为14*14，id为`icon_bus_filled_grey`,请勿传入`fill`属性 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发的事件 | 当前值 |
| active-item-change | 当父级选项变化时触发的事件，仅在 `change-on-select` 为 `false` 时可用 | (val:各父级选项数组, lastitem:最后一级被选中的选项, fun:回调函数，当子级数据加载完成时必须调用) |
| blur | 在 Cascader 失去焦点时触发 | (event: Event) |
| focus | 在 Cascader 获得焦点时触发 | (event: Event) |
| filter | 当点击筛选时时触发 | 筛选结果 |